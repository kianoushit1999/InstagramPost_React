import React from "react";
import Faker from "faker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as Heart} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import Avatar from "react-avatar";


const Comment = () => {

    let username = Faker.internet.userName();

    let getRandom = () => Math.floor(Math.random() * 10) + 1

    let getRandomLikeDislike = () => {
        return getRandom() % 2 == 0 ? <span><FontAwesomeIcon icon={Heart} style={{color: "red"}}/></span>
            : <span><FontAwesomeIcon icon={faHeart}/></span>;
    }
    return (
        <div className="decrease-fontsize">
            <div className="pl-1" style={{fontWeight: 'bold'}}>Comments</div>
            <div className="pl-3">
                                        <span className="d-flex justify-content-start align-items-baseline">
                                            <span><Avatar name={username} size="12" textSizeRatio={0.05} round={true}/></span>
                                            <span className="pl-1">{username}</span>
                                        </span>
                <div className="d-flex justify-content-between" id="auto-height">
                    <p className="pl-4">{Faker.lorem.lines(2)}</p>
                    {getRandomLikeDislike()}
                </div>
                <span className="mb-4 pl-4" style={{color: "grey"}}><small>5h Reply</small></span>
            </div>
            <div className="pl-3">
                                        <span className="d-flex justify-content-start align-items-baseline">
                                            <span><Avatar name={username} size="12" textSizeRatio={0.05} round={true}/></span>
                                            <span className="pl-1">{username}</span>
                                        </span>
                <div className="d-flex justify-content-between" id="auto-height">
                    <p className="pl-4">{Faker.lorem.lines(1)}</p>
                    {getRandomLikeDislike()}
                </div>
                <span className="mb-4 pl-4" style={{color: "grey"}}><small>5h Reply</small></span>
            </div>
        </div>
    )
}

export default Comment;
