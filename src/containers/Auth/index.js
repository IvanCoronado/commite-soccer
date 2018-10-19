import React from "react";
import { Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Navigator from "./Navigator";

export class Auth extends React.PureComponent {
    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            this.keyboardDidHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    keyboardDidHide = () => {
        this.scroll.position.y = 0;
    };

    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={containerStyle}
                extraScrollHeight={10}
                enableResetScrollToCoords
                ref={ref => {
                    this.scroll = ref;
                }}
            >
                <Navigator {...this.props} />
            </KeyboardAwareScrollView>
        );
    }
}

const containerStyle = {
    flex: 1,
    justifyContent: "space-between"
};