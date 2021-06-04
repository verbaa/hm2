import React from 'react';
import ProductForm from "./ProductForm";
import ProductsList from "./ProductList";


class Products extends React.Component {
    state = {
     products: [],
    }

    handleCreate = (product) => {
        this.setState((prevstate) => ({
            products: [...prevstate.products, product]
        }));
    }

    handleDelete = (id) => {
        this.setState((prevstate) => ({
            products: [...prevstate.products.filter(product => product.id !== id)]
        }));
    }


    render() {
        return(
            <div>
                <ProductForm handleSubmit={this.handleCreate}/>
                <ProductsList products={this.state.products} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default Products