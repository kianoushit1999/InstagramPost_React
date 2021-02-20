import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as Heart} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import Avatar from "react-avatar";

let getRandom = () => Math.floor(Math.random() * 10) + 1

let getRandomLikeDislike = () => {
    return getRandom() % 2 == 0 ? <span><FontAwesomeIcon icon={Heart} style={{color: "red"}}/></span>
        : <span><FontAwesomeIcon icon={faHeart}/></span>;
}

const Comment = (props) => {

    let username = props.username;
    let content = props.commentContent;

    return (
        <div className="pl-3">
            <span className="d-flex justify-content-start align-items-baseline">
                <span><Avatar name={username} size="12" textSizeRatio={0.05} round={true}/></span>
                <span className="pl-1">{username}</span>
            </span>
            <div className="d-flex justify-content-between" id="auto-height">
                <p className="pl-4">{content}</p>
                {getRandomLikeDislike()}
            </div>
            <span className="mb-4 pl-4" style={{color: "grey"}}><small>5h Reply</small></span>
        </div>
    )
}

export default Comment;
