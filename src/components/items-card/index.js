import React from 'react';
import './item-card.css';
import Button from '../button';
import { ConsoleWriter } from 'istanbul-lib-report';

class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            itemAdded: false
        }
    }

    addToCart() {
        this.setState({
            itemAdded: true
        });
        alert('Item added successfully!!!');
    }

    render() {

        const { foodItemsList } = this.props;

        return (
            <div className="food-easy-content">
                {/* {this.state.itemAdded && <p>Item added successfully!!!</p>} */}
                { foodItemsList && foodItemsList.length > 0 ? <ul className="food-easy-item-wrapper">
                    {
                        foodItemsList.map((fooditem) => {
                            return (
                                <li className="food-easy-item" key={fooditem.itemId}>
                                    <img alt={`food image ${fooditem.itemId}`} className="food-easy-item-image" src="https://via.placeholder.com/150" />
                                    <label className="food-easy-item-name">{fooditem.itemLabel}</label>
                                    <p className="food-easy-item-cuisine">{fooditem.itemCuisine}</p>
                                    <p className="food-easy-item-ingredient">{fooditem.itemIngredients}</p>
                                    <p className="food-easy-item-category">{fooditem.category}</p>
                                    <p className="food-easy-item-ratings">{`${fooditem.ratings} star`}</p>
                                    <div className="food-easy-item-bottom">
                                        <p className="food-easy-item-price">{`Rs. ${fooditem.itemPrice}`}</p>
                                        <Button buttonText="Add" clickHandler={this.addToCart}/>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul > : <p className="food-easy-noData"> No items matched your search</p>}

            </div>
        );
    }
}

export default ItemCard;
