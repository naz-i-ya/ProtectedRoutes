import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import './Jokes.css'

const Jokes = () => {
  const [jokes, setJokes] = useState([]);


  const fetchData = async () => {
    const url = await axios.get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
    console.log(url.data);
    console.log(url.data.jokes);
    console.log(url.data.jokes.joke);
    setJokes(url.data.jokes);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>  
    {   jokes.length ? ( 
      <ul className="items" >{
        jokes.map((item) => (
          <li className="item" key={item.id}>
            {
              item.joke
            }
          </li>
        ))
      }
       </ul>) : 
       (
         <Loading />
       )
}
        
            
    </>
  );
};

export default Jokes;