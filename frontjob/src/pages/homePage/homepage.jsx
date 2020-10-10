import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom';



const homepage = () => {
    return (
        <div className='flex-container'>
            <Card className="text-center">
                <Card.Header>Create Job Post</Card.Header>
                <Card.Body>
                    <Card.Title>Job Posting</Card.Title>
                    <Card.Text>
                        Fill form to create job post.
                    </Card.Text>
                    <Link to={'/createjob'}><Button variant="primary" >Create Job</Button></Link>
                </Card.Body>
            </Card>
            <Card className="text-center">
                <Card.Header>Job Post</Card.Header>
                <Card.Body>
                    <Card.Title>View Job</Card.Title>
                    <Card.Text>
                        View all the Job post
                    </Card.Text>
                    <Link to ={'/jobs'}>
                    <Button variant="primary">Job Posted</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default homepage;