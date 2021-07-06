import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'


export class Drinks extends Component {
    render() {
        return (
this.props.DrinksData.map((item,index)=>{
    return (
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{item.strDrink}</Card.Title>
          <Card.Img>
           {item.strDrinkThumb}
          </Card.Img>
          <Button variant="primary" onClick={()=>this.props.deleteFav(item)}>deleteFav</Button>
          <Button variant="primary" onClick={()=>this.props.showFrom(item)}>update</Button>

        </Card.Body>
      </Card>
    )
})
        )
    }
}


export default Drinks
