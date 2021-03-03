
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopNews } from '../../ReduxFiles/actions';
import Base from './Home';

export const Home = () => {
    const TopNewsCodes = useSelector(state => state.GData.TopNewsCodes);
    const dispatch = useDispatch()
    const getNews = () => {
        dispatch(getTopNews())
    }
    return (
        <Base TopNewsCodes={TopNewsCodes} getNews={getNews} />
    )
}