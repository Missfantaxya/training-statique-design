// == import npm
import React from 'react';

// == import
import './styles.scss';

// == composant
const CardName = (props) => (
  <div className="cardName">
     <h3 className="cardName__title">{props.cardTitle} </h3>
  </div>
);

// == export
export default CardName;
