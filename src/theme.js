import { Dimensions, Platform } from 'react-native'

export const colors = {
    green: '#64BD60',
    white: '#fff',
}

export const fonts = {}

export const spacing = {}

export const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
}

export const theme = {
    colors,
    fonts,
    device,
}
