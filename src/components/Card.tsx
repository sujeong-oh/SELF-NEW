import { Link } from 'react-router-dom';


import { ArrowRightIcon } from "@heroicons/react/outline";

export default function Card() {
  return (
    <>
      {/* First Card */}
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-72 md:h-48 w-full object-cover object-center"
            src="../assets/ocean.jpg"
            alt="card image"
          />
          <div className="p-6 hover:bg-blue-300 hover:text-white
                         transition duration-300 ease-in">
            <h1 className="text-base font-medium text-indigo-300 mb-1">
              2021년 7월 16일
            </h1>
            <h1 className="text-2xl font-semibold mb-3">강원도 강문해변</h1>
            <p className="leading-relaxed mb-3">
              바다가 깨끗해서 너무 좋았다, 또 가고 싶다
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-72 md:h-48 w-full object-cover object-center"
            src="../assets/firework.jpg"
            alt="card image"
          />
          <div className="p-6 hover:bg-blue-300 hover:text-white
                         transition duration-300 ease-in">
            <h1 className="text-base font-medium text-indigo-300 mb-1">
              2021년 8월 3일
            </h1>
            <h1 className="text-2xl font-semibold mb-3">부산 요트체험</h1>
            <p className="leading-relaxed mb-3">
              처음으로 돈버는 이유를 찾았다, 이러려고 돈 벌지!
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-72 md:h-48 w-full object-cover object-center"
            src="../assets/soccer.jpg"
            alt="card image"
          />
          <div className="p-6 hover:bg-blue-300 hover:text-white
                         transition duration-300 ease-in">
            <h1 className="text-base font-medium text-indigo-300 mb-1">
              2022년 5월 13일
            </h1>
            <h1 className="text-2xl font-semibold mb-3">풋살 시작</h1>
            <p className="leading-relaxed mb-3">
              풋살을 시작했다, 슛돌이가 될꺼야
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add Card */}
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <Link to="detail"><div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6 hover:bg-blue-300 hover:text-white
                         transition duration-300 ease-in">
            <h1 className="text-2xl font-semibold mb-3">Add Your Moment</h1>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div></Link>
      </div>
    </>
  );
}
