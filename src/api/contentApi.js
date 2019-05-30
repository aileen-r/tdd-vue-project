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
}
