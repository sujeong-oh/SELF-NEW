import Card from "../components/Card";
import Top from "../components/Top";


export default function Home({data}) {
  return (
    <div>
      <div className="header">
        <Top />
      </div>
      <main>
        <><section className=" flex flex-wrap h-full border-solid border-2 border-indigo-600 w-full m-1 ">
          <><Card /></>
          {
            data.map(item =>
              <span className="m-2" key={item.title}>{item.title}</span>
            )
          }
        </section>
        </>
      </main>
    </div>
  );
}