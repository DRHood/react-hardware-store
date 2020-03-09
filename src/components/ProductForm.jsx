import React, { Component } from 'react'

export default class ProductForm extends Component {
    state = {
        currentProduct: {
            productName: '',
            price: 0,
            description: '',
        },
    }

    updateProduct = (event) => {
        // Make a copy of our current product.
        const newProduct = { ...this.state.currentProduct };
        // Modify the copy of the product
        newProduct[event.target.name] = event.target.value;
        // Update the state with our modified product info.
        this.setState({
            currentProduct: newProduct,
        });
    }

    submitNewProduct = () => {
        this.props.addNewProduct(this.state.currentProduct);
    }

    render() {
        return (
            <div>
                <input type="text" name="productName" onChange={ this.updateProduct }/>
                <input type="number" name="price" onChange={ this.updateProduct }/>
                <input type="text" name="description" onChange={ this.updateProduct }/>
                <button onClick={ this.submitNewProduct }>Submit</button>
            </div>
        )
    }
}