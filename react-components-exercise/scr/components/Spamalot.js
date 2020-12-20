import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render() {
        let spams = []
        for(let i =0; i<500; i++)
        {
            spams.push(<Spam />)
        }

        return (
            spams
        )
    }
}

export default Spamalot

