import { remove, pathify } from 'scripts/helpers'
import { TRELLO, data, get, converter } from './_shared';
import getProjectCards from 'scripts/getters/trello/_projects'

const getCardData = async (id, list) => {
  let cards = await get.cardsOnList(id);

  if (!cards) { 
    return null; 
  } else {
    cards = cards.map(async card => {
      const actions = await data.trello(`cards/${card.id}/actions`);
      const attachments = await data.trello(`cards/${card.id}/attachments`);
      const route = `/${pathify(list)}/${pathify(remove.hero(card.name))}`;

      card.route = route;
      card.actions = actions;
      card.attachments = attachments;
      card.list = { name: list };
      card.desc = converter.makeHtml(card.desc);
      if (list !== "Pages") { card.attachments.push({ name: "Read more", url: route }); }
      card.svg = get.svgsOnCard(actions);
      card.class = `card-${card.id}`;
      card.placeholder = false;
      get.animation(card);
      return card;
    });
    return data.promise(cards);
  }
}

export default async function getTrello() {
  const content = {
    pages: {
      info: await get.list(TRELLO.LIST.PAGES),
      cards: await getCardData(TRELLO.LIST.PAGES, "Pages"),
    },
    projects: {
      info: await get.list(TRELLO.LIST.PROJECTS),
      cards: await getProjectCards(),
    },
    roles: {
      info: await get.list(TRELLO.LIST.ROLES),
      cards: await getCardData(TRELLO.LIST.ROLES, "Roles"),
    },
    education: {
      info: await get.list(TRELLO.LIST.EDUCATION),
      cards: await getCardData(TRELLO.LIST.EDUCATION, "Education"),
    },
  };

  if (!content.projects.cards) {
    console.log("failed to getTrello");
    return null;
  } else {
    content.ready = true;
    console.log("trello: ", content);
    return content;
  }
};