// const features = [
//  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
// import Banner from "../components/Banner";
import Top from "../components/Top";

export default function Detail() {
    return (
      <>
        <div className="header"><Top /></div>
        <div className="relative ...">
           <div className="absolute inset-x-0 top-0 h-16 bg-red-200"></div>
        </div>

        <section className="container m-10 ">
          <div className="grid grid-rows-3 grid-flow-col gap-6 ">
            <div className="row-span-3 bg-slate-600"><h1>지도 api</h1></div>
            <script
              type="text/javascript"
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=50402e02db649bd75d95eb5b35bbca6d">
            </script>
          
          {/* 지도를 띄우는 코드 작성 , 어떻게 해야되는지 모르겠는 */}


            <div className="input">
              <input type="input" placeholder="큰 제목 쓰기"></input></div>
              <div className="input">
              <input type="input" placeholder="내용 적기"></input></div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-6">
            <div className="row-span-5 bg-red-200 ">사진 넣기</div>
            <div className="row-span-5 input bg-green-200 "> {/* input 크기를 늘려야 됨 */}
              <input className="row-span-5"    
              type="input" placeholder="내용 적기"></input></div>
          </div>

        </section>
      </>
    );
  }
  
  
      // url
      // grid 
      // <input type="text" classname="" ><h1><placsholder> 뭐라고 쓸지 정하기 </placsholder></h1></input>
      // <사진 넣는 공간>
      // 지도 api :  var html =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26097.096325951305!2d129.1011564164658!3d35.15320287900966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ed2f27c70ec7%3A0xff6df0e14d9216fb!2z6rSR7JWI66as7ZW07IiY7JqV7J6l!5e0!3m2!1sko!2skr!4v1656252154636!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  
