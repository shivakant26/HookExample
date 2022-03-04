import React, { useEffect, useState } from "react";

const User = () =>{
const[ data , setdata ] = useState([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setdata(data))
})
    return(
        <div>
            <h1>Fecthing Data using ByEffect</h1>
            {
                data ? 
                <div className="list">
                    {
                        data.map((el,i)=>
                        <ul key={i}>
                            <li>{el.name}</li>
                        </ul>
                        )
                    }
                </div>
                :"no"
            }
        </div>
    )
}

export default User;