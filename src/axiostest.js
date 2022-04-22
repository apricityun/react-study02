/*
* Axios란?
-자바스크립트로 비동기 통신을 할 수 있도록 해주는 모듈
 (*자바스크립트에는 기본적으로 비동기 통신을 위한 XHR[XML Http Request]라는 것이 존재)
 (*XHR을 사용하여 ajax 통신하는데 사용하는데 사용 방법이 어려움.)
-jQeury를 사용하면 ajax 통신을 쉽게 할 수 있음. $.ajax, $.get, $.post
-frontend 개발 시 jQuery의 각종 문제점 때문에 jQuery를 사용하지 않게 되면서
 비동기 통신을 쉽게 할 수 있는 방법이 필요 → ★ Axios ★

→ React 및 Vue.js에서는 Axios 모듈을 사용하여 비동기 통신을 구현

* Axios 설치
>>yarn install axios

* CommonJS
-ES5 버전에서 사용하던 node.js 로딩하는 방법. / ES6부터는 import 사용.
-이전 버전에서
 const axios = require('axios').default; 사용하던 방법

*
비동기 함수인 promise 기반으로 실행되기 때문에 then, catch 등 사용

*/

//axios 모듈 불러오기
// import axios from 'axios';
const axios = require('axios').default;

/*axios 사용법
axios.통신방식(서버주소).then(콜백함수).catch(콜백함수)
*/

axios
  .get('https://yts-proxy.now.sh/list_movies.json')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//SyntaxError: Cannot use import statement outside a module
