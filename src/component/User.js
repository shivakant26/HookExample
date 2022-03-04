import React, { useEffect, useState } from "react";

const User = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setdata(data))
    })
    return (
        <div className="user-fetch">
            <div className="banner-heading">
                <h1>Fecthing Data using ByEffect</h1>
                <div className="overlay"></div>
            </div>
            {
                data ?
                    <div className="list">
                        {
                            data.map((el, i) =>
                                <div className="user-card" key={i}>
                                    <div className="card-header">
                                        <div className="user-info">
                                            <h3>{el.username}</h3>
                                            <p>{el.email}</p>
                                            <p>{el.phone}</p>
                                            <p>{el.website}</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <div className="about-company">
                                                <p>{el.company.name}</p>
                                                <p>{el.company.catchPhrase}</p>
                                                <p>{el.company.bs}</p>
                                            </div>
                                            <div className="user-address">
                                                <p>{el.address.city}</p>
                                                <p>{el.address.street}</p>
                                                <p>{el.address.suite}</p>
                                                <p>{el.address.zipcode}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    : "no"
            }
        </div>
    )
}

export default User;