import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css'

const url = "https://zomatologin.herokuapp.com/api/auth/userinfo"

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            userData:'',
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus','loggedOut');
        sessionStorage.removeItem('ltk');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userInfo',outArray);
            sessionStorage.setItem('loginStatus','loggedIn');
            return(
                <>
                    <Link className="btn btn-primary" to="/"><span className="glyphicon glyphicon-user"></span>Hi {data.name}</Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out"></span> LogOut</button> 
                </>
            )
        }else{
            return(
                <>
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link> 
                </>
            )
        }
    }

    render(){
        return(
            <div className="header">
                <div id="brand">
                    <Link to="/" style={{color:'#fff'}}>Zomato</Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                userData:data
            })
        })
    }
}


export default withRouter(Header);