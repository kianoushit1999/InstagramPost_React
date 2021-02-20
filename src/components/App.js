import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart as Heart } from '@fortawesome/free-solid-svg-icons';
import {faHeart, faPaperPlane, faComment} from '@fortawesome/free-regular-svg-icons'
import Faker from 'faker';
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = (props) => {
    return (
        <div className="App">
            <Post></Post>
        </div>
    )
}

export default App;