
import React from 'react';
import { LoadingWithName } from '../Loading';
import { Inspiration } from './constants';
import { Header } from './Header';


export const Base = ({ openModal, closeModal, changeReadMode, likedNews, handleBack, children, Loading, showBackButton, readMode }) => {
    return (
        <div className={`layoutContainer ${readMode}`} id={"scroller"}>
            <LoadingWithName Loading={Loading} />
            <Header datatest-id="header" openModal={openModal} changeReadMode={changeReadMode} LikedNews={likedNews} />
            <div className="topStoriesContainer">
                {showBackButton &&
                    <button  datatest-id="backButton" className="moreButton" onClick={handleBack}>Back</button>
                }
            </div>
            {children}
            <div  datatest-id="modal" id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={closeModal} className="close">CLOSE &times;</span>
                    <div className="topStoriesContainer overFlowA">
                        <Inspiration />
                    </div>
                </div>
            </div>
        </div>
    )
}