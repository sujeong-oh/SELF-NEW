import Card from "../components/Card";
import { Link } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import wallpaper from "./img/wallpaper.jpg";

// set bg img > watch youtube

export default function Home() {
  return (
    <div>
     {/* <img src={wallpaper} alt="wallpaper" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */} 

      <header>
        <div className="flex justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="mx-auto max-w-md">
            <Link to="/" className="flex items-center" ><GiCommercialAirplane />
              <p className="ml-1"></p>Save Your Story</Link>
          </div>
        </div>
      </header>

      <main>
        <><section className="flex justify-between border-solid border-2 border-indigo-600 h-96 m-1">
          <><Card /></>
        </section>
        </>
      </main>
    </div>
  );
}
