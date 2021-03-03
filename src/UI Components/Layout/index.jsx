
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingWithName } from '../Loading';
export const Layout = ({ children }) => {
    const Loading = useSelector(state => state.GData.loading)
    return (
        <div className="layoutContainer">
            {Loading && <LoadingWithName /> }
            {children}
        </div>
    )
}