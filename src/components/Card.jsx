import React from "react";

export const Card = (props) => {
  const upperCase = props.item.location.toUpperCase();

  return (
    <div className="card-container">
      <div className="img-container">
        <img className="img-size" src={props.item.imageUrl} alt="" />
      </div>
      <div className="info-container">
        <div className="loc-info">
          <img className="loc-img" src="/src/images/location.com.png" alt="" />
          <h4 className="location">{upperCase}</h4>
          <a href={props.item.googleMapsUrl}>View on Google Maps!</a>
        </div>
        <h3 className="card-title">{props.item.title}</h3>
        <div className="card-date">
          <p>-- From {props.item.startDate} --</p>
          <p className="end"> To {props.item.endDate} --</p>
        </div>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
};
