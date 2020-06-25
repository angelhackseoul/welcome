import React from "react";
import { Wrapper } from "./Wrapper";

export const PrizeItem = ({ image, pop }: any) => {
    return (
        <Wrapper>
            <img
                className={pop ? "prize-pop" : ""}
                src={image}
                alt={`Prize Item`}
            />
        </Wrapper>
    );
};
