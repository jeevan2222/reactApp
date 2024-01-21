import "./Body.css";
import { useState, useEffect } from "react";
import "./spinner.css";

import { Link } from "react-router-dom";

function Body() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const jsonResponse = await fetch("https://dummyjson.com/products");
      const json = await jsonResponse.json();
      setResponse(json);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner">Loading.............</div>
      </div>
    );
  }
  return (
    <div className="container">
      {response?.products?.map((ele) => (
        <nav key={ele.id}>
          <ul>
            <li>
              <img src={ele.thumbnail} alt="/" width="250px" height="250px" />
            </li>
            <li>
              <div>
                <b>Brand</b>:{ele.brand}
              </div>
            </li>
            <li>
              <div>
                <b> Category</b>:{ele.category}
              </div>
            </li>
            <li>
              <b>Description</b>: <div>{ele.description}</div>
            </li>
            <li>
              <div>
                {" "}
                <b>Price</b> :${ele.price}
              </div>
            </li>
            <button className="btn">submit</button>
          </ul>
        </nav>
      ))}
    </div>
  );
}

export default Body;
