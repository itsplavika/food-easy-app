import React from 'react';
import './filters.css';
import Input from '../input';
import Button from '../button';

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    searchHandler = () => {
        const { searchHandler } = this.props;
        searchHandler();
    }

    onChange = () => {
        const { onChangeHandler } = this.props;
        onChangeHandler();
    }

    render() {
        const { searchInputRef } = this.props;
        return (
            <section className="food-easy-filters">
                <form className="food-easy-search-form" ref={this.form} role="search">
                    <h3>Quick Search Food Name</h3>
                    <Input
                        placeholder="Enter food name"
                        name="searchFood"
                        id="searchFood"
                        ref={searchInputRef}
                    />
                    <Button buttonText="Search" clickHandler={this.searchHandler} />
                </form>
                <form role="filter">
                    <h3>Filter:</h3>
                    <div>Category</div>
                    <div>
                        <select id="category" onChange={this.onChange}>
                            <option selected value=""> Select Category</option>
                            <option value="food">Food</option>
                            <option value="beverage">Beverage</option>
                        </select>
                    </div>
                </form>
            </section>
        );
    }
}

export default Filters;
