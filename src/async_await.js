const axios = require('axios').default;

/** 흐름
 * get 가져온 결과값이 변수 login에 들어감
 *
 */

//비동기 방식을 사용하지 않았을 경우!!
//정상적인 동작은 되지 않지만 프로그램의 흐름을 파악하기는 쉬움
// function logName(userId) {
//     var login = axios.get('localhost: 8080?userId='+userId);

//     if (login.auth == 'success') {
//       console.log(user.name);
//     }
//   }

//비동기 방식을 사용했을 경우(promise)
//비동기 방식 혹은 콜백 방식에 대한 이해가 있을 경우에만 프로그램의 흐름을 파악할 수 있음.
function logName(userId) {
  axios.get('localhost: 8080?userId=' + userId).then((res) => {
    if (res.auth == 'success') {
      console.log(res.name);
    }
  });
}

//async, await 적용했을 경우
//async/await를 사용하면 콜백에 대한 이해가 없어도 프로그램의 흐름을 쉽게 파악할 수 있음.
async function logName(userId) {
  var login = await axios.get('localhost: 8080?userId=' + userId);

  if (login.auth == 'success') {
    console.log(user.name);
  }
}

console.log('Login Proccess...');
logName('admin');
