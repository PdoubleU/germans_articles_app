import { client, q } from '../config/db';

//***checking the database if word exists***/
const isNounInDictionaryAPI = ({ nounDE }) =>
  client
    .query(q.Get(q.Match(q.Index('check_word'), nounDE)))
    .then(() => {
      //if word is in DB we return true, that points we cannot add this word
      return true;
    })
    .catch(() => {
      //otherwise we are allowed to update database and add a new noun, return false
      return false;
    });

export default isNounInDictionaryAPI;
