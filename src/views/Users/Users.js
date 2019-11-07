import React, { Component } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import axios from 'axios';
import UserRow from './UsersRow';

// import { throwStatement } from '@babel/types';


class Users extends Component {

  constructor(){
    super();
    this.state = {
       UsersData  : []
    }
  }
  
  componentDidMount(){
      console.log("call the API from here...")
      axios.get("https://practice-proj.herokuapp.com/api/users").then(res => {
        const UsersData = res.data;
        this.setState({UsersData : UsersData})
      });
  }

  render() {
    // const userList =this.state.UsersData.filter((user) => user._id < 10)
    console.log("call the render method users");
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">email</th>
                      <th scope="col">firstname</th>
                      <th scope="col">lastname</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.UsersData.map((user, index) =>
                      <UserRow users= {user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
