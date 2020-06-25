import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 4px;
    background-color: #c4c4c4;

    img {
        width: 100%;
        border-radius: 4px;
        background-color: #c4c4c4;
    }

    @media (max-width: 991px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        margin-bottom: 30px;
    }
`;
