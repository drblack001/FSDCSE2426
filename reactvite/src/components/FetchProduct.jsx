import React, { useEffect, useState } from "react";

function FetchProd() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function Fetchdata() {
            try {
                const res = await fetch("https://dummyjson.com/products");

                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }

                const jsonData = await res.json();

                console.log(jsonData);
                setData(jsonData.products);
            } catch (e) {
                console.log("Error is:", e);
            }
        }

        Fetchdata();
    }, []);
    function cartData(){
        
    }

    return (
        <div>
            <h1>Fetch Products</h1>
            <div>
                {data.map((ele) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            border: "2px solid cyan",
                            justifyContent: "space-between",
                            borderRadius: "8px",
                            height:"100px",
                            margin:"5px"
                        }}>
                        <h2>{ele.id}</h2>
                        <img src={ele.images[0]} alt="" height={75} width={75} />
                        <h2>{ele.title}</h2>
                        <button style={{size: "50px"}} onClick={cartData}> ADD to cart </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchProd;