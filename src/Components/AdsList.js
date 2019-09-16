import React from 'react';
import {appPort, serverURL} from "../constants";

export default class AdsList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            adList : [],
            page: 0,
            pageSize: 50,
            sort: "dateTime",
            dir: 0
        };
        this.sortChanged = this.sortChanged.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.showPage = this.showPage.bind(this);
    }

    fetchData(){
        const url = serverURL + "/ad/all" + this.props.location.search + "&page=" + this.state.page
            + "&pageSize=" + this.state.pageSize + "&dir=" + this.state.dir + "&sort=" + this.state.sort;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    adList: data
                })
            });
        window.scrollTo(0, 0);
    }

    async componentDidMount() {
        this.fetchData();
    }

    sortChanged(event){
        let sort1;
        let dir1;
        let value = event.target.value;
        if(value === 1){
            sort1 = "dateTime";
            dir1 = 0;
        }
        else if(value === 2){
            sort1 = "price";
            dir1 = 0;
        }
        else {
            sort1 = "price";
            dir1 = 1;
        }
        this.setState({
            sort: sort1,
            dir: dir1
        });
        this.fetchData();
    }

    showPage(page){
        console.log(123);
        this.setState((prevState, props) => ({
            page: page
        }));
        this.fetchData();
    }

    nextPage(){
        this.setState((prevState, props) => ({
            page: prevState.page + 1
        }));
        this.fetchData();
    }

    prevPage(){
        this.setState((prevState, props) => ({
            page: prevState.page - 1
        }));
        this.fetchData();
    }

    render(){

        let ads = this.state.adList.map((ad, index) => {
            let adLink = "http://www.localhost:" + appPort + "/ad" + "/" + ad.source + "/" + ad.id;
           return <div key={index} className="card flex-row flex-wrap mb-2">
               <div className="card-header border-0 img-holder-card">
                   <img src={"http://www." + ad.image.url} alt="img" className="card-img-top thumbs text-center"/>
               </div>
               <div className="card-content px-2 pb-2 pt-2">
                   <h4 className="card-title">{ad.title}</h4>
                   <div className="text-left">
                       <p>Цена: {ad.price} EUR</p>
                       <p>Локација: {ad.location}</p>
                       <p>Датум: {ad.dateTime}</p>
                       <div>
                           <a href={ad.url}>Линк до огласот</a>
                       </div>
                       <a className="btn btn-success" href={adLink}>Детали...</a>
                   </div>
               </div>
               <input type="hidden" value={ad.id} name="id"/>
               <input type="hidden" value={ad.source} name="source"/>
           </div>
        });

        console.log(ads);

        let previousPages = [];

        for(let i = 0; i < 5; i++){
            let pageNumber = this.state.page - i;
            if(pageNumber <= 0)
                break;
            previousPages[5-i] = <li className="page-item"><a className="page-link" >{pageNumber}</a></li>
        }

        return(
            <div className="container content">
                <div className="bg-light form-inline pl-2">
                    <label form="sort">Подреди по: </label>
                    <select className="form-control ml-2" id="sort" onChange={this.sortChanged}>
                        <option value={1}>Најновите огласи прво</option>
                        <option value={2}>Цена растечки</option>
                        <option value={3}>Цена опаѓачки</option>
                    </select>
                </div>
                {ads}
                <ul className={"pagination"}>
                    <li className={!this.state.page ? 'disabled page-item' : 'page-item'} ><a className='page-link' onClick={this.prevPage}>Претходна</a></li>
                    {previousPages}
                    <li className="page-item active"><a className="page-link">{this.state.page + 1}</a></li>
                    <li className="page-item"><a className="page-link" onClick={this.nextPage}>Следна</a></li>
                </ul>
            </div>
        );
    }
}