import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 60px 0;
    background-color: black;

    .criteria-heading {
        font-size: 68px;
        font-family: Helvetica;
        font-weight: bold;
        text-align: center;
        color: white;
    }

    .criteria-message {
        color: white;
        text-align: center;
        font-size: 18px;
        margin: 30px 0;
    }

    @media (max-width: 991px) {
        .criteria-heading {
            font-size: 48px;
        }

        .criteria-message {
            font-size: 18px;
        }
    }
`;
