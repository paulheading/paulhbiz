import { useEffect } from "react";
import { connect } from "react-redux";
import { siteWidth } from "actions";

function CalcWidth({ siteWidth }) {
  useEffect(() => {
    let resize;
    siteWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => siteWidth(window.innerWidth), 0);
    });
  }, [siteWidth]);

  return null;
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ siteWidth })(CalcWidth);