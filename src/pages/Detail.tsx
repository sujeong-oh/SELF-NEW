// const features = [
//  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
// import Banner from "../components/Banner";
import Top from "../components/Top";

export default function Detail() {
  return (
    <>
      <div className="header">
        <Top />
      </div>

      <form className="main mx-auto p-3">
        <div className="static ">
          <div className="absolute inset-x-10 h-20 bg-yellow-200 z-0"></div>
        </div>

        <section className=" container relative z-50 top-10 ">
          <div className="grid grid-rows-2 grid-flow-col gap-10 ">
            <div className="row-span-3 rounded-md border-2 border-slate-600 "><h1>지도 API</h1></div>
            <script
              type="text/javascript"
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=50402e02db649bd75d95eb5b35bbca6d">
            </script>

            {/* 지도를 띄우는 코드 작성 , 어떻게 해야되는지 모르겠는 */}


            <div className="input">
              <input type="input m-3" placeholder="큰 제목을 입력해주세요"></input></div>
            <div className="input">
              <input type="input" placeholder="내용을 적어주세요"></input></div>
          </div>
          <br></br><div className="grid grid-rows-2 grid-flow-col gap-10"> 
            <div className="row-span-5 rounded-md border-2 border-slate-600 ">사진 넣기</div>
            <div className="row-span-5 input rounded-md border-2 border-slate-600 m-3">

              <input className="row-span-5 w-100"
                type="input" placeholder="내용 적기"></input></div>

          </div>
          <br></br>
          <button type="submit" className="w-48 text-center rounded-md border-2 border-slate-600 p-2 ">저장</button>  {/* 가운데로 정렬 */}
        </section> 

      </form>
  


    </>
  );
}


      // onchange     onChange={(e) => setName(e.target.value)}
      // input 크기를 늘려야 됨
      // <사진 넣는 공간>
      // 지도 api :  var html =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26097.096325951305!2d129.1011564164658!3d35.15320287900966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ed2f27c70ec7%3A0xff6df0e14d9216fb!2z6rSR7JWI66as7ZW07IiY7JqV7J6l!5e0!3m2!1sko!2skr!4v1656252154636!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';