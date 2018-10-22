import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TouchableHighlight, TextInput, View, Text } from 'react-native'
import { Formik } from 'formik'
import { signIn } from '../../resources/actions/auth'

@connect(
    state => ({}),
    dispatch =>
        bindActionCreators(
            {
                signIn,
            },
            dispatch
        )
)
export class SignInScreen extends React.PureComponent {
    signIn = (values, { setSubmitting, setErrors }) => {
        setSubmitting(true)
        this.props
            .signIn(values)
            .then(() => {
                setSubmitting(false)
                this.props.navigation.navigate('App')
            })
            .catch(err => {
                setSubmitting(false)
                setErrors({ global: err })
            })
    }
    goToSignUp = () => this.props.navigation.navigate('SignUp')
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Formik
                    initialValues={{ identifier: '', password: '' }}
                    onSubmit={this.signIn}
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
                                        style={{ width: '100%' }}
                                        onChangeText={handleChange(
                                            'identifier'
                                        )}
                                        onBlur={handleBlur('identifier')}
                                        value={values.identifier}
                                        keyboardType="email-address"
                                    />
                                    <TextInput
                                        style={{ width: '100%' }}
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
                                    <TouchableHighlight onPress={handleSubmit}>
                                        <Text>Login</Text>
                                    </TouchableHighlight>
                                </>
                            )}
                        </View>
                    )}
                </Formik>
                <TouchableHighlight onPress={this.goToSignUp}>
                    <Text>No tengo cuenta</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
