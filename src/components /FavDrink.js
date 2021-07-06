import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'


export class FavDrink extends Component {
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
                          <Button variant="primary" onClick={()=>this.props.addfav(item)}>add item</Button>
                
                        </Card.Body>
                      </Card>
                    )
                })
                    
        )
    }
}

export default FavDrink
