import React from 'react';



class ProductsList extends React.Component {
    render() {
        return(
           <div>
                   {this.props.products.map((product, index) => (
                       <>
                       <div key={index} className="product-card">Title: {product.title}</div>
                           <div><span>Id product: </span>{product.id_product}</div>
                           <div><span>Link: </span>{product.link}</div>
                           <div><span>Description: </span> {product.description}</div>
                           <div>County: {product.country}</div>
                           <div>Stock: {product.stock === true ? "Yes" : "No" }</div>
                           <div>Category: {product.category}</div>
                           <div>Type: {product.type}</div>
                           <button onClick={() => this.props.handleDelete(product.id)}>Delete</button>
                       </>
                   ))}

           </div>
        )
    }
}

export default ProductsList