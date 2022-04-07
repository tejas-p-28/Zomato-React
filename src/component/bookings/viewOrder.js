import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

import Header from '../../Header'

const url = "https://zomatotejas.herokuapp.com/orders";

class viewOrder extends Component {
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }
    render(){
        return(
            <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default viewOrder