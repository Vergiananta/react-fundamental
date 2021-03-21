import React, { Component } from 'react';
import { Button, Table, CardHeader } from 'reactstrap';
import FaIcon from './FaIcon';
import Card from 'reactstrap/lib/Card';
import { Link } from 'react-router-dom';

class SongBookTable extends Component {
    generateTableRows = () => {
        const { songs, handleEditButton, handleDeleteButton } = this.props;
        let rows = (
            <tr>
                <td colSpan="10" className="table-warning text-center">
                    <strong><em>No Song(s) yet.</em></strong>
                </td>
            </tr>
        );

        if (songs.length > 0) {
            rows = songs.map((song, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{song.title}</td>
                        <td>{song.duration}</td>
                        <td>{song.release_year}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>
                            <Link to={`/Spotify/${song.id}`}>
                                <Button type="button"
                                    color="info" size="sm"
                                    className="shadow"
                                >Info</Button></Link>
                        </td>
                        <td>
                            <Button type="button"
                                color="warning" size="sm"
                                className="shadow"
                                onClick={() => handleEditButton(song.id)}
                            >Edit <FaIcon icon="fas upload" /></Button>
                        </td>
                        <td><Button type="button"
                            color="danger" size="sm"
                            className="shadow"
                            onClick={() => handleDeleteButton(song.id)
                            }>Delete</Button></td>

                    </tr>

                );
            });
        } return rows;
    }

    render() {
        const { songs } = this.props;
        return (
            <Card className="shadow">
                <CardHeader tag="strong">Songs ({songs.length})</CardHeader>
                <Table striped hover responsive className="m-0">
                    <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th>Song Title</th>
                            <th>Song Duration</th>
                            <th>Song Release Year</th>
                            <th>Song Artist</th>
                            <th>Song Genre</th>
                            <th>Song Album</th>
                            <th colSpan="2" width="10%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.generateTableRows(songs)}</tbody>
                </Table>

            </Card>


        )
    }
}

export default SongBookTable;