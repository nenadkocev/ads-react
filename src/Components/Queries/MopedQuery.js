import React from 'react';
import SingleOptionFilter from "../Filters/singleOptionFilter";
import FromToFilter from "../Filters/fromToFilter";
import MultipleChoiseFilter from "../Filters/multipleChoiseFilter";

class MopedQuery extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            priceFrom: 0,
            prirceTo: 200000,
            location: 'Цела Македонија',

            prices: this.props.prices,
            locations : this.props.locations,
        };
    }

    componentWillReceiveProps(props, nextContext) {
        this.setState({
            prices: props.prices,
            locations : props.locations,
        });
    }

    render() {

        let prices = this.state.prices;
        let locations = this.state.locations;

        return(
            <div>
                <form method="get" action="/ads">
                    <SingleOptionFilter options={locations} labelName="Локација: " id="location" requestName="l"/>
                    <FromToFilter options={prices} idFrom="price_from" idTo="price_to" labelFrom="Цена од:" labelTo="Цена до: " requestNameFrom="pf" requestNameTo="pt"/>

                    <input type="hidden" value="3" name="cat"/>
                    <button className="btn btn-success btn-block btn-no-radius ">Пребарај</button>
                </form>
            </div>
        );
    }

}

export default MopedQuery;