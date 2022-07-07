import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row row-nowrap">
            <div className="flex-1 p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
              1
            </div>
            <div className="flex-1 p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
              2
            </div>
            <div className="flex-1 p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
              3
            </div>
          </div>
          <div className="p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            <Link to="detail"><button className="addButton">ㅊㅜㄱㅏ</button></Link>
          </div>
        </div>
    </>
  );
}


// display: flex;
// flex-flow: column nowrap;