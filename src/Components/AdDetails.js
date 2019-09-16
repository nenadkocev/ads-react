import React from 'react';
import {serverURL} from "../constants";
import Gallery from "./Gallery";

export default class AdDetails extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: {}
        }
    }

    componentDidMount() {
        let url = serverURL + "/ad?id=" + this.props.match.params.id + "&s=" + this.props.match.params.source;
        fetch(url)
            .then(response => response.json())
            .then(body => {
                this.setState({body: body});
            });
    }

    render() {

        let galery = <div className="mb-2"></div>;
        if(this.state.body.images !== undefined && this.state.body.images.length > 0){
            let images = this.state.body.images.map(image => {
                image = image.url;
                if(image.startsWith("https://media.pazar3.mk/")){
                    let first = image.substring(0, 88);
                    let third = image.substring(88);
                    return first + "640/800/" + third;
                }
                else if(image.startsWith("reklama5.mk")) {
                    return "http://" + image;
                }
            });
            galery = <Gallery images={images}/>
        }
        let manufacturer;
        if(this.state.body.manufacturer !== undefined){
            manufacturer = <div className="row">
                <div className="col-sm-3 text-right"><strong>Марка: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.manufacturer}</div> </div>
        }

        let model;
        if(this.state.body.model !== undefined){
            model = <div className="row">
                <div className="col-sm-3 text-right"><strong>Модел: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.model}</div> </div>
        }
        let year;
        if(this.state.body.year !== undefined){
            year = <div className="row">
                <div className="col-sm-3 text-right"><strong>Година: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.year}</div> </div>
        }

        let kms;
        if(this.state.body.kms !== undefined){
            kms = <div className="row">
                <div className="col-sm-3 text-right"><strong>Километри: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.kms}</div> </div>
        }
        let color;
        if(this.state.body.color !== undefined){
            color = <div className="row">
                <div className="col-sm-3 text-right"><strong>Боја: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.color}</div> </div>
        }
        let fuel;
        if(this.state.body.color !== undefined){
            fuel = <div className="row">
                <div className="col-sm-3 text-right"><strong>Гориво: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.fuel}</div> </div>
        }
        let gear;
        if(this.state.body.gear !== undefined){
            gear = <div className="row">
                <div className="col-sm-3 text-right"><strong>Менувач: </strong></div>
                <div className="col-sm-9 text-left">{this.state.body.gear}</div> </div>
        }

        return (
            <div className="bg-light content">
                <h1>{this.state.body.title}</h1>
                <hr/>
                <div className="container">
                    {galery}
                </div>
                <div className="container pb-4">
                    <dl className="row">
                        <dt className="col-sm-3 text-right">Цена: </dt>
                        <dd className="col-sm-9 text-left text-success">{this.state.body.price} EUR</dd>
                        <dt className="col-sm-3 text-right">Локација: </dt>
                        <dd className="col-sm-9 text-left">{this.state.body.location}</dd>
                        <dt className="col-sm-3 text-right">Продавач: </dt>
                        <dd className="col-sm-9 text-left">{this.state.body.seller}</dd>
                        <dt className="col-sm-3 text-right">Контакт: </dt>
                        <dd className="col-sm-9 text-left">{this.state.body.sellerPhoneNumber}</dd>
                        <dt className="col-sm-3 text-right">Огласот е објавен на : </dt>
                        <dd className="col-sm-9 text-left">{this.state.body.dateTime}</dd>
                    </dl>
                    <hr/>

                    <div className="text-left">
                        {this.state.body.description}
                    </div>


                    <hr/>
                        {manufacturer}
                        {model}
                        {year}
                        {kms}
                        {fuel}
                        {color}
                        {gear}
                </div>
            </div>
        );
    }
}