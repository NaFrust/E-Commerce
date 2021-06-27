import React from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            password:''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    };

    handleChange = event =>{
        const { value, name} = event.target;
        this.setState({[name]:value })
    };

    render(){
        return(
            <div className="sign-in">
                <h2> Ya tengo una cuenta</h2>
                <span>Ingresa con tu correo y Contraseña</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email"
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label="Correo"
                    required 
                    />
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    label="Contraseña"
                    required 
                    />
                    <div className="buttons">
                    <CustomButton type='submit'> Enviar </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Google SignIn</CustomButton>
                    </div>
                </form>
 
            </div>
        )
    }
}

export default SignIn;