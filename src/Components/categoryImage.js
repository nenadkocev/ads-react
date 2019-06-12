import React from 'react';

const categoryImage = (props) => {
    let category = props.category;
    let classname = props.clicked === category ? "col category-link-clicked" : "col category-link";
        let imageSource = props.imageSource;
        return (
            <a href="#" className={classname} onClick={() => props.onClick(category)}>
                <div>
                    <img src={imageSource} className="category-image"/>
                </div>
            </a>
        );
};

export default categoryImage;