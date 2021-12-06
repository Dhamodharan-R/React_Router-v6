import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Posts() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Posts page</h1>
            <ul>
                <li><Link to={`/posts/1`}>1</Link></li>
                <li><Link to={`/posts/2`}>2</Link></li>
                <li><Link to={`/posts/3`} >3</Link></li>
                <li><Link to={`/posts/4`}>4</Link></li>

                
            </ul>
    <button
       onClick={()=>{
       navigate(-1)
       }}
    >Goback</button><br/>
    <button
        onClick={()=>{
        navigate(1)
        }}
    >Goforward</button>
        </div>
    )
};

export default Posts;
