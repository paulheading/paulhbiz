import { useSelector } from "react-redux";
import Link from "next/link";
import { PaulH } from "logos";
import { is } from "scripts/helpers";

export default function NavigationLayout() {
  const width = useSelector(({ width }) => width);

  return (
    <div className="component navigation-block">
      <div className="container navigation-block">
        <div className="wrap logo">
          <Link href="/">
            <a className="link logo">
              { is.small(width) ? <PaulH.mobile /> : <PaulH.desktop /> }
            </a>
          </Link>
        </div>
        <div className="wrap navigation-block">
          <Link href="/about">
            <a className="button navigation --about">About</a>
          </Link>
          <Link href="/resume">
            <a className="link navigation --resume">Resume</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
