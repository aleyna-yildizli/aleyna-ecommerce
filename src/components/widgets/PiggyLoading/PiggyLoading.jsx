import React from "react";
import "./style.css";

export default function PiggyLoading() {
  return (
    <div className="piggy-wrapper piggy-body">
      <div className="piggy-wrap">
        <div className="piggy">
          <div className="nose"></div>
          <div className="mouth"></div>
          <div className="ear"></div>
          <div className="tail"></div>
          <div className="eye"></div>
          <div className="hole"></div>
        </div>
      </div>
      <div className="coin-wrap">
        <div className="coin">$</div>
      </div>
      <div className="legs"></div>
      <div className="legs back"></div>
    </div>
  );
}
