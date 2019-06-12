import React from 'react';

export default class AdsList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        let ads = this.props.ads.map((ad, index) => {
           return <div key={index}>
               <div>{ad.url}</div>
               <div>{ad.title}</div>
               <div>{ad.price}</div>
               <img src={ad.image.url}/>
               <input type="hidden" value={ad.id} name="id"/>
               <input type="hidden" value={ad.source} name="source"/>
           </div>
        });


        return(
            <div>
                {ads}
            </div>
        );
    }
}