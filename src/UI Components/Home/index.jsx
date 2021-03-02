
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../../ReduxFiles/actions';

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])
    return (
        <div>Hello</div>
    )
}