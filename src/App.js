import React, { Component } from 'react';
import QueryHolder from "./Components/QueryHolder";
import AdsList from "./Components/AdsList";
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            ads: [
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Скопjе/Карпош/ВОЗИЛА/Автомобили/Peugeot/207/PEUGEOT-207-1-4-HDI--06-KLIMA-KAKO-NOVO-FULL/3212885","id":3212885,"source":1,"title":"PEUGEOT 207 1.4 HDI -06 KLIMA KAKO NOVO FULL","dateTime":"2019-06-10T23:27:00","price":2799.0,"location":"Скопjе","image":{"url":"https://media.pazar3.mk/Image/914ac139-97b0-4899-8758-e20aa7d1bf33/20190610/false/false/PEUGEOT-207-1-4-HDI--06-KLIMA-KAKO-NOVO-FULL.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Прилеп/Прилеп/ВОЗИЛА/Автомобили/Renault/Scenic/RENAULT-SCENIC-1-9-DCI-88kw--05/3212860","id":3212860,"source":1,"title":"RENAULT SCENIC 1.9 DCI 88kw -05","dateTime":"2019-06-10T22:29:00","price":2850.0,"location":"Прилеп","image":{"url":"https://media.pazar3.mk/Image/7aae6cb2-4bd8-4c15-b4b6-f4ca6c67cc9a/20190610/false/false/RENAULT-SCENIC-1-9-DCI-88kw--05.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Скопjе/Кисела-Вода/ВОЗИЛА/Автомобили/VW-Volkswagen/Passat/Passat/Vw-Passat-2-0-TDI-140ks/3211132","id":3211132,"source":1,"title":"Vw Passat 2.0 TDI 140ks","dateTime":"2019-06-08T01:53:00","price":4900.0,"location":"Скопjе","image":{"url":"https://media.pazar3.mk/Image/a4def51a-04b4-4890-a257-aee178f78416/20190608/false/false/Vw-Passat-2-0-TDI-140ks.jpeg"}},
                {"url":"https://www.reklama5.mk/AdDetails?ad=3288089","id":3288089,"source":2,"title":"Opel corsa","dateTime":"2019-06-08T00:52:00","price":1.0,"location":"Прилеп","image":{"url":"reklama5.mk/img/ad/big/70bd37d6-2c2a-40b8-bd22-7f2877889059.jpg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Гевгелиjа/Гевгелија/ВОЗИЛА/Автомобили/BMW/3-серии/320/Bmw/3211122","id":3211122,"source":1,"title":"Bmw","dateTime":"2019-06-08T00:45:00","price":0.0166667,"location":"Гевгелиjа","image":{"url":"https://media.pazar3.mk/Image/12360b35-63f7-42d6-bac6-7f0bb1390b42/20190608/false/false/Bmw.jpeg"}},
                {"url":"https://www.pazar3.mk/Оглас/Се-продава/Кавадарци/Кавадарци/ВОЗИЛА/Автомобили/BMW/7-серии/730/BMW-730d/3211118","id":3211118,"source":1,"title":"BMW 730d","dateTime":"2019-06-08T00:25:00","price":7000.0,"location":"Кавадарци","image":{"url":"https://media.pazar3.mk/Image/c0bfc0f41dc347d78c933737cf4609a5/20190608/false/false/BMW-730d.jpeg"}}
                ],
        }
    }



  render() {
    return (
        <div className="App bg container">
          <BrowserRouter>
            <Route path="/" component={QueryHolder}/>
            <Route path="/ads" component={AdsList}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
