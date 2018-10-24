import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { Button } from 'react-native'

// Screens
import { AuthTabs } from '../AuthTabs'
import { StadiumTabs } from '../StadiumTabs'
import { StadiumSelectorScreen } from '../StadiumSelectorScreen'
import { ProfileScreen } from '../Profile'
import { AuthLoadingScreen } from '../AuthLoadingScreen'
import { RolRender } from '../RolRender'

const StadiumStack = createStackNavigator(
    {
        StadiumSelector: StadiumSelectorScreen,
        Stadium: {
            screen: StadiumTabs,
            navigationOptions: ({ navigation }) => ({
                headerTitle: () => (
                    <Button
                        onPress={() => navigation.navigate('StadiumSelector')}
                        title="Magma #1"
                    />
                ),
            }),
        },
    },
    {
        initialRouteName: 'StadiumSelector',
    }
)

export const AppStack = createStackNavigator(
    {
        Stadium: {
            screen: StadiumStack,
            navigationOptions: ({ navigation }) => ({
                headerRight: (
                    <RolRender
                        renderWhenAnonymous={
                            <Button
                                onPress={() => navigation.navigate('Auth')}
                                title="P"
                            />
                        }
                        renderWhenLogged={
                            <Button
                                onPress={() => navigation.navigate('Profile')}
                                title="P"
                            />
                        }
                    />
                ),
            }),
        },
        Auth: AuthTabs,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Stadium',
        mode: 'modal',
    }
)

export const RootStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none',
    }
)
