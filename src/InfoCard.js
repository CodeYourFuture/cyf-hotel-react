import React from 'react';

function InfoCard({img, title, descr, link}) {
    return (
        <div className="card">
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{descr}</p>
            </div>
            <div className="card-footer"><a href={link} className="btn btn-outline-primary">More Information</a></div>
        </div>
    );
}

export default InfoCard;