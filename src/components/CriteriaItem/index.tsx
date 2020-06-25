import React from "react";
import { Wrapper } from "./Wrapper";

interface Props {
    title: string;
    description: string[];
    img: any;
}

export const CriteriaItem = ({ title, description, img }: Props) => {
    return (
        <Wrapper>
            <img src={img} alt="Criteria_image" className="img" />
            {/* <div>space for img</div> */}
            <div className="holder">
                <p className="title">{title}</p>
                <p className="score">(0-5점)</p>
            </div>
            <hr className="seperator" />
            <ul>
                {description.map((e) => (
                    <li>{e}</li>
                ))}
            </ul>
        </Wrapper>
    );
};
