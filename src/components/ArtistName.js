import React, { Component } from 'react';
import Artist from './logo-musisi.svg';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ArtistNameForm from './ArtistNameForm';
import ArtistNameTable from './ArtistNameTable'

class ArtistName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                id: '',
                name: '',
                gender: '',
                debut: '',
                birthDate: '',
                country: '',
            },
            artists: [],
        };
    }

    handleInputChanges = (inputName, inputValue) => {
        const { form } = { ...this.state };
        form[inputName] = inputValue;

        this.setState({ form });
    }

    handleFormSubmit = (event) => { //untuk edit
        event.preventDefault();

        const { form, artists } = { ...this.state };

        if (form.id > 0) {
            let newartists = artists.map((artist) => {
                if (artist.id === form.id) {
                    return form;
                }

                return artist;
            });

            this.setState({ artists: newartists });
        }
        else {
            form.id = artists.length + 1;
            this.setState({ artists: artists.concat({ ...form }) });
        }

        this.resetForm();
    }

    handleEditButton = (id) => {
        const { artists } = { ...this.state };
        const artist = artists.find((artist) => artist.id === id);

        this.setState({ form: { ...artist } });
    }

    handleDeleteButton = (id) => {
        const { artists } = { ...this.state };

        this.setState({ artists: artists.filter((artist) => artist.id !== id) });
    }


    resetForm() { //untuk menghilangkan tulisan setelah disubmit
        this.setState({ form: { id: '', title: '', duration: '', release_year: '', album: '', artist: '', genre: '' } });
    }





    render() {
        const { form, artists } = this.state;

        return (
            <Container>
                <Router>
                    <Row>
                        <Col sm="8">
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to="/artist-name">Artist Book</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to="/artist-name/form">Artist Book Form</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to="/artist-name/table">Artist Book Table</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm="8">
                            <Switch>
                                <Route exact path="/artist-name" >
                                    <Home />
                                </Route>
                                <Route path="/artist-name/form">
                                    <ArtistNameForm form={form} handleFormSubmit={this.handleFormSubmit} handleInputChanges={this.handleInputChanges} />
                                </Route>
                                <Route path="/artist-name/table">
                                    <ArtistNameTable artists={artists} handleEditButton={this.handleEditButton} handleDeleteButton={this.handleDeleteButton} />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Container>
        )
    }
}

function Home() {
    return <img src={Artist} alt="Spotipi" width="1040" height="650"></img>
}

export default ArtistName;