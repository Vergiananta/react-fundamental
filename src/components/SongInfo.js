import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader } from 'reactstrap';

export default function SongInfo(props) {
    const { id } = useParams
    const { match } = props;

    return (
        <Fragment>
            <Card>
                <CardHeader>Song Info {match.params.id}</CardHeader>
            </Card>
        </Fragment>
    )
}