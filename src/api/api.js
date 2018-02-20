import request from 'superagent';


const baseUrl = 'https://api.unsplash.com/';
const appId = '1fd56fbf14921c460434d36bc9592f14522ad0f94472ba67e0703abff742ba6a';


class api{


  static fetchListOfImages(queryParam) {
    return new Promise((resolve, reject) => {
      request.
      get( baseUrl + 'photos?per_page=20&client_id='+appId+queryParam).
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }

  static searchImages(queryParam) {
    return new Promise((resolve, reject) => {
      request.
      get( baseUrl + 'search/photos?per_page=20&client_id='+appId+queryParam).
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }



}

export default api;
