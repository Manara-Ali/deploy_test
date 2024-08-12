import { useState, useEffect } from "react";
import axios from 'axios';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const helperFn = async () => {
      try {
        const response = await axios({
          url: "https://deploy-test-fbxi.onrender.com/api/v1/products",
          method: "GET",
        });

        const {data} = response.data;

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    helperFn();
  }, [])


  return(
    <div>
      <h1>List of Products</h1>
      {
        products?.map((element) => {
          return(
            <div key={element._id}>
              <p>{element.name} {" "} <span>{element.price}</span></p>
            </div>
          )
        })
      }
    </div>
  )
}