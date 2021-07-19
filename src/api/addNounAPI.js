import { client, q } from '../config/db';
import { refDER, refDIE, refDAS } from './APIconstans';

const addNounAPI = (props) => {
  const { nounDE, article, nounPL } = props;

  const articleRef = (article) => {
    switch (article) {
      case 'der':
        return refDER;
      case 'die':
        return refDIE;
      case 'das':
        return refDAS;
      default:
        return undefined;
    }
  };
  console.log(nounDE, article, nounPL);
  return client
    .query(
      q.Create(q.Collection('nouns'), {
        data: {
          nounDE: nounDE,
          article: q.Ref(q.Collection('articles'), articleRef(article)),
          nounPL: nounPL,
        },
      })
    )
    .then(() => {
      console.log('api post');
      return true;
    })
    .catch((error) => {
      console.log('Error: ', error.message);
      return false;
    });
};
export default addNounAPI;
