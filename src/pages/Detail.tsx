// const features = [
//  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
// import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Top from "../components/Top";


// card랑 container 뒤로 끝까지 채우기
// 지도/사진 API 삽입 방법
// 카드 누르면 디테일로 이동 > 경로?
// 해당 디테일에 있는 내용을 저장하면 CARD에 연결 > REDUX?
// 추가/저장 버튼 연결  > state?

export default function Detail({handleData}) {

  const [title, setTitle] = useState("");
  // const [des, setDes] = useState("");
  // const [image, setImage] = useState("");
  // const [phone, setPhone] = useState("");

  // const [data, setData] = useState({ title: "", des: "", image: "", phone: "" });
  
  // function handleTtile(e) {
  //   setData({ ...data, title: e.target.value });
  // }

  function handleSubmit(e){
    e.preventDefault();
    handleData({title});
  }

  return (
    <>
      <div className="header">
        <Top />
      </div>

      <form className="main p-3 " onSubmit={handleSubmit}>
        <img src="../assets/BG3_1.jpg" alt="BG3_1" className="static z-0 w-full" />
        <br></br>
        <section className="relative p-3 z-50 w-full ">
          <div className="grid grid-rows-2 grid-flow-col gap-10 ">
            <div className="row-span-3 rounded-md border-2 border-slate-600 "><h1>지도 API</h1></div>
            <script
              type="text/javascript"
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=50402e02db649bd75d95eb5b35bbca6d">
            </script>

            {/* 지도를 띄우는 코드 작성 , 어떻게 해야되는지 모르겠는 */}


            <div className="textarea rounded-md border-2 border-slate-600 ">
              <textarea value={title} onChange={e=>setTitle(e.target.value)} className="w-full h-full text-center " placeholder="큰 제목을 입력해주세요" /></div>
            <div className="textarea rounded-md border-2 border-slate-600 ">
              <textarea className="w-full h-full text-center " placeholder="내용을 적어주세요"></textarea></div>
          </div>

          <br></br><div className="grid grid-rows-2 grid-flow-col gap-10">
            <div className="row-span-5 rounded-md border-2 border-slate-600 ">사진 넣기</div>
            <div className="row-span-5 input rounded-md border-2 border-slate-600 m-3">

              <textarea className="row-span-5 w-full h-full text-center  "
                placeholder="내용 적기"></textarea></div>

          </div>
          <br></br>
          <div className="justify-center flex flex-wrap ">
            <button type="submit" className=" w-48 text-center rounded-md border-2 border-slate-600 p-2 ">저장</button></div>
        </section>
      </form>



    </>
  );
}