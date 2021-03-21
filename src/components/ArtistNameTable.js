import React, { Component } from 'react';
import { Button, Table, CardHeader } from 'reactstrap';
import FaIcon from './FaIcon';
import Card from 'reactstrap/lib/Card';

class ArtistNameTable extends Component {
    generateTableRows = () => {
        const { artists, handleEditButton, handleDeleteButton } = this.props;
        let rows = (
            <tr>
                <td colSpan="4" className="table-warning text-center">
                    <strong><em>No artist(s) yet.</em></strong>
                </td>
            </tr>
        );

        if (artists.length > 0) {
            rows = artists.map((artist, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{artist.name}</td>
                        <td>{artist.gender}</td>
                        <td>{artist.debut}</td>
                        <td>{artist.birthDate}</td>
                        <td>{artist.country}</td>
                        <td><Button type="button"
                            color="warning" size="sm"
                            className="shadow"
                            onClick={() => handleEditButton(artist.id)}
                        >Edit</Button></td>
                        <td><Button type="button"
                            color="danger" size="sm"
                            className="shadow"
                            onClick={() => handleDeleteButton(artist.id)
                            }>Delete</Button></td>
                    </tr>
                );
            });
        } return rows;
    }

    render() {
        const { artists } = this.props;
        return (
            <Card className="shadow">
                <CardHeader tag="strong">artists ({artists.length})</CardHeader>
                <Table striped hover responsive className="m-0">
                    <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th>artist Name</th>
                            <th>artist Gender</th>
                            <th>artist Debut</th>
                            <th>artist Birth Date</th>
                            <th>artist Country</th>
                            <th colSpan="2" width="10%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.generateTableRows(artists)}</tbody>
                </Table>
            </Card>
        )
    }
}

export default ArtistNameTable;