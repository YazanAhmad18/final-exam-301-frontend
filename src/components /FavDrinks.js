import React, { Component } from 'react'
import axios from 'axios';
import FavDrink from './FavDrink';
import Update from './Update';

export class FavDrinks extends Component {
    constructor(props){
        super(props);
        this.state={
            showFav:false,
            favData:[],
            showForm:false,
            index:0,
            strDrink:'',
            strDrinkThumb:'',
            
        }
    }

    componentDidMount=async ()=> {
        const favdrinks1= await axios.get(`${process.env.REACT_APP_URL}/favcocktial`);
        this.setState({
            showFav:true,
            favData:favdrinks1.data

        })
    }

    deletefav=async(_id)=>{
        const newData= await axios.delete(`${process.env.REACT_APP_URL}/delcocktail/${_id}`);
        this.setState({
            favData:newData.data,

        })
    }

    showForm =(index)=>{
        const showup=this.state.favData[index];
        this.setState({
        showForm:true,
            strDrink:showup.strDrink,
            strDrinkThumb:showup.strDrinkThumb,
            index:index

        })
    }

    strdinkhandler=(e)=>{this.setState({strDrink:e.target.value})}
    strDrinkThumbhandler=(e)=>{this.setState({strDrinkThumb:e.target.value})}

    updateForm=async (e)=>{
        e.preventDefault();
        const newdir={
            strDrink:this.state.strDrink,
            strDrinkThumb:this.state.strDrinkThumb,

        }
        const data= await axios.put(`${process.env.REACT_APP_URL}/updatefavcocktail/${this.state.inex}`,newdir);
        this.setState({
            favData:data.data
        })
    }

    render() {
        return (
            <>
            {this.state.showForm &&
                <Update
                strDrink={this.state.strDrink}
                strDrinkThumb={this.state.strDrinkThumb}
                strdinkhandler={this.strdinkhandler}
                strDrinkThumbhandler={this.strDrinkThumbhandler}
                updateForm={this.updateForm}


                
                
                
                />
            
            
            }
            </>
        )
    }
}

export default FavDrinks
