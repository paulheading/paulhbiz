import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import { parse, remove, seo, filter } from "modules/helpers";

function ArticleContent({ card }) {
  const live = filter.in.live(card.attachments);
  const code = filter.in.code(card.attachments);
  
  return (
    <div className="component-about-content">
      <Helmet>
        <title>{ seo.title(remove.hero(card.name)) }</title>
        <meta name="description" content={ card.desc } />
      </Helmet>
      <div className="container feed-content">
        <div className="wrap feed-content">
          <p>{ remove.hero(card.name) }</p>
          { parse(card.desc) }          
          { live && <p>You can see the <a href={live.url}>live project here</a></p> }
          { code && <p>You can see the <a href={code.url}>live code here</a></p> }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ArticleContent);
