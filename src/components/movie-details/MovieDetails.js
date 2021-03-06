import React, { Component }from "react";

export default class MovieDetails extends Component {
    render() {
        return (
        <div className="w-25 border p-4 d-flex flex-column ">
            <h5>{ this.props.movie.title }</h5>
            <hr className="w-100"></hr>
            <div>
                <img className="d-block mx-auto" alt="imageFilm" src={ this.props.movie.img}/>
            </div>
            <hr className="w-100"></hr>
            <span className="text-secondary">{this.props.movie.details}</span>
            <hr className="w-100"></hr>
            <span>{ this.props.movie.description}</span>
        </div>
        );

    }
}