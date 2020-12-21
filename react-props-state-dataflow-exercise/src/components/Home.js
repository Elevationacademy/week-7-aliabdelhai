import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (
            <div>
                <h4>Store</h4>
                <div>
                    {this.props.shouldDiscount ? this.props.store.map(s => < Item item={{...s, price: s.price * (1 - s.discount)}} />) : this.props.store.map(s => < Item item={s} />)}
                </div>
            </div>    
        )
    }
}

export default Home