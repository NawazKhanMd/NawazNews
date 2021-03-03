
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingWithName } from '../Loading';
import { Header } from './Header';
export const Layout = ({ children }) => {
    const Loading = useSelector(state => state.GData.loading)
    return (
        <div className="layoutContainer"  id={"scroller"}>
            {Loading && <LoadingWithName />}
            <Header />
            {children}
        </div>
    )
}