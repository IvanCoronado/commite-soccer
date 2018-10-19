import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// Screens
import { AuthLoadingScreen } from "../containers/AuthLoadingScreen/index";
import { SignInScreen } from "../containers/SignInScreen/index";
import { SignUpScreen } from "../containers/SignUpScreen/index";
import { HomeScreen } from "../containers/Home/index";

const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });
const AppStack = createStackNavigator({ Home: HomeScreen });

export const Navigator =  createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);