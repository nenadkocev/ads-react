import React from 'react';
import CarQuery from "./Queries/CarQuery";
import MotorbikeQuery from "./Queries/MotorbikeQuery";
import MopedQuery from "./Queries/MopedQuery";
import CategoryImage from './categoryImage';
import AdsList from './AdsList';

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
            years: years,

            ads: [
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Скопjе/Карпош/ВОЗИЛА/Автомобили/Peugeot/207/PEUGEOT-207-1-4-HDI--06-KLIMA-KAKO-NOVO-FULL/3212885","id":3212885,"source":1,"title":"PEUGEOT 207 1.4 HDI -06 KLIMA KAKO NOVO FULL","dateTime":"2019-06-10T23:27:00","price":2799.0,"location":"Скопjе","image":{"url":"https://media.pazar3.mk/Image/914ac139-97b0-4899-8758-e20aa7d1bf33/20190610/false/false/PEUGEOT-207-1-4-HDI--06-KLIMA-KAKO-NOVO-FULL.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Прилеп/Прилеп/ВОЗИЛА/Автомобили/Renault/Scenic/RENAULT-SCENIC-1-9-DCI-88kw--05/3212860","id":3212860,"source":1,"title":"RENAULT SCENIC 1.9 DCI 88kw -05","dateTime":"2019-06-10T22:29:00","price":2850.0,"location":"Прилеп","image":{"url":"https://media.pazar3.mk/Image/7aae6cb2-4bd8-4c15-b4b6-f4ca6c67cc9a/20190610/false/false/RENAULT-SCENIC-1-9-DCI-88kw--05.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Скопjе/Кисела-Вода/ВОЗИЛА/Автомобили/VW-Volkswagen/Passat/Passat/Vw-Passat-2-0-TDI-140ks/3211132","id":3211132,"source":1,"title":"Vw Passat 2.0 TDI 140ks","dateTime":"2019-06-08T01:53:00","price":4900.0,"location":"Скопjе","image":{"url":"https://media.pazar3.mk/Image/a4def51a-04b4-4890-a257-aee178f78416/20190608/false/false/Vw-Passat-2-0-TDI-140ks.jpeg"}},
                {"url":"https://www.reklama5.mk/AdDetails?ad=3288089","id":3288089,"source":2,"title":"Opel corsa","dateTime":"2019-06-08T00:52:00","price":1.0,"location":"Прилеп","image":{"url":"reklama5.mk/img/ad/big/70bd37d6-2c2a-40b8-bd22-7f2877889059.jpg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Гевгелиjа/Гевгелија/ВОЗИЛА/Автомобили/BMW/3-серии/320/Bmw/3211122","id":3211122,"source":1,"title":"Bmw","dateTime":"2019-06-08T00:45:00","price":0.0166667,"location":"Гевгелиjа","image":{"url":"https://media.pazar3.mk/Image/12360b35-63f7-42d6-bac6-7f0bb1390b42/20190608/false/false/Bmw.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Кавадарци/Кавадарци/ВОЗИЛА/Автомобили/BMW/7-серии/730/BMW-730d/3211118","id":3211118,"source":1,"title":"BMW 730d","dateTime":"2019-06-08T00:25:00","price":7000.0,"location":"Кавадарци","image":{"url":"https://media.pazar3.mk/Image/c0bfc0f41dc347d78c933737cf4609a5/20190608/false/false/BMW-730d.jpeg"}}
            ],
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
            console.log("asdsa");
            const url = "http://www.localhost:8080/res/locations";
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
        let carQuery = <div><CarQuery prices={this.state.prices} locations={this.state.locations} years={this.state.years} killometers={this.state.killometers}></CarQuery></div>;
        let bikeQuery = <div><MotorbikeQuery prices={this.state.prices} locations={this.state.locations} years={this.state.years} killometers={this.state.killometers}></MotorbikeQuery></div>
        let mopedQuery = <div><MopedQuery prices={this.state.prices} locations={this.state.locations}></MopedQuery></div>
        const queries = [
            carQuery, bikeQuery, mopedQuery
        ];

        return(
            <div className="row">
                <div className="col-5 queries-holder">
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
                <div className="col-7 text-holder" >
                    <h1><b>Најдете го возилото кое ке ги задоволи вашите потреби</b></h1>
                </div>

                <div>
                    <AdsList ads={this.state.ads}/>
                </div>
            </div>
        );
    }
}

export default QueryHolder;