import React, { Component } from "react";
import './Form.css';
import axios from "axios"



export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            price: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    axios.post("/api/product", {
                        image: this.state.image,
                        event: this.state.name,
                        date: this.state.price
                    })
                        .then(response => {
                            this.props.changeSection();
                        })
                        .catch(error => {
                            this.setState({ error: "an error ocurred" });
                        });
                }}
            >
                <main className="parent">

                    <div className="greenBox">
                        <img alt="product_pic"></img>

                        <h4>Image URL:</h4>
                        <input
                            className="wordbox"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                        <h4>Product Name:</h4>
                        <input
                            className="wordbox"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                        <h4>Price:</h4>
                        <input
                            className="wordbox"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.price}
                        />
                        <div className="pushit">
                            <button className="redpush" type="reset" value="reset">Cancel</button>
                            <button className="redpush" type="submit">Add to Inventory</button>
                        </div>

                    </div>
                </main>
            </form >


        )
    }
}

//get endpoint that returns one product by ID for edit

// method to to hit the endpoint and set the product info to state and use
//componentDidMount if the user edits. if they want to add new then it should not fire

//user redirected to dashboard after adding a new product or saving changes to existing

// componentDidUpdate lifecycle hook should no longer be used to chec a product

//componentDidUpdate hood should now clear the inputs in the user leaves the edit page
