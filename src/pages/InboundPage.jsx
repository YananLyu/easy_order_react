import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

export default function InboundPage() {
    let { id } = useParams();
    let history = useHistory();

    return (
        <div>
            <h2 className="text-center">{id}</h2>
        </div>
    )
}

