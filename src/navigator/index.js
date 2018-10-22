import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

// Screens
import { AuthLoadingScreen } from '../containers/AuthLoadingScreen/index'
import { SignInScreen } from '../containers/SignInScreen/index'
import { SignUpScreen } from '../containers/SignUpScreen/index'
import { HomeTabs } from '../containers/HomeTabs/index'

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
})
const AppStack = createStackNavigator({ Home: HomeTabs })

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)
