import React from "react";
import DownIcon from "images/down.svg";
import UpIcon from "images/up.svg";

import "./index.css";
interface Props {
    name: string;
    desc: string;
    isOpen: boolean;
    openToggle: Function;
    image: string;
}

export const MissionItem = ({
    name,
    desc,
    isOpen,
    openToggle,
    image,
}: Props) => {
    return (
        <div
            onClick={() => openToggle(!isOpen)}
            className="mission-item-wrapper"
            style={{
                background: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: isOpen ? "cover" : "350px 350px",
                borderRadius: isOpen ? "2%" : "5%",
            }}
        >
            <div className="mission-item-brick" />
            <p className="mission-item-text">{name}</p>
            <img
                src={isOpen ? UpIcon : DownIcon}
                className="mission-item-arrow"
                alt="detailForEachGoal"
            />
            {isOpen && <p className="mission-detail-text">{desc}</p>}
        </div>
    );
};
