import React, {Component} from "react";

export default class Product extends Component {

    render() {
    
    return (
            <main className="redBox">
                <div className="imgp">
                    <img alt="pic_product"></img>
                    </div>
                <div className="info">
                    <h4>name</h4>
                    <h5>price</h5>

                </div>
                <div className="gbutts">
                    <button>Delete</button>
                    <button>edit</button>
                </div>

                
            </main>
    )
    }
}


//edit button should route to edit view with id