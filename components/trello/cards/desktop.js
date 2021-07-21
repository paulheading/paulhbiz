import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { remove, filter, print } from "scripts/helpers";
import { Card } from "react-bootstrap";

export default function DesktopCards() {
  const trello = useSelector(({ trello }) => trello);
  let content = trello.ready ? filter.trello(trello, "Projects") : filter.out.hero(trello.projects.cards); 
  content = content.filter((_, index) => index < 3);
  const subtitle = <span className="title card-subtitle placeholder">.</span>;

  return content.map(({ name, placeholder, attachments, labels }, index) => {
    const link = filter.in.more(attachments);    
    name = remove.hero(name);
    
    return (
      <Link href={link.url}>
        <a className="link desktop-card">
          <Card className="desktop" key={`desktop-${index}`}>
            <span className={`title desktop-card ${placeholder ? "placeholder" : ""}`}>{ filter.string(name, 40) }</span>
            { labels && print.labels(labels) }
          </Card>
        </a>          
      </Link>
    );
  });  
};
