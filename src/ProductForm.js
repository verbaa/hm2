import React from 'react';


class ProductForm extends React.Component {
    state = {
        id_product: "",
        title: "",
        link: "",
        description: "",
        country: [],
        categoryTv: false,
        categoryLaptop: false,
        categoryMobile: false,
        stock: "",
        type: "",
        errorTitle: "",
        errorDescription: "",
        errors: {
            errorId: '',
            title: '',
            description: '',
            link: '',
        }
    }

    handlerChange = (e) => {
        let {name, value, type, selectedOptions, checked} = e.target;
        let errors = this.state.errors;

        if (type === 'select-multiple'){
            value = [...selectedOptions].map(o => o.value)
        }
        if (type === "checkbox"){
            value = checked
        }


        //Validation
        if (name === "id_product"){
            if (value.length && !/^\d+$/gmi.test(value)) {
                errors.errorId = "Only number";
            }else {
                errors.errorId = "";
            }
        }
        if (name === "title"){
            if (value.length && !/^.{1,50}$/.test(value)) {
                errors.title = "max size 50 symbols";
            }else {
                errors.title = "";
            }
        }
        if (name === "link"){
            if (value.length && !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(value)) {
                errors.link = "Invalid link";
            }else {
                errors.link = "";
            }
        }

        this.setState({[name]: value, errors})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({
            title: this.state.title,
            id_product: this.state.id_product,
            link: this.state.link,
            description: this.state.description,
            country: this.state.country,
            category: this.state.categoryTv || this.state.categoryMobile || this.state.categoryLaptop,
            stock: this.state.stock,
            type: this.state.type,
            id: Date.now(),

        })

    }


    render() {
        const {id_product, title, description, country, categoryTv, categoryMobile, categoryLaptop, stock, link, type, errors} = this.state
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <input required type="text" name="id_product" value={id_product} onChange={this.handlerChange} placeholder="ID product"/>
                        {errors.errorId.length > 0 &&
                        <span className='error'>{errors.errorId}</span>}
                    </div>
                    <div className="col-12">
                        <input type="text" name="title" value={title} onChange={this.handlerChange} placeholder="Title"/>
                        {errors.title.length > 0 &&
                        <span className='error'>{errors.title}</span>}
                    </div>
                    <div className="col-12">
                        <input type="text" name="link" value={link} onChange={this.handlerChange} placeholder="Link"/>
                        {errors.link.length > 0 &&
                        <span className='error'>{errors.link}</span>}
                    </div>
                    <div className="col-12">
                        <textarea  name="description" cols="30" value={description} rows="10" onChange={this.handlerChange}
                                                         placeholder="description"/>
                        {errors.description.length > 0 &&
                        <span className='error'>{errors.description}</span>}
                    </div>
                    <div className="col-12">
                        <div>Country</div>
                        <select multiple name="country" value={country} onChange={this.handlerChange}>
                            <option value="USA">USA</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Poland">Poland</option>
                            <option value="Germany">Germany</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div>Category</div>
                        <div>Mobile</div>
                        <input type="checkbox" name="categoryMobile" checked={categoryMobile} onChange={this.handlerChange}/>
                        <div>Tv</div>
                        <input type="checkbox" name="categoryTv" checked={categoryTv} onChange={this.handlerChange}/>
                        <div>Laptop</div>
                        <input type="checkbox" name="categoryLaptop" checked={categoryLaptop} onChange={this.handlerChange}/>
                    </div>
                    <div className="col-12">
                        <div>Stock</div>
                        <input type="checkbox" name="stock" checked={stock} onChange={this.handlerChange}/>
                    </div>
                    <div className="col-12">
                        <div>Type Product</div>
                        <div>Black</div>
                        <input type="radio" name="type" value="black" checked={type === "black"} onChange={this.handlerChange}/>
                        <div>white</div>
                        <input type="radio" name="type" value="white" checked={type === "white"} onChange={this.handlerChange}/>
                        <div>red</div>
                        <input type="radio" name="type" value="red" checked={type === "red"} onChange={this.handlerChange}/>
                    </div>
                    <div className="col-12">
                        <button>Send</button>
                    </div>
                </div>
            </form>
    </div>
        )
    }


    componentDidUpdate() {
        console.log(this.state)
    }
}

export default ProductForm