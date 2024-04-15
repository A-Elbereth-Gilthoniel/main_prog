import React from "react";
import {useParams} from 'react-router-dom';

function PostPage() {
    let params = useParams()
    return (
        <div>
            Вот и я!
        </div>
    )
}

export default PostPage
