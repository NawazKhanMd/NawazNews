
import React, { memo, useEffect } from 'react';
import TopStories from '../TopStories';

const Base = ({ TopNewsCodes, getNews }) => {
    useEffect(() => {
        getNews();
    }, [])
    return (
        <TopStories TopNewsCodes={TopNewsCodes} />
    )
}

export default memo(Base);