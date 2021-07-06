import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap';

export class Update extends Component {
    render() {
        return (
           <>
<Form onSubmit={this.props.UpdateForm}>  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control value={this.props.strDrink} onChange={this.props.strdinkhandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>photo</Form.Label>
    <Form.Control value={this.props.strDrinkThumb} onChange={this.props.strDrinkThumbhandler} />
  </Form.Group>


  <Button variant="primary" type="submit">submit</Button>


  </Form>

           </>
        )
    }
}

export default Update
