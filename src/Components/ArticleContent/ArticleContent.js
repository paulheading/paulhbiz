import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  doesItemExist,
  objectReady,
  handleDate,
  parse,
} from "../../modules/helpers";
import NotFound from "../../Components/NotFound/NotFound";

function data(article) {
  return (
    <div className="component-blog-content">
      <h1 className="article__title">{article.title}</h1>
      <div className="article__content">{parse(article.content)}</div>
      <p className="article__published">{handleDate(article.published)}</p>
      <Link className="article__back-link" to="/blog">
        Back
      </Link>
    </div>
  );
}

function placeholder() {
  return (
    <div className="component-blog-content">
      <h1 className="article__title placeholder">.</h1>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
      <p className="article__content placeholder">.</p>
    </div>
  );
}

function printContent(article) {
  return (
    <div className="component-article-content">
      <div className="feed-content__container">
        <div className="feed-content__wrap">
          {article ? data(article) : placeholder()}
        </div>
      </div>
    </div>
  );
}

function validatePath(medium, path) {
  if (!objectReady(medium)) {
    return printContent();
  } else {
    let article = doesItemExist(medium, path);
    if (article.exists) {
      article = article.data;
      return printContent(article);
    } else {
      return <NotFound />;
    }
  }
}

function ArticleContent() {
  const { articleId } = useParams();
  const store = {
    mediumData: useSelector((state) => state.mediumData),
  };
  return validatePath(store.mediumData, articleId);
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ArticleContent);
