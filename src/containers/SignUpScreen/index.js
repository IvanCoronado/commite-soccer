import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, TextInput, View, Text } from 'react-native'
import { Formik } from 'formik'
import { signUp } from '../../resources/actions/auth'

@connect(
    state => ({}),
    dispatch =>
        bindActionCreators(
            {
                signUp,
            },
            dispatch
        )
)
export class SignUpScreen extends React.PureComponent {
    signUp = (values, { setSubmitting, setErrors }) => {
        setSubmitting(true)
        this.props
            .signUp(values)
            .then(() => {
                setSubmitting(false)
                this.props.navigation.navigate('App')
            })
            .catch(err => {
                setSubmitting(false)
                setErrors({ global: err })
            })
    }
    goToSignIn = () => this.props.navigation.navigate('SignIn')
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={this.signUp}
                >
                    {({
                        values,
                        isSubmitting,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <View>
                            {isSubmitting ? (
                                <Text>...loading</Text>
                            ) : (
                                <>
                                    <TextInput
                                        style={{
                                            width: '100%',
                                            backgroundColor: 'white',
                                        }}
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.username}
                                    />
                                    <TextInput
                                        style={{
                                            width: '100%',
                                            backgroundColor: 'white',
                                        }}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType="email-address"
                                    />
                                    <TextInput
                                        style={{
                                            width: '100%',
                                            backgroundColor: 'white',
                                        }}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}
                                    />
                                    {errors.global && (
                                        <Text style={{ color: 'red' }}>
                                            {errors.global}
                                        </Text>
                                    )}
                                    <Button
                                        onPress={handleSubmit}
                                        title="Register"
                                    />
                                </>
                            )}
                        </View>
                    )}
                </Formik>
                <Button
                    style={{ paddingTop: '20px' }}
                    onPress={this.goToSignIn}
                    title="Ya tengo cuenta"
                />
            </View>
        )
    }
}
