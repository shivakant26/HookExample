import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
// import { useForm } from "react-hook-form";

const data =  localStorage.getItem("test")?JSON.parse(localStorage.getItem("test")) :[]

const CrudForm = (props) => {
    const navigate = useNavigate();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [item, setitem] = useState(data);
    // const { register , handleSubmit } = useForm();
    const { id } = useParams();
    
    //method look likes componentDidMount 
    useEffect(()=>{
        if(id){
        let item = JSON.parse(localStorage.getItem("test"))
        let object = item[id];
        setfirstname(
            object.firstname
        )
        setlastname(
            object.lastname
        )
        }
        
    },[])


// submit Form Here...

    const handleSubmit = (e) => {
        // e.preventDefault();
        let item = JSON.parse(localStorage.getItem("test"))
        let object = { firstname, lastname }
        if(id){
            console.log("id",id)
            item.splice(id,1,object)
        }else{
            item.push(object)
        }
        setitem([...item])
        setfirstname('')
        setlastname('')
        localStorage.setItem("test", JSON.stringify(item));
        toast('Save Seccussfully',
		{position: toast.POSITION.TOP_CENTER})
        navigate("../crudlist")
        
    }

    return (
        <div>
            <h2>React Hook Form</h2>
            <div className="login center">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <input type="text"
                            name="firstname"
                            placeholder="First Name"
                            // {...register("firstName", { required: true, maxLength: 20 })}
                            value={firstname}
                            onChange={(e) => setfirstname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <input type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={lastname}
                            // {...register("firstName", { required: true, maxLength: 20 })}
                            onChange={(e) => setlastname(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <button>
                            {
                                id ? "Update" : "Save"
                            }
                        </button>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default CrudForm;