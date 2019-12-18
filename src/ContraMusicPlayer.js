
import React, { Component } from 'react';

class PlayHeader extends Component {

    componentDidMount() {
        //todas as chamadas de api devem ser feitas aqui
        //semelhante ao ngOnInit do Angular
        console.log('terminou de montar');
    }

    render() {
        return(
            <div>
                Header
            </div>
        )
    }
}

export class ContraMusicPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 44,
            status:'pause'
        }
    }

    render() {
        return(
            <div>
                Player <hr />
            <PlayHeader>

            </PlayHeader>
        </div>
        )
    }
}

ContraMusicPlayer.defaultProps = {
    theme: 'dark'
};