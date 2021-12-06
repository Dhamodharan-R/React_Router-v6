import React from 'react'
import { useLocation, useParams } from 'react-router'

function Postslist() {

    const params = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <p>the id is {params.cid} </p>
            <p>the query is {location.search}</p>
        </div>
    )
}

export default Postslist;
