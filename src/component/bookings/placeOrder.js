import React,{Component} from 'react';
import './placeOrder.css';

class placeOrder extends Component {
    constructor(props){
        super(props);

        this.state={
            id:Math.floor(Math.random()*1000000000),
            hotel_name:this.props.match.params.restName,
            name:'',
            email:'',
            cost:0,
            phone:'',
            address:'',
            menuItem:''
        }
    }
    render(){
        return(
            <h1>Place Order</h1>
        )
    }
}

export default placeOrder