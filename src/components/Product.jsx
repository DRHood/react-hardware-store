import React, { Component } from 'react'

export default class Product extends Component {
    deleteProduct = () => {
        this.props.deleteProduct(this.props.index);
    }

    addToCart = () => {
        this.props.addToCart(this.props.prod);
    }

    render() {
        const { productName, price, description } = this.props.prod;
        return (
            <div>
                <h3>{ productName }</h3>
                <div>Price: ${ price }</div>
                <div>{ description }</div>
                <div>
                    { this.props.deleteProduct !== undefined
                        ? <button onClick={ this.deleteProduct }>
                            Delete Product
                          </button>
                        : null
                    }
                    { this.props.addToCart !== undefined
                        ? <button onClick={ this.addToCart }>
                            Add To Cart
                          </button>
                        : null
                    }
                </div>
            </div>
        )
    }
}