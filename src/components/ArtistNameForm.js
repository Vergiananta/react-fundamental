import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, FormGroup, Col, Container, Row, Form, Input } from 'reactstrap';

class ArtistNameForm extends Component {
    isValidForm() {
        const { form } = this.props;

        return (form.name.trim().length > 0 && form.gender.trim().length > 0 && form.debut.trim().length > 0 && form.birthDate.trim().length > 0 && form.country.trim().length > 0);
    }

    optionYear(x, y) {
        let year = [];
        for (let i = x; i <= y; i++) {
            year.push(<option key={i} value={year[i]}>{i}</option>);
        }
        return year;
    }

    render() {
        const { form, handleFormSubmit, handleInputChanges } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col sm="20">
                        <Card className="shadow">
                            <CardHeader tag="strong">Form</CardHeader>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit}>
                                    <FormGroup row>
                                        <Label for="name" sm="4">Artist Name</Label>
                                        <Col sm="8">
                                            <Input type="text" id="name" name="name" value={form.name} onChange={(event) => handleInputChanges('name', event.target.value)} placeholder="Enter artist name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="gender" sm="4">Gender</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="gender" name="gender" value={form.gender} onChange={(event) => handleInputChanges('gender', event.target.value)} placeholder="Enter gender" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="debut" sm="4">Debut Year</Label>
                                        <Col sm="8">
                                            <Input type="select" id="debut" name="debut" value={form.debut} onChange={(event) =>
                                                handleInputChanges('debut', event.target.value)}>
                                                <option default >--select year--</option>
                                                {this.optionYear(1950, 2020)}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="birthDate" sm="4">Birth Date</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="birthDate" name="birthDate" value={form.birthDate} onChange={(event) => handleInputChanges('birthDate', event.target.value)} placeholder="Enter Birth Date" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="country" sm="4">Country</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="country" name="country" value={form.country} onChange={(event) => handleInputChanges('country', event.target.value)} placeholder="Enter country" />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ArtistNameForm;