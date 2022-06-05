import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import {toast , ToastContainer} from "react-toastify";

class CollectClinicals extends React.Component {

    state = {}

    componentWillMount() {
        axios.get("http://localhost:8080/clinicalservices/api/patients/" + this.props.match.params.patientId).then(res=> {
            this.setState(res.data)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            patientId:this.props.match.params.patientId,
            componentName:this.componentName,
            componentValue:this.componentValue
        }

        axios.post("http://localhost:8080/clinicalservices/api/clinicals" , data).then(res=> {
            toast("Patient Data Saved Successfully" , {position:"bottom-center" , autoClose:3000 , hideProgressBar: false , pauseOnHover: true , closeOnClick: true , draggable: true, progress: undefined})
        })
    }

    render() {
        return(<div>
            <h2>Patient Details:</h2>
            First Name: {this.state.firstName} <br/>
            Last Name: {this.state.lastName} <br/>
            Age: {this.state.age} <br/>
            <form>
                Clinical Entry Type <select onChange={(event) => {this.componentName=event.target.value}}>
                    <option>Select One</option>
                    <option value="bp">Blood Pressure(Sys/Dys)</option>
                    <option value="hw">Height and Weight</option>
                    <option value="heartrate">Heart Rate</option>
                </select>
                Value: <input type="text" name="componentValue" onChange={(event) => {this.componentValue=event.target.value}}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
            <Link to={"/"}>Go Back</Link>
            <ToastContainer/>
        </div>)
    }
}

export default CollectClinicals;