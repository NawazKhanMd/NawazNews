
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopNews } from '../../ReduxFiles/actions';

export const Home = () => {
    const dispatch = useDispatch()
    const TopNewsCodes = useSelector(state=> state.GData.TopNewsCodes)
    useEffect(() => {
        dispatch(getTopNews());
    }, [dispatch])
    return (
        <div>{JSON.stringify(TopNewsCodes)}</div>
    )
}