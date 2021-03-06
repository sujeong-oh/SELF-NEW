import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';


function App() {

  //redux
  // https://github.com/MiryangJung/my-number-with-redux

  //design
  // https://dribbble.com/search/blog

  // data는 우리의 데이터를 담을 곳
  // setData 는 data를 바꾸는 함수 setter
  const [data, setData] = useState([{ title: "aaaa" }]);

  const handleData = (value) => {
    // array []
    // ["a", "b"]
    // value c를 받았어요
    // ["a", "b", "c"]
    // [].append(value)
    // ...data => "a", "b"
    setData([...data, value]);
  }

  return (
    <>
      <section className='backgroundImg'>
        <BrowserRouter>
          {/* <div>항상위에있어야되는거</div> */}
          {/* <Home data={data} /> */}
          <Routes>
            <Route path='/' element={<Home data={data} />} />
            <Route path='detail' element={<Detail handleData={handleData} />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>

  );
}

export default App;

// import motionL from 'motionLib'

// <motionL duration="3.0"><button>afasfasf</button></motionL>
// <motionL.button motion="swipe">aaaa</motionL.button>



// 초기 프로젝트 베이스

// 1. 레이아웃
// - css 없이
// plain html 구상
// - react-router-dom 적용

// 2. css 적용
// - tailwind
// - tailwind 내 프로젝트에 어떻게 적용하는지?
// - 알아보면서 알아본 걸 readme에 적는다.
// - 적용하면서 트러블이 있었다 하면 트러블 슈팅 적는다.

// 3. 구체적으로 컴포넌트 작성
// - 화면을 그린다.

// 4. 로직 작성
// - 클릭하면 상세페이지로 이동한다.
// - DB를 연결하는지? redux를 쓰는지? 등등을 고민
// readme~~

// 5. 에러 처리

// 6. 배포 