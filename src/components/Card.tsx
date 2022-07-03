import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <>
      <div className="container">
        <div >
        <div className="grid grid-cols-3">
          <div className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            1
          </div>
          <div className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            2
          </div>
          <div className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            3
          </div>
          <div className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl m-3">
            <Link to="detail"><button className="addButton">ㅊㅜㄱㅏ</button></Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
