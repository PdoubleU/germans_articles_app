import { client, q } from '../config/db';

const endpoint = 'indexes/get_word';

const getNounsAPI = () =>
  client
    .query(q.Paginate(q.Match(q.Ref(endpoint)), { size: 100000 }))
    .then((response) => {
      let parsedData = [],
        index = 0;
      for (let item of response.data) {
        parsedData[index] = {
          nounDE: item[0],
          article: item[1],
          nounPL: item[2],
          id: item[3],
        };
        index++;
      }
      return parsedData;
    })
    .catch((error) => console.log('Error: ', error.message));

export default getNounsAPI;
