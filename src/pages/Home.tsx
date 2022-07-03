import Card from "../components/Card";
import Top from "../components/Top";


export default function Home() {
  return (
    <div>
      <div className="header"><Top /></div>
      <main>
        <><section className="flex justify-between border-solid border-2 border-indigo-600 h-96 m-1">
          <><Card /></>
        </section>
        </>
      </main>
    </div>
  );
}