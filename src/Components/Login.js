import React, {Component} from 'react';
import '../css/Login/Login.css';

class Login extends Component{
    render(){
        return(
            <div className='container-login'>
                {this.props.children}
            </div>
        );
    }
}

export default Login;