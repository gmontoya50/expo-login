import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import PasswordInput from '../components/common/PasswordInput';
import commonStyle from '../styles/CommonStyle';
import loginService from '../services/login';
import { AuthContext } from '../context/AuthContext';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            buttonDisabled: true,
        };

        this.setPassword = this.setPassword.bind(this);
    }

    disableButton(disabled, callback) {
        this.setState({ buttonDisabled: disabled }, callback);
    }

    setPassword(value) {
        this.onChangeInput('password', value);
    }

    onChangeInput(key, value) {
        this.setState({
            [key]: value
        }, () => {
            let disabled = (this.state.username && this.state.password) ? false : true;
            this.disableButton(disabled);
        });
    }

    onSubmit = async () => {
        this.context.signIn({ token: 'fake-token' });
        const { reset } = this.props.navigation;
        this.disableButton(true, async () => {

            await loginService
                .login(this.state.username, this.state.password)
                .then(async (response) => {
                    this.disableButton(false);

                    await AsyncStorage
                        .setItem('token', 'response.data.token')
                        .then(() => {
                            // reset({
                            //     index: 0,
                            //     routes: [{ name: 'Home' }],
                            // });

                            // dispatch(state => {
                            //     // Remove the home route from the stack
                            //     const routes = state.routes.filter(r => r.name !== 'Login');

                            //     return CommonActions.reset({
                            //         ...state,
                            //         routes,
                            //         index: routes.length - 1,
                            //     });
                            // });


                        });
                });
        });
    }

    render() {
        return (
            <ScrollView style={commonStyle.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/logo.png')} />
                </View>

                <View style={styles.body}>
                    <Text style={commonStyle.label}>Correo electrónico</Text>
                    <TextInput
                        style={[commonStyle.input, commonStyle.marginBt10]}
                        placeholder="tucorreo@loqueviene.com"
                        keyboardType="email-address"
                        placeholderTextColor="#2c2c2c"
                        onChangeText={(text) => this.onChangeInput('username', text)}
                    />
                    <PasswordInput
                        changeText={this.setPassword}
                        text={'Contraseña'}
                    ></PasswordInput>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity disabled={this.state.buttonDisabled} style={commonStyle.buttonPrincipal} onPress={this.onSubmit}>
                        <Text style={commonStyle.buttonText}>Acceder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commonStyle.linkContainer}>
                        <Text style={commonStyle.link}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

Login.contextType = AuthContext;

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
    },
    body: {
        backgroundColor: '#eaeaea',
        padding: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    footer: {
        backgroundColor: '#eaeaea',
        marginLeft: '5%',
        marginRight: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '15%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default Login;
