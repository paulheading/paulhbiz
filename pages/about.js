import { useSelector } from "react-redux";
import Link from "next/link";
import { TrelloPage } from "components";
import seo from "scripts/seo";
import { Head } from "layouts";

export default function AboutPage() {
  const trello = useSelector(({ trello }) => trello);

  const print = {
    link: trello.ready ? <p className="copy resume-link">My online resume is <Link href="/resume"><a>available here</a></Link>.</p> : <p className="copy resume-link placeholder">.</p>
  }

  return (
    <div className="component about-content">
      <Head { ...seo.about } />
       <div className="container feed-content">
        <div className="wrap feed-content">
          <TrelloPage name="About" />
          { print.link }
        </div>
      </div>
    </div>
  );
}
