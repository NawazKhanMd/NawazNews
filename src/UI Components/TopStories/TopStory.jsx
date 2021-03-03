/* eslint-disable react/jsx-no-target-blank */

import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getANews } from '../../ReduxFiles/actions';

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

export const Base = ({ code, data, getNews }) => {
    const [show, setText] = useState(false)
    const handleSelect = () => {
        if (data.url === undefined) {
            setText(!show);
        }
    }
    useEffect(() => {
        getNews(code);
    }, [code]);

    return (
        <div className="story">
            {data &&
                <>
                    <div className="dispFlx" onClick={handleSelect}>
                        <a target="_blank" href={data.url}>
                            <p>{getIcon(data.type)} : {data.title}</p>
                        </a>
                        <p><span>by: {data.by} {[...allowedEmoji][Math.floor(Math.random() * ([...allowedEmoji].length - 1))]}</span><span>{moment(Date(data.time)).format("MMM-DD")}</span></p>
                    </div>
                    {show && data && <p className="body" dangerouslySetInnerHTML={{ __html: data.text }} ></p>}
                </>
            }
            {!data &&
                <div>Loading</div>}
        </div>
    )
}


const TopStory = ({ code }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.GData.NewsData[code]);
    const getNews = codeFromBase => {
        dispatch(getANews(codeFromBase))
    }
    return (
        <Base code={code} data={data} getNews={getNews} />
    )
}

export default memo(TopStory);
