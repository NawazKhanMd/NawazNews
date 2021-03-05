/* eslint-disable react/jsx-no-target-blank */

import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getANews, likeANews } from '../../ReduxFiles/actions';
import { Base } from './EachStory';

const TopStory = ({ code }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.GData.NewsData[code]);
    const getNews = codeFromBase => {
        dispatch(getANews(codeFromBase))
    }
    const likeNews = codeFromBase => {
        dispatch(likeANews(codeFromBase))
    }
    return (
        <Base code={code} data={data} getNews={getNews} likeNews={likeNews} />
    )
}

export default memo(TopStory);
