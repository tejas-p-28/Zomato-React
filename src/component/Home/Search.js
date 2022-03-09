import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatotejas.herokuapp.com/location";
const rurl = "https://zomatotejas.herokuapp.com/restaurants?state_id="

class Search extends Component {

    constructor(props){
        super(props);
        console.log("inside constructor")
        this.state={
            location:'',
            restData:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item._id}>{item.location_name}</option>
                )
            })
        }        
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name}
                    </option>
                )
            })
        }
        
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
    }


    render(){
        console.log("inside render",this.state.location)
        return(
            <div className="background-img">
                <div id="logo">
                    <span>TP!</span>
                </div>
                <div className="heading">
                    <p>Find the Best Restaurants near you!!!</p>
                </div>
                <div className="dropdown">
                    <select className="city" id="city" onChange={this.handleCity}>
                        <option>---SELECT CITY---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restauSelect" id="hotels" >
                    <option>----SELECT RESTAURANTS----</option>
                            {this.renderRest(this.state.restData)}
                    </select>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("inside componentDidMount>>>")
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search 