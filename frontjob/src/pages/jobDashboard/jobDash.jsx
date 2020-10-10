import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../createJob/datatable';
import Table from 'react-bootstrap/Table';



class jobdash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded:false,
            createjob:[]
         }
    }

    componentWillMount() {
        axios.get('http://localhost:1010/jobdashboard')
        .then(res =>{
            this.setState({
                isLoaded: true,
                createjob:res.data})
            })
        .catch(function (err){
            console.log(err)                
        })
    }
    dataTable(){
        return this.state.createjob.map((res,i)=>{
            return <DataTable obj={res} key={i} />
        })
    }
    render() { 
        if(this.state.isLoaded===false){
            return (
                <div>Loading...</div>
            )
        }
        return ( 
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>JobRole</td>
                            <td>Function</td>
                            <td>Subfunction</td>
                            <td>Company</td>
                            <td>Skills</td>
                            <td>Softskills</td>
                            <td>Location</td>
                            <td>Salary Range</td>
                            <td>JobDescription</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}
 
export default jobdash;