import React from "react";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    return (
    <div>
        <div className="col">
            <div className="col s12 m5" >
                <div className="card huge"  style={{alignSelf:"center",backgroundColor:"white"}}>
                    <img
                        src={props.location.image}
                        alt=""
                        style={{width: 320, height: 420, marginLeft:"40%" }}
                    />
                    <div></div>
                    <span className="card-title" style={{fontWeight: "bold",marginLeft:"40%" }}>{props.location.title}</span>
                    <div></div>
                    <span className="card-title" style={{marginLeft:"40%" }}><text>  Author: </text>{props.location.author}</span>
                    <div></div>
                    <span className="card-title" style={{marginLeft:"40%" }}><text>  Published: </text>{props.location.published}</span>

                    <div className="row card-content">
                        <p>{props.location.description}</p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: "/", books: props.location.props }}>Go to search page!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

};

export default BookDetails;