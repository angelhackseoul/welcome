import React, { useState } from "react";

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import "./index.css";
import AngelHackLogo from "images/angelhack_logo.png";

export const NavigationBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <section id="navbar">
            <Container>
                <Navbar color="transparent" expand="lg">
                    <NavbarBrand href="https://angelhackseoul.kr">
                        <img alt="AngelHack" src={AngelHackLogo} width={200} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem color="white">
                                <NavLink href="#how-to-attend">
                                    참여방법
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#missions">도전과제</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#prizes">상금</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#calendar">일정</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#criteria">심사기준</NavLink>
                            </NavItem>
                        </Nav>
                        {/* <UncontrolledDropdown>
							<DropdownToggle caret>한국어</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>한국어</DropdownItem>
								<DropdownItem>영어</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown> */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://forms.gle/gV58UM1VgUhCcjYv5"
                                )
                            }
                            className="navbar-register"
                        >
                            등록하기
                        </button>
                    </Collapse>
                </Navbar>
            </Container>
        </section>
    );
};
