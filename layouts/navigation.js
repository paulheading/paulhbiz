import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { PaulH } from "logos";
import { is } from "scripts/helpers";

export default function NavigationLayout() {
  const path = useRouter().pathname;
  const width = useSelector(({ width }) => width);

  return (
    <div className={`component navigation-block ${is.home(path)}`}>
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
            <a className="button navigation">About</a>
          </Link>
          <Link href="/resume">
            <a className="link navigation">Resume</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
