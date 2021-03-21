import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, FormGroup, Col, Container, Row, Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FaIcon from './FaIcon';


class SongBookForm extends Component {
    isValidForm() {
        const { form } = this.props;

        return (form.title.trim().length > 0 && form.duration.trim().length > 0 && form.release_year.trim().length > 0 && form.album.trim().length > 0 && form.artist.trim().length > 0 && form.genre.trim().length > 0);
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
                    <Col sm="12">
                        <Card className="shadow">
                            <CardHeader tag="strong">Form</CardHeader>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit}>
                                    <FormGroup row>
                                        <Label for="title" sm="4">Song Title</Label>
                                        <Col sm="8">
                                            <Input type="text" id="title" name="title" value={form.title} onChange={(event) => handleInputChanges('title', event.target.value)} placeholder="Enter Song Title" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="duration" sm="4">Duration</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="duration" name="duration" value={form.duration} onChange={(event) => handleInputChanges('duration', event.target.value)} placeholder="Enter duration" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="release_year" sm="4">Release Year</Label>
                                        <Col sm="8">
                                            <Input type="select" id="release_year" name="release_year" value={form.release_year} onChange={(event) =>
                                                handleInputChanges('release_year', event.target.value)}>
                                                <option default >--select year--</option>
                                                {this.optionYear(1950, 2020)}
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="artist" sm="4">Artist</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="artist" name="artist" value={form.artist} onChange={(event) => handleInputChanges('artist', event.target.value)} placeholder="Enter artist name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="album" sm="4">Album</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="album" name="album" value={form.album} onChange={(event) => handleInputChanges('album', event.target.value)} placeholder="Enter album" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="genre" sm="4">Genre</Label>
                                        <Col sm="8">
                                            <Input type="textarea" id="genre" name="genre" value={form.genre} onChange={(event) => handleInputChanges('genre', event.target.value)} placeholder="Enter song genre" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <td>
                                            <Button type="submit" color="success" disabled={!this.isValidForm()} className="shadow" >
                                                <FaIcon icon="fas upload" /> Submit
                                            </Button>
                                        </td>
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

export default SongBookForm;