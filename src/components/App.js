import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart as Heart } from '@fortawesome/free-solid-svg-icons';
import {faHeart, faPaperPlane, faComment} from '@fortawesome/free-regular-svg-icons'
import Faker from 'faker';
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

let getRandom = () => Math.floor(Math.random() * 10) + 1

let getRandomUsers = () =>{
    let users;
    for (let i = 0; i < getRandom(); i++) {
        users[i] = {
            name: Faker.internet.userName(),
            image: Faker.image.image(),
            postContent: Faker.lorem.lines(4),
            comments:{
                name: Faker.internet.userName(),
                commentContent: Faker.lorem.lines(2)
            }
        }
    }
    return users;
}

const App = (props) => {
    return (
        <div className="App">
            {getRandomUsers().map(user => {
                <Post name={user.name} image={user.image} postContent={user.postContent} comments={user.comments}></Post>
            })}
        </div>
    )
}

export default App;