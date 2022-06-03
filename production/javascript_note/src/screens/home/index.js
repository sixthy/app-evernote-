import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/apresentação.png';
import Header from "../../components/header";
import { Column, Section, Title, Container } from 'rbx';
import "../../styles/home.scss";
import { Link } from 'react-router-dom';

const HomeScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Create notes easily and access when you wants on the cloud
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            Note is a simple note taking app that allows you to create notes and save them on the cloud.
                        </Title>
                        <a className="button is-outlined is-white is-large">
                            <strong>Get Started</strong>
                        </a>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={PresentationImage} />
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default HomeScreen;