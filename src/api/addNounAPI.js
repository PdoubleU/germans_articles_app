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
  client
    .query(
      q.Create(q.Collection('nouns'), {
        data: {
          nounDE: nounDE,
          article: q.Ref(q.Collection('articles'), articleRef(article)),
          nounPL: nounPL,
        },
      })
    )
    .then((response) => {
      console.log('api post');
      return response;
    })
    .catch((error) => console.log('Error: ', error.message));
};
export default addNounAPI;
