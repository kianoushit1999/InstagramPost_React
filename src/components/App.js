import React from 'react';
import Faker from 'faker';
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

let getRandom = () => Math.floor(Math.random() * 10) + 1

let getRandomComments = () => {
    let comments = []
    for (let i = 0; i < getRandom(); i++) {
        comments.push({
            name: Faker.internet.userName(),
            commentContent: Faker.lorem.lines(2)
        })
    }
    return comments;
}

let getRandomUsers = () => {
    let users = [];
    for (let i = 0; i < getRandom(); i++) {
        users[i] = {
            name: Faker.internet.userName(),
            image: Faker.image.image(),
            postContent: Faker.lorem.lines(4),
            comments: getRandomComments()
        }
    }
    return users;
}

const App = (props) => {
    console.log(getRandomUsers())
    return (
        <div className="App">
            {getRandomUsers().map(user => {
                return <Post name={user.name} image={user.image} postContent={user.postContent}
                             comments={user.comments}></Post>
            })}
        </div>
    )
}

export default App;