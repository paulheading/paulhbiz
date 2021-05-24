import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { TrelloPage } from "components/Trello";
import getMediumData from "modules/medium";
import { medium } from "actions";

function BlogPage({ medium }) {
  const store = { seo: useSelector(state => state.seo) }  
  const seo = store.seo.blog;

  useEffect(() => (async () => medium(await getMediumData()))(), [medium]);

  return (
    <div className="component about-content">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="Blog" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{medium})(BlogPage);
