import { filter, remove, pathify } from 'scripts/helpers'
import { TRELLO, data, get, converter } from './_shared';

const getProjectCards = async () => {
  let cards = await get.cardsOnList(TRELLO.LIST.PROJECTS);

  if (cards) {
    cards = cards.map(async card => {
      const actions = await data.trello(`cards/${card.id}/actions`);
      const attachments = await data.trello(`cards/${card.id}/attachments`);
      const route = `/projects/${pathify(remove.hero(card.name))}`;
      const more = filter.in.more(attachments);

      if (!more) { attachments.push({ name: "Read more", url: route }); }

      card.route = route;
      card.actions = actions;
      card.attachments = attachments;
      card.list = { name: "Projects" };
      card.desc = converter.makeHtml(card.desc);
      card.svg = get.svgsOnCard(actions);
      card.class = `card-${card.id}`;
      card.placeholder = false;
      get.animation(card);

      return card;
    });
    return data.promise(cards);    
  } return null;
}

export default getProjectCards;