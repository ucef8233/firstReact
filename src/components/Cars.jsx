import React from "react";
const Car = ({ children, color = "Néant" }) => {
  ///props.children pour recuperer la valeur passé a <car> </car>
  if (children) {
    return (
      <div className="Car">
        <p>Marque : {children}</p>
        <p>Couleur :{color} </p>
      </div>
    );
  } else {
    return (
      <div className="Car">
        <p>pas de data</p>
      </div>
    );
  }
};
export default Car;

/// pour modifier les info on utilise des function avec parametre props ou en passent les nouveau param dirrectement
