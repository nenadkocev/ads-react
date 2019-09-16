import React from 'react';
import CarQuery from "./Queries/CarQuery";
import MotorbikeQuery from "./Queries/MotorbikeQuery";
import MopedQuery from "./Queries/MopedQuery";
import CategoryImage from './categoryImage';
import {serverURL} from "../constants";

class QueryHolder extends React.Component{

    constructor(props){
        super(props);

        let years = [1940, 1950, 1960, 1970, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        let currentYear = new Date().getFullYear();
        for(let i = years[years.length - 1] + 1; i <= currentYear; i++)
            years.push(i);

        this.state = {
            man: null,
            mod: null,
            pf: null,
            pt: null,
            kf: null,
            kt: null,
            yf: null,
            yt: null,
            l: null,
            ft: [],
            gb: [],
            cat : 1,

            prices: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 17500, 20000, 22500, 25000, 27500, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000],
            locations : [],
            killometers: [0, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 125000, 150000, 175000, 200000, 250000, 300000, 350000, 400000, 450000, 500000],
            years: years
        };

        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    onLinkClicked(cat){
        this.setState({
            cat: cat
        })
    }

    async componentDidMount() {
        if (this.state.locations.length === 0) {
            const url = serverURL + "/res/locations";
            const response = await fetch(url);
            const data = await response.json();

            const locations = data.map(object => {
                return object.location;
            });
            this.setState({
                locations: locations
            });
        }
    }

    render(){
        let visible = this.state.cat;
        let carQuery = <div><CarQuery prices={this.state.prices} locations={this.state.locations} years={this.state.years} killometers={this.state.killometers}/></div>;
        let bikeQuery = <div><MotorbikeQuery prices={this.state.prices} locations={this.state.locations} years={this.state.years} killometers={this.state.killometers}/></div>;
        let mopedQuery = <div><MopedQuery prices={this.state.prices} locations={this.state.locations}/></div>;
        const queries = [
            carQuery, bikeQuery, mopedQuery
        ];

        return(
            <div className="row container content">
                <div className="col-12 col-md-5 queries-holder">
                    <div>
                        <div className="row categories-holder">
                            <CategoryImage category={1} clicked={this.state.cat} onClick={this.onLinkClicked} imageSource="https://image.flaticon.com/icons/svg/72/72833.svg"/>
                            <CategoryImage category={2} clicked={this.state.cat} onClick={this.onLinkClicked} imageSource="https://image.spreadshirtmedia.com/image-server/v1/mp/designs/13486872,width=178,height=178,version=1493531559/motorbike-icon-2.png"/>
                            <CategoryImage category={3} clicked={this.state.cat} onClick={this.onLinkClicked} imageSource="https://cdn3.iconfinder.com/data/icons/transport-04-set-of-motorcycles-and-bicycles/100/Motorcycles_and_bicycles_3-512.png"/>
                        </div>
                        <div>
                            {queries[visible - 1]}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 text-holder" >
                    <h1 className=" font-weight-light">Најдете го возилото кое ке ги задоволи вашите потреби</h1>
                </div>
            </div>
        );
    }
}

export default QueryHolder;