import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Crypto.css";

const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Crypto component rendered");
    setLoading(true)
    // axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
        );
        console.log(response);
        setCoins(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, [currency]);

  if (loading) {
    return (
      <div className="container">
        <h1>Loading .......</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Crypto Curriencies in the world</h1>
      <button onClick={() => setCurrency("usd")}>Set Currency to USD</button>
      <button onClick={() => setCurrency("eur")}>Set Currency to Euro</button>


      <div className="coin-cards">
        {coins.map((coin) => {
          // console.log(coin);
          return (
            <div key={coin.id} className="coin-cards-items">
              <h2>{coin.name}</h2>
              <img src={coin.image} />
              <p>
                {currency === "usd" ? "$" : "eur"} {coin.current_price}
              </p>
            </div>
          );
        })}
      </div>
      {/* coin-card */}
    </div>
    // container
  );
};

export default Crypto;
