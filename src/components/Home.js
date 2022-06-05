import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    state = {
        patientData:[]
    }

    componentWillMount() {
        axios.get('http://localhost:8080/clinicalservices/api/patients').then(res=>{
            const patientData = res.data;
            this.setState({patientData})
        })
    }

    render() {
        return(<div>
            <h2>Patient:</h2>
            <table align='center'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.patientData.map(patient=><RowCreater item={patient}/>)}
                </tbody>
            </table>
            <br/>
            <Link to={'/addPatient'}><font size="5">Register New Patient</font></Link>
        </div>)
    }
}

class RowCreater extends React.Component {
    render() {
        var patient = this.props.item;
        return <tr>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'/patientDetails/' + patient.id}>Add Data</Link></td>
            <td><Link to={'/analyse/' + patient.id}>Analyse</Link></td>
        </tr>
    }
}

export default Home;