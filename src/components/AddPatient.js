import React from 'react';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

// toast.configure();

class AddPatient extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data ={
            firstName:this.firstName,
            lastName:this.lastName,
            age:this.age
        }
        axios.post("http://localhost:8080/clinicalservices/api/patients",data).then(res=>{
            toast('Patient added successfully!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined});
        })

    }

    render() {
        return(<div>
            <h2>Create Patient:</h2>
            <form>
                First Name: <input type="text" name='firstName' onChange={(event=>this.firstName=event.target.value)}/>
                Last Name: <input type="text" name='lastName' onChange={(event=>this.lastName=event.target.value)}/>
                Age: <input type="text" name='age' onChange={(event=>this.age=event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)} >Confirm</button>
            </form>
            <Link to={"/"}>Go Back</Link>
            <ToastContainer />
        </div>)
    }
}

export default AddPatient;