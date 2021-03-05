import React from 'react';
export const Header = ({openModal, changeReadMode, LikedNews}) => {
    return (
        <div className="headerContainer">
            <div id="likedNews">
                <button className="moreButton" onClick={changeReadMode} >Toggle Read Modes</button>
                <button className="moreButton" onClick={LikedNews} >Liked News</button>
                <button className="moreButton" onClick={() => openModal("AboutUS")}>About</button>
                <button className="moreButton" onClick={() => openModal("Inspiration")}>Inspiration</button>
            </div>
            <div id="logo"></div>
        </div>
    )
}