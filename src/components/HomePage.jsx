import React, { Component } from 'react'
import AdminView from './AdminView.jsx';
import CartView from './CartView.jsx';
import ShopView from './ShopView.jsx';

export default class HomePage extends Component {
    state = {
        itemOnSale: 'A Shovel',
        editSaleItem: false,
        productList: [
            {
                productName: 'A Shovel',
                price: 20,
                description: 'A very high-quality shovel. Metal blade.',
            },
            {
                productName: 'Chainsaw',
                price: 60,
                description: 'A used chainsaw. Questionable quality. Use at your own risk.',
            },
        ],
        cartProductList: [
            {
                productName: 'Chainsaw',
                price: 60,
                description: 'A used chainsaw. Questionable quality. Use at your own risk.',
            },
        ],
    }

    toggleEditSaleItem = () => {
        const newEditSaleItem = !this.state.editSaleItem;
        this.setState({
            editSaleItem: newEditSaleItem,
        });
    };

    addNewProduct = (newProduct) => {
        // Make a copy of the product list.
        const newProductList = [ ...this.state.productList ];
        // Add the new product to our copy of the product list.
        newProductList.push(newProduct);
        // Update our state with the modified product list.
        this.setState({
            productList: newProductList,
        });
    }

    deleteProduct = (i) => {
        const updatedProductList = [ ...this.state.productList ];
        updatedProductList.splice(i, 1);
        this.setState({
            productList: updatedProductList,
        });
    }

    addToCart = (newCartItem) => {
        const newCartProductList = [ ...this.state.cartProductList ];
        newCartProductList.push(newCartItem);
        this.setState({
            cartProductList: newCartProductList,
        });
    }

    removeFromCart = (i) => {
        const updatedCartProductList = [ ...this.state.cartProductList ];
        updatedCartProductList.splice(i, 1);
        this.setState({
            cartProductList: updatedCartProductList,
        });
    }

    changeItemOnSale = (event) => {
        // Get the value of the new item on sale.
        const newItemOnSale = event.target.value;
        // Update the state.
        this.setState({
            itemOnSale: newItemOnSale,
        });
    };

    render() {
        return (
            <div>
                <h1>Homicidal Hardware</h1>
                <div>Currently on sale: { this.state.itemOnSale }!</div>
                <span><button onClick={ this.toggleEditSaleItem }>
                    { this.state.editSaleItem
                        ? 'Close'
                        : 'Edit item on sale'
                    }
                </button></span>
                { this.state.editSaleItem
                    ? <div>
                        <input type="text" value={ this.state.itemOnSale }
                            onChange={ this.changeItemOnSale }/>
                      </div>
                    : null
                }

                <AdminView productList={ this.state.productList }
                    addNewProduct={ this.addNewProduct }
                    deleteProduct={ this.deleteProduct }/>

                <ShopView productList={ this.state.productList }
                    addToCart={ this.addToCart}/>

                <CartView productList={ this.state.productList }
                    cartProductList={ this.state.cartProductList }
                    removeFromCart={ this.removeFromCart }/>
            </div>
        )
    }
}