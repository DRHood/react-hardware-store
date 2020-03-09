  
import React, { Component } from 'react'
import ProductList from './ProductList';
import ProductForm from './ProductForm';

export default class AdminView extends Component {
    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                <ProductList productList={ this.props.productList }/>
                <h2>Create New Product</h2>
                <ProductForm addNewProduct={ this.props.addNewProduct }/>
            </div>
        )
    }
}
