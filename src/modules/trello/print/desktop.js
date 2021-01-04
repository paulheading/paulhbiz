import { Link } from "react-router-dom";
import { objectReady, parse } from "../../helpers";
import { DotsSvg, AddCardSvg } from "../../../Components/SvgIcons";
import { printTopbar } from "../../timezone/print";
import { printPlaylist } from "../../spotify/print";

export const printDesktop = {
  topbar: (feed) => {
    return printTopbar(feed);
  },
  projects: (feed) => {
    return (
      <div className="window__container">
        <div className="trello__list">
          <div className="trello__header">
            {header(feed)}
            <DotsSvg />
          </div>
          {cards(feed)}
          <div className="trello__footer">
            {footer(feed)}
            <AddCardSvg />
          </div>
        </div>
      </div>
    );
  },
  playlist: (feed) => {
    return printPlaylist(feed);
  },
};

function header(trello) {
  return !objectReady(trello) ? (
    <div className="trello__title placeholder">.</div>
  ) : (
    <div className="trello__title">{trello.projects.info.name}</div>
  );
}

export function cards(trello) {
  if (!objectReady(trello)) {
    return (
      <div>
        {placeholders()}
        {placeholders()}
        {placeholders()}
      </div>
    );
  } else {
    return trello.projects.cards.map((card, index) => {
      if (index < 3) {
        return (
          <Link to="/" className="trello__card" key={card.id}>
            {parse(card.name)}
          </Link>
        );
      } else {
        return null;
      }
    });
  }
}

function footer(trello) {
  return !objectReady(trello) ? (
    <div className="trello__add-another placeholder">.</div>
  ) : (
    <div className="trello__add-another">+ Add another card</div>
  );
}

function placeholders() {
  return (
    <div className="trello__card placeholder">
      <div>.</div>
    </div>
  );
}
