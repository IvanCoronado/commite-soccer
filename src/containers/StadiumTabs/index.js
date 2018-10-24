import { createBottomTabNavigator } from 'react-navigation'

import { TeamsScreen } from '../Teams'
import { PlayScreen } from '../Play'

export const INITIAL_ROUTE_NAME = 'Play'

export const StadiumTabs = createBottomTabNavigator(
    {
        Teams: TeamsScreen,
        Play: PlayScreen,
    },
    {
        initialRouteName: INITIAL_ROUTE_NAME,
    }
)
