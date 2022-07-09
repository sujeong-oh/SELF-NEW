
import React, { useState, useEffect } from 'react';

function Unsplash() {
  const [img, setImg] = useState('');
  const [res, setRes] = useState([]);
  const Access_Key = 'ifTGvTGVYKxzmhXJ7uW2AquaKYwzWS-3WkqQqSPUMUw'; 
  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&orientation=landscape&per_page=1`;

  const fetchRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const result = responseJson.results;
    console.log(result);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const submit = () => {
    fetchRequest();
    setImg('');
  };

  return (

      <div>
        <div className="search flex ">
          <textarea  className='w-5/6'
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Searching photos..."
          />
          <button type="submit" className='ml-3 text-2xl font-semibold mb-3' onClick={submit}>
            Search
          </button>
        </div>
        <div className="imgContainer flex">
          {res.map((val) => {
            return (
              <img className='h-full w-full'
                key={val.id}
                src={val.urls.thumb}
                alt={val.alt_description}
              />
            );
          })}
        </div>
      </div>

  );
}

export default Unsplash;