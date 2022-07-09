import { Link } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";


export default function Top() {
  return (
    <>
      <div className="flex justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
        <div className="text-4xl font-semibold mb-3">
          <Link to="/" className="flex items-center" ><GiCommercialAirplane />
            <p className="ml-3"></p>Save Your Moment</Link>
        </div>
      </div>
    </>
  );
}
