import React from "react";
import DownIcon from "images/Down.svg";

import "./index.css";

export const MissionItem = ({ name }: any) => {
    return (
        <div className="mission-item-wrapper">
            <div className="mission-item-brick" />
            <p className="mission-item-text">{name}</p>
            <img
                src={DownIcon}
                className="mission-item-down"
                alt="detailForEachGoal"
            />
        </div>
    );
};
