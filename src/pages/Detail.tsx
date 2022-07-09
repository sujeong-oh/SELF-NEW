
import  { useEffect, useState } from "react";
import Top from "../components/Top";
import Map from "./Map";
import Unsplash from "./Unsplash";


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
        <img src="../assets/BG3_1.jpg" alt="BG3_1" className="static  w-full" />
        <br></br>
        <div className="relative p-3 w-full ">
          <div className="grid grid-rows-3 grid-flow-col gap-10 ">
            <div className="row-span-3 rounded-md border-2 border-slate-600 ">
              <Map /></div>

            <div className=" rounded-md border-2 border-slate-600 ">
              <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full h-full text-center text-2xl " placeholder="0000년 00월 00일" /></div>
            <div className=" rounded-md border-2 border-slate-600 ">
              <input className="w-full h-full text-center text-2xl " placeholder="제목을 적어주세요" /></div>
              <div className=" rounded-md border-2 border-slate-600 ">
              <input className="w-full h-full text-center text-2xl " placeholder="내용을 적어주세요" /></div>
          </div>

          <br></br><div className=" grid grid-rows-4 grid-flow-col gap-10">
            <div className="h-30 row-span-5 rounded-md border-2 border-slate-600 "><Unsplash /></div>
            <div className="row-span-5 input rounded-md border-2 border-slate-600 m-3">
            <input className="w-full h-full text-center text-2xl " placeholder="내용을 적어주세요" /></div>
          </div>
          <br></br>
          <div className="justify-center flex flex-wrap ">
            <button type="submit" className=" w-48 text-center rounded-md border-2 border-slate-600 p-2 ">저장</button></div>
        </div>
      </form>



    </>
  );
}