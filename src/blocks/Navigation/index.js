import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { MobileLogo, DesktopLogo } from "icons";
import { is } from "modules/_helpers";

export default function NavigationBlock() {
  const path = useLocation().pathname;
  const width = useSelector(state => state.width);

  return (
    <div className={`component navigation-block ${is.home(path)}`}>
      <div className="container navigation-block">
        <div className="wrap logo">
          <Link to="/" className="link logo">
            { is.small(width) ? <MobileLogo /> : <DesktopLogo /> }
          </Link>
        </div>
        <div className="wrap navigation-block">
          <Link to="/about" className="button navigation-block">About</Link>
          <Link to="/resume" className="link navigation-block">Resume</Link>
        </div>
      </div>
    </div>
  );
};
