import React from 'react';
import './App.css';
import Food from './Food';

/**
 * 음식 데이터를 출력할 컴포넌트
 * @param {*} 좋아하는 음식이름
 * @returns 내가 좋아하는 음식이름
 */

/* 여기서 쓰면 import할 필요없음
 function Food({ fav }) {
    return <h1>I like {fav}</h1>;
  }
*/

//(2) 서버에서 전송된 데이터 : 배열([, ]) & 객체형({, })
const foodLike = [
  //dish.name
  //name은 key
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ramen',
    image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Samgyeopsal',
    image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Rice',
    image: 'http://month.foodbank.co.kr/upload/article/20160607/20160607001001000001_1.jpg',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'coffee',
    image:
      'https://www.paris.co.kr/wp-content/uploads/200507_%EC%B9%B4%ED%8E%98%EB%9D%BC%EB%96%BC-1280x1280.jpg',
    rating: 4.7,
  },
];

function App2() {
  return (
    <div>
      <h1>App.js를 App2.js로 대체하여 실습</h1>
      {/* <Food fav="kimchi" />
      <Food name="ramen" />
      <Food name="samgyeopsal" />
      <Food name="rice" /> */}
      {/* dish가 매개변수 */}
      {foodLike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App2;
