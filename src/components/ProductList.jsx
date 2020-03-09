import React, { Component } from 'react'
import Product from './Product.jsx';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.productList.map((prod, i) => {
                        return <Product prod={ prod } key={ i }
                            index={ i }
                            deleteProduct={ this.props.deleteProduct }
                            addToCart={ this.props.addToCart }/>;
                    })
                }
            </div>
        )
    }
}