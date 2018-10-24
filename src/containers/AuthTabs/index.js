import { createStackNavigator } from 'react-navigation'

import { SignInScreen } from '../SignInScreen'
import { SignUpScreen } from '../SignUpScreen'

export const INITIAL_ROUTE_NAME = 'SignIn'

export const AuthTabs = createStackNavigator(
    {
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
    },
    {
        initialRouteName: INITIAL_ROUTE_NAME,
        headerMode: 'none',
    }
)
