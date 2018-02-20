import request from 'superagent';


const baseUrl = 'https://api.unsplash.com/';
const appId = '98f368ef5eb59cc18bf7e745f93f8ecfca332d981c1f4c64e8ff5a8dd876970a';


class api{


  static fetchListOfImages(pageNo) {
    return new Promise((resolve, reject) => {
      request.
      get( baseUrl + 'photos?per_page=20&client_id='+appId+'&page='+pageNo).
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }



}

export default api;
