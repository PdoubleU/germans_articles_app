import { client, q } from '../config/db';
import { refDER, refDIE, refDAS, artSet } from './APIconstans';

const addNounAPI = (props) => {
  const { nounDE, article, nounPL } = props;
  const { der, die, das } = artSet;
  const { nouns, articles } = { nouns: 'nouns', articles: 'articles' };

  const articleRef = (article) => {
    switch (article) {
      case der:
        return refDER;
      case die:
        return refDIE;
      case das:
        return refDAS;
      default:
        return undefined;
    }
  };

  return client
    .query(
      q.Create(q.Collection(nouns), {
        data: {
          nounDE: nounDE,
          article: q.Ref(q.Collection(articles), articleRef(article)),
          nounPL: nounPL,
        },
      })
    )
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log('Error: ', error.message);
      return false;
    });
};
export default addNounAPI;
