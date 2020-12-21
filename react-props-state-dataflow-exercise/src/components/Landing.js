import React, { Component } from 'react';

class Landing extends Component {
    hottestItem() {
        let hottestPrice;
        let hottestItem;
        for(let item of this.props.store) {
            if(item.hottest === true) {
                hottestPrice = item.price;
                hottestItem = item.item;
            }
        }
        return {hottestItem, hottestPrice}
    }


    render() {
        return (
        <div>Welcome, {this.props.user}. The hottest item is {this.hottestItem().hottestItem} for ${this.hottestItem().hottestPrice} </div>   
        )

    }
}

export default Landing