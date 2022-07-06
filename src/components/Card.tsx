import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <>
      <div className="container h-full w-full  ">
        <div className="grid grid-cols-3 h-full w-auto">
          <div className="flex justify-center flex-col-nowrap p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            1
          </div>
          <div className="flex justify-center p-6  flex-col-nowrap  bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            2
          </div>
          <div className="flex justify-center p-6  flex-col-nowrap bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            3
          </div>
          <div className="flex justify-center p-6 flex-col-nowrap  bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            <Link to="detail"><button className="addButton">ㅊㅜㄱㅏ</button></Link>
          </div>
          </div>
        </div>
    </>
  );
}


// display: flex;
// flex-flow: column nowrap;