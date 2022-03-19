import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css'

const url = "https://zomatotejas.herokuapp.com/details"
const menuUrl = "https://zomatotejas.herokuapp.com/menu"

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId: sessionStorage.getItem('mealId')
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        let {details} = this.state
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt=""/>    
                        </div>    
                    </div> 
                    <div className="tileContent">
                        <div className="content">
                            <b><h1>{details.restaurant_name}</h1>  
                            <span id="cfeedback">245 Customer Review</span> 
                            <h4>Old Price <strike>Rs 1200</strike></h4> 
                            <h4>New Price {details.cost}</h4>
                            <h3>We Provide Best Service</h3></b>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="Sanitized"/>    
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.jpg" alt="Home Delivery"/>    
                                </div>
                            </div>
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab><b>Details</b></Tab>
                                        <Tab><b>Contact</b></Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <p><b>{details.restaurant_name}</b> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>{details.address}</p>
                                        <p>Phone: {details.contact_number}</p>
                                    </TabPanel>
                                </Tabs>
                                <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                                <button className="btn btn-success" onClick={this.proceed}>Proceed</button>

                            </div>
                        </div>    
                    </div>
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder = {(data) => {this.addToCart(data)}}/>  
                </div>
            </>
        )
    }

    async componentDidMount(){
        let restid = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restid}`)
        let mealData = await axios.get(`${menuUrl}/${restid}`)
        this.setState({details:response.data[0],menuList:mealData.data})
    }
}

export default Details