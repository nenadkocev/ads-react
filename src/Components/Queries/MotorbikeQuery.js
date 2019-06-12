import React from 'react';
import SingleOptionFilter from "../Filters/singleOptionFilter";
import FromToFilter from "../Filters/fromToFilter";
import MultipleChoiseFilter from "../Filters/multipleChoiseFilter";

class MotorbikeQuery extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            manufacturer : 'Сите производители',
            priceFrom: 0,
            prirceTo: 200000,
            killometersFrom: 0,
            killometersTo: 500000,
            yearFrom: 1940,
            yearTo: new Date().getFullYear(),
            location: 'Цела Македонија',

            manufacturers: [],
            prices: this.props.prices,
            locations : this.props.locations,
            killometers: this.props.killometers,
            years: this.props.years,
        };
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
        let prices = this.state.prices;
        let killometers = this.state.killometers;
        let years = this.state.years;
        let locations = this.state.locations;

        return(
            <div>
                <form method="get" action="/ads">
                    <div className="row">
                        <div className="col">
                            <SingleOptionFilter options={manufacturers} labelName="Марка: " id="manufacturer" requestName="manu"/>
                        </div>
                        <div className="col">
                            <SingleOptionFilter options={locations} labelName="Локација: " id="location" requestName="l"/>
                        </div>
                    </div>
                    <FromToFilter options={prices} idFrom="price_from" idTo="price_to" labelFrom="Цена од:" labelTo="Цена до: " requestNameFrom="pf" requestNameTo="pt"/>
                    <FromToFilter options={killometers} idFrom="kms_from" idTo="kms_to" labelFrom="Километри од:" labelTo="Километри до: " requestNameFrom="kmf" requestNameTo="kmt"/>
                    <FromToFilter options={years} idFrom="year_from" idTo="year_to" labelFrom="Година од:" labelTo="Година до: " requestNameFrom="yf" requestNameTo="yt"/>

                    <input type="hidden" value="2" name="cat"/>
                    <button className="btn btn-success btn-block btn-no-radius">Пребарај</button>
                </form>
            </div>
        );
    }

}

export default MotorbikeQuery;