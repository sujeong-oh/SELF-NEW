export default function Card() {
  return (

    <div className="bg-blue-300 mb-3">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 ">
        <div className=" flex-1 flex items-center"> 달력 API/ 제목 
        <div className="buttons absolute top-10 right-3">   {/* 오른쪽 끝에 위치시키고 싶은데 저걸 쓰는게 맞는지?*/}
          <button
            type="submit"
            className="-mr-1 p-2 rounded-md hover:bg-white 
                   focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >저장버튼</button>

          <button
            type="submit"
            className="-mr-1 p-2 rounded-md hover:bg-white 
                   focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >수정버튼</button>
          </div>
        </div>
      </div>
    </div>

  );
}