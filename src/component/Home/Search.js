import React,{Component} from 'react';
import './Search.css'

const lurl = "https://zomatotejas.herokuapp.com/location"

class Search extends Component{

    constructor(props){
        super(props);
        console.log("inside constructor")
        this.state={
            location:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
        
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
                    <select className="city" id="city">
                        <option>---Select City---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restauSelect" id="hotels" >
                        <option>---Select Restaurants---</option>

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