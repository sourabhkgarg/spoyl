import request from 'superagent';


const baseUrl = 'https://api.unsplash.com/';
const appId = '5f50b206626818ebd3d183e71bea6026f90f85500ee2f519c5ca588d45ab7cc1';


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
