import React from 'react';

export default class Gallery extends React.Component{
    constructor(props){
        super(props);
    }

    render() {


        const images = [
            <div key={0} className="carousel-item active">
                <img src={this.props.images[0]} alt="bla"/>
            </div>
        ];

        for(let i = 1; i < this.props.images.length; i++){
            images.push(
                <div className="carousel-item" key={i}>
                    <img src={this.props.images[i]} alt="bla"/>
                </div>
            )
        }

        return (<div id="demo" className="carousel slide bg-dark mb-2" data-ride="carousel">
            <div className="carousel-inner">
                {images}
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark"/>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon bg-dark"/>
            </a>
        </div>);
    }
}