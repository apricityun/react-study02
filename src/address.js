import React from 'react';

//jsx문법에서는 html 태그를 사용 시 반드시 시작태그와 끝태그가 존재
//ex) <img> : <img></img>, <img />
function Address(props) {
  let name = props.name;
  let sex = props.sex;
  let email = props.email;
  //  const {name, sex, email} = props;
  return (
    <div>
      <h3>Friend Profile</h3>
      <p>name : {name}</p>
      <p>sex : {sex}</p>
      <p>email : {email}</p>
    </div>
  );
}

//선생님 코드
//App.js에서 데이터 입력
function Addr(props) {
  const { name, gender, email } = props;

  return (
    <div>
      <hr></hr>
      <div>
        <label for="user-name">이름 : </label>
        <h3 className="inlines" id="user-name">
          {name}
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
      </div>
    </div>
  );
}

export { Address };
export { Addr };
