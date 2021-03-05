/* eslint-disable react/jsx-no-target-blank */

import React, { useEffect, useState } from 'react';
import moment from 'moment';

const allowedEmoji = '😊🙃🤪🤓🤯😴👻👽🤖👾🛀🦕🦖🐉🎭😣🙄😌😝😳😵😇🧐🥳😽🙀😿😾😺😸🐱‍🚀🐱‍🐉🐱‍💻';
const getIcon = (type) => {
    switch (type) {
        case "job":
            return "💼";
        case "story":
            return "🧾";
        case "comment":
            return "💬";
        case "pollopt":
        case "poll":
            return "🗳";
        default:
            return "🐱‍👤";
    }
}

export const Base = ({ code, data, getNews, likeNews }) => {
    const [show, setText] = useState(false)

    const [Co_ordinates, setCords] = useState({ x: 0, y: 0 });
    const handleSelect = () => {
        if (data.url === undefined) {
            setText(!show);
        }
    }
    useEffect(() => {
        getNews(code);
    }, [code]);

    const handleLike = (e) => {
        setCords({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
        setTimeout(() => {
            setCords({ x: 0, y: 0 });
        }, 1000);
        likeNews(code);
        // alert("x = "+e.nativeEvent.offsetX+" y= "+e.nativeEvent.offsetY);
    }

    return (
        <>
            <div className="story">
                <div
                    className={Co_ordinates.x === 0 ? "" : "moveDot"}
                    style={{
                        display: Co_ordinates.x === 0 ? "none" : "block",
                        top: `${Co_ordinates.y}px`,
                        left: `${Co_ordinates.x}px`,
                    }}></div>
                {data &&
                    <div className="actionContainer" onClick={handleLike}>
                        <div id="likeIcon"></div>
                        <small>Like</small>
                    </div>
                }
                {data &&
                    <>
                        <div className="dispFlx" onClick={handleSelect}>
                            <a target="_blank" href={data.url}>
                                <p>{getIcon(data.type)} : {data.title}</p>
                            </a>
                            <p><span>by: {data.by} {[...allowedEmoji][Math.floor(Math.random() * ([...allowedEmoji].length - 1))]}</span><span>{moment(Date(data.time)).format("MMM-DD")}</span></p>
                        </div>
                    </>
                }
                {!data &&
                    <div>Loading...</div>}
            </div>
            <div>
                {show && data && <p className="body" dangerouslySetInnerHTML={{ __html: data.text }} ></p>}
            </div>
        </>
    )
};
