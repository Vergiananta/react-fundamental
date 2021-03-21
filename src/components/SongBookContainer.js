import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import SongBookForm from './SongBookForm';
import SongBookTable from './SongBookTable';
import Spotify from './Spotify.png';
import SongInfo from './SongInfo';


// const minYear = 2000;
// const maxYear = 2020;

class GuestBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                id: '',
                title: '',
                duration: '',
                release_year: '',
                genre: '',
                album: '',
                artist: '',
            },
            songs: [],
        };
    }

    handleInputChanges = (inputName, inputValue) => {
        const { form } = { ...this.state };
        form[inputName] = inputValue;

        this.setState({ form });
    }

    handleFormSubmit = (event) => { //untuk edit
        event.preventDefault();

        const { form, songs } = { ...this.state };

        if (form.id > 0) {
            let newSongs = songs.map((song) => {
                if (song.id === form.id) {
                    return form;
                }

                return song;
            });

            this.setState({ songs: newSongs });
        }
        else {
            form.id = songs.length + 1;
            this.setState({ songs: songs.concat({ ...form }) });
        }

        this.resetForm();
    }

    handleEditButton = (id) => {
        const { songs } = { ...this.state };
        const song = songs.find((song) => song.id === id);

        this.setState({ form: { ...song } });
    }

    handleDeleteButton = (id) => {
        const { songs } = { ...this.state };

        this.setState({ songs: songs.filter((song) => song.id !== id) });
    }


    resetForm() { //untuk menghilangkan tulisan setelah disubmit
        this.setState({ form: { id: '', title: '', duration: '', release_year: '', album: '', artist: '', genre: '' } });
    }





    render() {
        const { form, songs } = this.state;

        return (
            <Container>
                <Router>
                    <Row>
                        <Col sm="3">
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to="/Spotify">Song</Link>
                                </ListGroupItem>
                            </ListGroup>
                            {/* <ListGroup>
                                <ListGroupItem>
                                    <Link to="/song-book/form">Song Book Form</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem>
                                    <Link to="/song-book/table">Song Book Table</Link>
                                </ListGroupItem>
                            </ListGroup> */}
                        </Col>
                        <Col sm="8">
                            <Switch>
                                <Route exact path="/Spotify" >
                                    <SongBookForm form={form} handleFormSubmit={this.handleFormSubmit} handleInputChanges={this.handleInputChanges} />
                                    <SongBookTable songs={songs} handleEditButton={this.handleEditButton} handleDeleteButton={this.handleDeleteButton} />
                                </Route>
                            </Switch>
                            <Switch>
                                <Route path="/Spotify/:id" component={SongInfo} />} />
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Container>
        );
    }
}

function Home() {
    return <img src={Spotify} alt="Spotipi" width="1040" height="650"></img>
}

export default GuestBook;