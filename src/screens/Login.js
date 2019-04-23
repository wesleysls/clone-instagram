import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { setEmailField, setPasswordField } from '../actions/AuthActions';

export class Login extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.signUpAtion = this.signUpAtion.bind(this);
    }

    signUpAtion(){
       this.props.navigation.navigate('SignUp');
    }

    render() {
        let buttonOpacity = 0.2;
        if (this.props.passwordValid && this.props.emailValid) {
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <StatusBar backgroundColor='#0A5360' />
                <Text style={styles.header}>Devstagram</Text>
                <TextInput style={styles.imput} placeholder="Digite seu email" placeholderTextColor= "#FFF" keyboardType = "email-address" />
                <TextInput style={styles.imput} secureTextEntry={true} placeholder="Digite sua senha" placeholderTextColor = "#FFF" />
                <TouchableHighlight onPress={()=>{}} style={styles.actionButton} underlayColor="#307EAF">
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.signUpAtion} style={styles.cadastroButton} underlayColor="#307EAF">
                    <Text style={styles.cadastroButtonText}>Ainda não tem cadastro? Clique aqui</Text>
                </TouchableHighlight>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#FFFFFF',
        fontSize: 32,
        marginBottom: 30
    },
    imput: {
        width: '90%',
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 14,
        paddingLeft:10,
        marginBottom:10
    },
    actionButton:{
        width:"90%",
        height:50,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#FFF',
        fontSize:15
    },
    cadastroButton:{
        width:"90%",
        height:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    cadastroButtonText:{
        color:'#FFF',
        fontSize:13
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        status: state.auth.status,
        password: state.auth.password,
        emailValid: state.auth.emailValid,
        passwordValid: state.auth.passwordValid
    };
}



const LoginConnect = connect(mapStateToProps, { setEmailField, setPasswordField })(Login);
export default LoginConnect;