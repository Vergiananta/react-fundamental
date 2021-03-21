import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';

class Cent extends Component {
    render() {
        const { data } = this.props

        return (
            <Fragment>
                {
                    data.map((element, index) => {
                        return <p key={index}>{element.name}</p>
                    })
                }
            </Fragment>
        )
    }
}