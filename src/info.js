import React from 'react';

function Info() {
  let name = 'Woo soyun';
  let gender = 'femail';
  let age = 99;
  let email = 'yun@gmail.com';
  let address = 'Busan';
  return (
    <div>
      <h3>My Infomation</h3>
      <table>
        <thead></thead>
        <tfoot></tfoot>
        <tbody>
          <tr>
            <td>이름</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>성별</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>나이</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>{address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
//선생님 코드
function Info2() {
  let name = '홍길동';
  let gender = '남성';
  let age = 24;
  let email = 'gildong@gmail.com';
  let address = '부산광역시 전포대로 100길 100';
  return (
    <div>
      <label for="user-name">이름 : </label>
      <h3 className="inlines" id="user-name">
        {name}
      </h3>
      <br />
      <label for="user-age">나이 : </label>
      <h3 className="inlines" id="user-age">
        {age}
      </h3>
      <br />
      <label for="user-gender">성별 : </label>
      <h3 className="inlines" id="user-gender">
        {gender}
      </h3>
      <br />
      <label for="user-email">이메일 : </label>
      <h3 className="inlines" id="user-email">
        {email}
      </h3>
      <br />
      <label for="user-addr">주소 : </label>
      <h3 className="inlines" id="user-addr">
        {address}
      </h3>
      <br />
    </div>
  );
}

export { Info };
export { Info2 };
