import { client, q } from '../config/db';

const getNounAPI = () =>
  client
    .query(q.Paginate(q.Match(q.Ref('indexes/get_word'))))
    .then((response) => {
      console.log('api query');
      return response.data;
    })
    .catch((error) => console.log('Error: ', error.message));

export default getNounAPI;
