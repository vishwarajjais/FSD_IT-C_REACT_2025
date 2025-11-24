import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const resData = await response.json();
      setData(resData);
    }
    getData();
  }, []);

  function addToCart(ele) {
    alert(ele.title)
  }

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data not found</h2>
      ) : (
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px"
          }}
        >
          {data.map((ele) => (
            <div style={{ border: "2px solid black", padding: "10px" }}>
              <img src={ele.image} height={300} width={300} />
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
              <h3>{ele.price}</h3>
              <button onClick={() => addToCart()}>Add to cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard; 