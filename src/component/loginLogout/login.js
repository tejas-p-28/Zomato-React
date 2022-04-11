import React,{Component} from 'react';
import Header from '../../Header'

const url = "https://zomatologin.herokuapp.com/api/auth/login";

class login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'@gmail.com',
            password:'123',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <br/>
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            Login Form
                        </div>
                        <div className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="email">Email</label>
                                    <input className="form-control" id="email" type="email"
                                    value={this.state.email} name="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="password">Password</label>
                                    <input className="form-control" id="password" type="password"
                                    value={this.state.password} name="password" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>  
                </div>
            </>
        )
    }
}

export default login