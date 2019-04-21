import { PRISMIC_URL } from './urls';

const Prismic = require('prismic-javascript');

export default class ContentApi {
  async getAllDocs() {
    Prismic.getApi(PRISMIC_URL)
      .then(function(api) {
        return api.query(''); // An empty query will return all the documents
      })
      .then(
        function(response) {
          console.log('Documents: ', response.results);
          return response.results;
        },
        function(err) {
          console.log('Something went wrong: ', err);
        }
      );
  }

  // async fetchNewKey() {
  //     const url = `${DISNEY_ID_JGC_URL}/api-key`;
  //     try {
  //         const res = await axios.post(url);
  //         return res.headers["api-key"];
  //     } catch (e) {
  //         return e.response;
  //     }
  // }

  // async newsletterSignUp(key, signUpData) {
  //     const url = `${DISNEY_ID_JGC_URL}/marketing`;
  //     try {
  //         const res = await axios.post(url, signUpData, { headers: {"Authorization" : `APIKEY ${key}`} });
  //         return res;
  //     } catch (e) {
  //         return e.response;
  //     }
  // }
}
