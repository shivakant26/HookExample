import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CrudList = () => {
const navigate = useNavigate();
const [item ,setitem ] = useState([]);

    useEffect(() => {
        var item = JSON.parse(localStorage.getItem("test"))
        setitem(item)
    },[])
    

// Delete Row code Here...
 const Remove = (id) =>{
    var item = JSON.parse(localStorage.getItem("test"))
    item.splice(id,1)
    setitem(item);
    localStorage.setItem("test",JSON.stringify(item))
 }


// Edit Row code Here....
const Edit = (id) =>{
    // console.log("editabel id",id);
    navigate(`../crudform/${id}`);
}

    return (
        <div className="car-list">
            <h2>Crud List</h2>
            <div className="table">
                {
                    item ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        item.map((el, id) =>
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>{el.firstname}</td>
                                                <td>{el.lastname}</td>
                                                <td>
                                                    <button onClick={()=>Edit(id)}>edit</button>
                                                    <button onClick={()=>Remove(id)}>delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div> : "no"
                }
            </div>
        </div>
    )

}

export default CrudList;