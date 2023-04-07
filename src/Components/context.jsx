import React from "react";

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "24rem" }}>
      <div
        className="card-header"
        style={{ fontSize: "large", fontWeight: "bolder" }}
      >
        {props.header}
      </div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        <div style={{ textAlign: "center" }}>
          {props.img && (
            <img src={props.img} alt="responsive image" className="img-fluid" />
          )}
        </div>

        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export default Card;
