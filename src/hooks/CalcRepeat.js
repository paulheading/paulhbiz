import { useEffect } from "react";
import { connect } from "react-redux";
import { repeat } from "actions";

function CalcRepeat({ target, repeat }) {
  useEffect(() => {
    if (target) {
      const calcRepeat = Math.ceil((window.innerWidth + 500) / target.offsetWidth);
      let resize;
      repeat(calcRepeat);
      window.addEventListener("resize", () => {
        clearTimeout(resize);
        resize = setTimeout(() => repeat(calcRepeat), 100);
      });      
    }
  }, [target, repeat]);

  return null;
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{ repeat })(CalcRepeat);