import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
    isAnonymous: state.auth.resources.me.isAnonymous,
}))
export class RolRender extends PureComponent {
    render() {
        const {
            isAnonymous,
            renderWhenAnonymous = null,
            renderWhenLogged = null,
        } = this.props

        if (isAnonymous) {
            return <Fragment>{renderWhenAnonymous}</Fragment>
        }
        return <Fragment>{renderWhenLogged}</Fragment>
    }
}
