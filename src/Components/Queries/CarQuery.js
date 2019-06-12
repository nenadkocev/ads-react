import React from 'react';
import SingleOptionFilter from "../Filters/singleOptionFilter";
import FromToFilter from "../Filters/fromToFilter";
import MultipleChoiseFilter from "../Filters/multipleChoiseFilter";

class CarQuery extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            model : 'Сите модели',
            priceFrom: 0,
            prirceTo: 200000,
            killometersFrom: 0,
            killometersTo: 500000,
            yearFrom: 1940,
            yearTo: new Date().getFullYear(),
            location: 'Цела Македонија',
            gearbox: [false, false, false],
            fueltype: [false, false, false],

            manufacturers: [],
            models: ['Сите модели'],
            prices: this.props.prices,
            locations : this.props.locations,
            killometers: this.props.killometers,
            years: this.props.years,
        };

        this.onManufacturerClicked = this.onManufacturerClicked.bind(this);
    }


    async componentDidMount() {
        if(this.state.manufacturers.length === 0){
            const url = "http://www.localhost:8080/res/manufacturers";
            const response = await fetch(url);
            const data = await response.json();

            this.setState({
                manufacturers: data
            });
        }
    }

    async onManufacturerClicked(manufacturer){
        let models = [];
        if(manufacturer !== "Сите производители"){
            const url = "http://www.localhost:8080/res/models?man=" + manufacturer;
            const response = await fetch(url);
            const data = await response.json();

            models = data.map(model => {return model.model;});
        }
        else {
            models = ["Сите модели"]
        }
        this.setState({
            models : models,
        })
    }

    componentWillReceiveProps(props, nextContext) {
        this.setState({
            prices: props.prices,
            locations : props.locations,
            killometers: props.killometers,
            years: props.years,
        });
    }

    render() {

        let manufacturers = this.state.manufacturers.map(man => {return man.manufacturer});
        let models = this.state.models;
        let prices = this.state.prices;
        let killometers = this.state.killometers;
        let years = this.state.years;
        let locations = this.state.locations;
        let fuelTypes = ["Дизел", "Бензин", "Бензин / Плин", "Хибрид", "Електричен автомобил", "Друго"];
        let gearBoxes = ["Рачен", "Автоматски", "Steptronic / Tiptronic"];

        return(
            <div>
                <form method="get" action="http://www.localhost:8080/ad/all">
                    <div className="row">
                        <div className="col">
                            <SingleOptionFilter options={manufacturers} labelName="Марка: " id="manufacturer" requestName="manu" onClick={this.onManufacturerClicked}/>
                        </div>
                        <div className="col">
                            <SingleOptionFilter disabled={!(models.length > 1)} options={models} labelName="Модел: " id="model" requestName="mod"/>
                        </div>
                    </div>
                <SingleOptionFilter options={locations} labelName="Град: " id="location" requestName="l"/>

                <FromToFilter options={prices} idFrom="price_from" idTo="price_to" labelFrom="Цена од:" labelTo="Цена до: " requestNameFrom="pf" requestNameTo="pt"/>
                <FromToFilter options={killometers} idFrom="kms_from" idTo="kms_to" labelFrom="Километри од:" labelTo="Километри до: " requestNameFrom="kmf" requestNameTo="kmt"/>
                <FromToFilter options={years} idFrom="year_from" idTo="year_to" labelFrom="Година од:" labelTo="Година до: " requestNameFrom="yf" requestNameTo="yt"/>

                    <div className="row">
                        <div className="col">
                            <MultipleChoiseFilter options={fuelTypes} legendDescription="Изберете гориво: " requestName="ft"/>
                        </div>
                        <div className="col">
                            <MultipleChoiseFilter options={gearBoxes} legendDescription="Изберете менувач: " requestName="gb"/>
                        </div>
                    </div>

                <input type="hidden" value="1" name="cat"/>
                <button className="btn-no-radius btn btn-success btn-block">Пребарај</button>
                </form>
            </div>
        );
    }

}

export default CarQuery;