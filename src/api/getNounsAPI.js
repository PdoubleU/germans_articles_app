import { client, q } from '../config/db';

const getNounsAPI = () =>
  client
    .query(q.Paginate(q.Match(q.Ref('indexes/get_word')), { size: 100000 }))
    .then((response) => {
      console.log('api query');
      return response.data;
    })
    .catch((error) => console.log('Error: ', error.message));

export default getNounsAPI;
