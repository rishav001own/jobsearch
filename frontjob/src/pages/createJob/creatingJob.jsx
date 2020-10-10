import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class createjob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobrole:"",
            function:"",
            subfunction:"",
            company:"",
            softskills:"",
            location:"",
            salaryrange:"",
            jobdescription:""
         }
    }
    onChangeJobRole=(e)=>{
        this.setState({jobrole:e.target.value})
    }
    onChangeFunction=(e)=>{
        this.setState({function:e.target.value})
    }
    onChangeSubFunction=(e)=>{
        this.setState({subfunction:e.target.value})
    }
    onChangeCompany=(e)=>{
        this.setState({company:e.target.value})
    }
    onChangeSoftSkills=(e)=>{
        this.setState({softskills:e.target.value})
    }
    onChangeLocation=(e)=>{
        this.setState({location:e.target.value})
    }
    onChangeSalaryRange=(e)=>{
        this.setState({salaryrange:e.target.value})
    }
    onChangeJobDescription=(e)=>{
        this.setState({jobdescription:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault()

        const jobObject ={
            jobrole:this.state.jobrole,
            function:this.state.function,
            subfunction:this.state.subfunction,
            company:this.state.function,
            softskills:this.state.function,
            location:this.state.location,
            salaryrange:this.state.salaryrange,
            jobdescription:this.state.jobdescription
        
        }
        axios.post('http://localhost:1010/createjob',jobObject)
            .then(res=>alert(res.date))

            this.setState({
                jobrole:"",
                function:"",
                subfunction:"",
                company:"",
                softskills:"",
                location:"",
                salaryrange:"",
                jobdescription:""
            })

    }
    
    render() { 
        return ( 
               <div className="form-wrapper">
                <h1>Create Job Post</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="JobRole">
                            <Form.Label>JobRole</Form.Label>
                            <Form.Control type="text" value={this.state.jobrole}  onChange={this.onChangeJobRole}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Function">
                            <Form.Label>Function</Form.Label>
                            <Form.Control type="text" value={this.state.function}  onChange={this.onChangeFunction}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="SubFunction">
                            <Form.Label>SubFunction</Form.Label>
                            <Form.Control type="text" value={this.state.SubFunction}  onChange={this.onChangeSubFunction}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" value={this.state.Company}  onChange={this.onChangeCompany}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control type="text" value={this.state.Skills}  onChange={this.onChangeSkills}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="SoftSkills">
                            <Form.Label>SoftSkills</Form.Label>
                            <Form.Control type="text" value={this.state.SoftSkills}  onChange={this.onChangeSoftSkills}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" value={this.state.Location}  onChange={this.onChangeLocation}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="SalaryRange">
                            <Form.Label>SalaryRange</Form.Label>
                            <Form.Control type="text" value={this.state.SalaryRange}  onChange={this.onChangeSalaryRange}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="JobDescription">
                            <Form.Label>JobDescription</Form.Label>
                            <Form.Control type="text" as="textarea" rows="5" value={this.state.JobDescription}  onChange={this.onChangeJobDescription} ></Form.Control>
                        </Form.Group>
                        <Button variant="danger" size="lg" block="block" type="submit">
                        Submit Data
                        </Button>
                    </Form>
            </div>
        );
    }
}
 
export default createjob;