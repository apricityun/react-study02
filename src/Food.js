import React from 'react';
import './Food.css';

//전달받은 데이터의 타입을 확인하기 위해서 prop-types 모듈 로드
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img className="imgSize" src={picture} alt={name} />
    </div>
  );
}

export default Food;

/*
propType
상위 컴포넌트로부터 전달받은 데이터가 하위 컴포넌트에서 원하는 타입의 데이터인지 확인
[alt] 누르고 PropTypes 클릭 -> 링크 클릭(깃허브)에서 사용 방법, 어떤 타입인지 알려주는지 등의 정보를 확인할 수 있음.
https://github.com/facebook/prop-types

-isRequired : 필수 속성으로 설정. 해당 데이터가 없을 경우 오류 발생.
 (해당 데이터로 넘어오지 않으면 에러 발생)
*/
//propTypes 맨 위에 것은 p가 소문자여야 함!!!
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
