import React, { Fragment } from 'react';
import Header from '../../../components/header';
import { Column, Container, Section, Title, Card } from 'rbx';
import logoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import RegisterForm from '../../../components/auth/register_form';

const RegisterScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={logoImage} alt="Logo" />
                                        </Column>
                                    </Column.Group>
                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Create your account
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                    <RegisterForm />
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default RegisterScreen;