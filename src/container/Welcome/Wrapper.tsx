import styled from 'styled-components';

export const Wrapper = styled.div`

:root {
    --black: #222222;
    --white: #ffffff;
}

body {
    font-family: Helvetica, sans-serif;
    font-size: 18px;
}

/* Defines typography */

h1 {
    font-size: 68px;
    line height: 72px;
    font-weight: bold;
}

h2 {
    font-size: 42px;
    line-height: 48px;
    font-weight: bold;
}

h3 {
    font-size: 32px;
    line-height: 48px;
    font-weight: bold;
}

h4 { 
    font-size: 26px;
    line-height: 20px;
    font-weight: bold;
}

.highlight1 { 
    background-color:#FAFF00;
}

.highlight2 {
    background-color: #BE1621;
}

/* navbar */

nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 24px;
    color: var(--white);
    background-color: var(--black);
}

.desktop-headerright a{
    color: var(--white);
    text-decoration: none;
}

.logo-img {
    width: 200px;
    height: 40px;
    object-fit: contain;
}

.desktop-headerright {
    display: flex;
    color: var(--white);
}

@media (min-width: 375px) {
    .mobile-headerright {
        display: none;
    }
}

@media (max-width: 375px) {
    .desktop-headerright {
        display: none;
    }

    .headerleft > a {
        display: none;
    }
}

/* Two-columned hackathon description */

.two-columns {
    display: flex;
}

.left-column {
    text-align: center;
    padding: 88px 80px 88px 160px;
}

.right-column {
    text-align: center;
    color: var(--white);
    background-color: var(--black);
    padding: 88px 160px 88px 80px;
}

@media (max-width: 600px) {
    .two-columns {
        flex-wrap: wrap;
    }
}

/* Hackathon schedule section */

.schedule {
    text-align: center;
    justify-content: center;
}

/* Judges and Mentors sections with 8 boxes for placeholders */

.judges {
    text-align: center;
    justify-content: center;
}

.mentors {
    text-align: center;
    justify-content: center;
}

.eight-boxes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.judge-pic {
    width: 256px;
    height: 256px;
    margin: 32px;
    background-image: url(judge.png);
    object-fit: contain;
} 

.mentor-pic {
    width: 256px;
    height: 256px;
    margin: 32px;
    background-image: url(judge.png);
    object-fit: contain;
} 

/* Footer */

footer {
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: var(--white);
    background-color: var(--black);
}`;