import request from 'superagent';


const baseUrl = 'https://api.unsplash.com/';
const appId = '00dc3847d3148f85219b866436ac0494a3a9717374c39ecc77970ed82ee15320';


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
