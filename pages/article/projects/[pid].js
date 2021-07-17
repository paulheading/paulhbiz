import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { NotFound, Loading, Article } from 'layouts';
import { card as init } from 'store/init';

export default function ArticleRoute() {
  const router = useRouter();
  const { pid } = router.query;
  const trello = useSelector(({ trello }) => trello);
  const article = {
    route: `/article/projects/${ pid }`,
    data: null
  }

  article.match = init.route === article.route ? true : false;
  article.data = article.match ? init : null;

  function validateRoute() {
    if (!trello.ready) {
      return article.match ? <Article { ...article.data } /> : <Loading />;
    } else {
      trello.projects.cards.forEach(card => {
        if (card.route === article.route) {
          article.match = true;
          article.data = card;
        }
      });
      return article.match ? <Article { ...article.data } /> : <NotFound />;
    }
  }

  return validateRoute();
}