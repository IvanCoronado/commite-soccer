import { createBottomTabNavigator } from 'react-navigation'

import { TeamsScreen } from '../Teams/index'
import { PlayScreen } from '../Play/index'
import { ProfileScreen } from '../Profile/index'

export const HOME_INITIAL_ROUTE_NAME = 'Play'

export const HomeTabs = createBottomTabNavigator(
    {
        Teams: TeamsScreen,
        Play: PlayScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: HOME_INITIAL_ROUTE_NAME,
    }
)
