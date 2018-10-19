import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { login } from "../../resources/actions/auth";

@connect(
    state => ({

    }),
    dispatch => (bindActionCreators({
        login
    }, dispatch))
)
export class SignInScreen extends React.PureComponent {
    signIn = (values, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        this.props.login(values)
            .then(() => {
                setSubmitting(false);
                this.props.navigation.navigate('App');
            })
            .catch((err) => {
                setSubmitting(false)
                setErrors({ global: err})
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Formik
                    initialValues={{ identifier: '', password: '' }}
                    onSubmit={this.signIn}
                >
                    {({ values, isSubmitting, errors, handleChange, handleBlur, handleSubmit}) => (
                        <View>
                            {
                                isSubmitting ?
                                    <Text>...loading</Text>:
                                    <>
                                        <TextInput
                                            style={{ width: '100%'}}
                                            onChangeText={handleChange('identifier')}
                                            onBlur={handleBlur('identifier')}
                                            value={values.identifier}
                                            keyboardType="email-address"
                                        />
                                        <TextInput
                                            style={{ width: '100%'}}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureTextEntry={true}
                                        />
                                    {errors.global && <Text style={{ color: 'red' }}>{errors.global}</Text>}
                                        <Button onPress={handleSubmit} title="Login" />
                                    </>
                            }
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}