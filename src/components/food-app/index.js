import * as React from 'react';
import ItemCard from '../items-card';
import Filters from '../filters';
import { foodData } from '../../static/food-data.json'
import './food-app.css';

class FoodApp extends React.Component {

  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.searchInputRef= React.createRef();
    this.state = {
        data: foodData.foodItemsList,
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  searchHandler() {
    const searchedValue = document.getElementById('searchFood').value.toLowerCase();
    this.onChangeHandler(searchedValue, 'itemLabel')
  }

  //Generic handler
  onChangeHandler (searchedData, keyName ='category') {
    const searchedValue = searchedData ? searchedData : document.getElementById('category').value.toLowerCase();
    const searchedItem = foodData.foodItemsList.filter(item => item[keyName].toLowerCase().includes(searchedValue));
    if(searchedValue) {
        if(searchedItem) { // Searched and matched
            this.setState({
                data : searchedItem
            });
        }
    } else { // Not searched
        this.setState({
            data: foodData.foodItemsList
        });
    }
  }

  render() {
    const { data } = this.state;

    if(!data) {
        return null;
    }

    return (
        <section className="food-easy-wrapper">
            <Filters
                foodData={foodData}
                searchHandler={this.searchHandler}
                searchInputRef={this.searchInputRef}
                onChangeHandler={this.onChangeHandler}
            />
            <ItemCard foodItemsList={data}/>
        </section>
    );
  }
}

export default FoodApp;
