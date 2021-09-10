import { filter, remove, pathify } from 'scripts/helpers'
import { TRELLO, data, get, converter } from 'scripts/getters/trello/_shared'
import pull from 'scripts/getters'

const getBlogDesc = async (blog_id, output) => {
  const blog = await pull.Medium();
  blog_id = blog_id.split('-');
  blog_id = blog_id[blog_id.length - 1];
  
  output = blog.items.filter(({ guid }) => {
    guid = guid.split('/');
    guid = guid[guid.length - 1];
    return guid === blog_id ? true : false;
  })[0].description;

  if (output.startsWith(`\n`)) { output = output.substring(1); }  
  if (output.startsWith(`<blockquote>`)) {
    output = output.split(`</blockquote>`);
    output = output[1];
  } return output;
}

const getProjectCards = async () => {
  let cards = await get.cardsOnList(TRELLO.LIST.PROJECTS);

  if (cards) {
    cards = cards.map(async card => {
      const actions = await data.trello(`cards/${card.id}/actions`);
      const attachments = await data.trello(`cards/${card.id}/attachments`);
      const route = `/projects/${pathify(remove.hero(card.name))}`;
      const more = filter.in.more(attachments);

      if (!more) { 
        attachments.push({ name: "Read more", url: route });
        card.desc = converter.makeHtml(card.desc);
      } else {
        card.desc = await getBlogDesc(more.url);
      }

      card.route = route;
      card.actions = actions;
      card.attachments = attachments;
      card.list = { name: "Projects" };
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