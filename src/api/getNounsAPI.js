import { client, q } from '../config/db';

const endpoint = 'indexes/get_word';

const getNounsAPI = () =>
  client
    .query(q.Paginate(q.Match(q.Ref(endpoint)), { size: 100000 }))
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log('Error: ', error.message));

export default getNounsAPI;
