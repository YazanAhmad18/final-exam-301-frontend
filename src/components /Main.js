import React, { Component } from 'react'
import Drinks from './Drinks';
import axios from 'axios';
import { Container,Row } from 'react-bootstrap';


export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            showData: false,
            DrinksData:[],
        }
    }
    componentDidCatch=async ()=>{
        const cocktaila=await axios.get(`${process.env.React_APP_URL}/cocktaila`);
        this.setState({
            showData: true,
            DrinksData:cocktaila.data,
            
        })

    }

    addfav=async (Drinks)=>{
        await axios.post(`${process.env.React_APP_URL}}/cocktia`);
        alert('fav drink added')
    }
    render() {
        return (
            <>
                <Container><Row>
                    {this.state.showData &&(
                    <Drinks
                    
                    DrinksData={this.state.DrinksData}
                    addfav={this.addfav}
                    
                    />
                    
                    )}
                    </Row>

                    </Container>
            </>


        )
    }
}

export default Main
