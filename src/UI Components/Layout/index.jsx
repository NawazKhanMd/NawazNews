
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayTheseNewsCodes, getTopNews } from '../../ReduxFiles/actions';
import { AvailableReadModes, ResumeLink } from './constants';
import { Base } from './layout';


export const Layout = ({ children }) => {
    const dispatch = useDispatch();

    const LikedNewsCodes = useSelector(state => state.GData.LkedNewsCodes)
    const Loading = useSelector(state => state.GData.loading)

    const [showBackButton, setBackShowButton] = useState(false);
    const [readMode, setReadMode] = useState(AvailableReadModes[0]);

    const openModal = (type) => {
        switch (type) {
            case "AboutUS":
                window.open(ResumeLink, "_blank");
                break;
            default:
                const modal = document.getElementById("myModal");
                modal.style.display = "block";
                break;
        }
    }

    const closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    const changeReadMode = () => {
        const mode = AvailableReadModes[Math.floor(Math.random() * (AvailableReadModes.length))]
        setReadMode(mode);
    }

    const likedNews = () => {
        if (LikedNewsCodes.length > 0) {
            dispatch(displayTheseNewsCodes(LikedNewsCodes))
            setBackShowButton(true);
        }
    }

    const handleBack = () => {
        dispatch(getTopNews());
        setBackShowButton(false);
    }
    return (
        <Base
            openModal={openModal}
            closeModal={closeModal}
            changeReadMode={changeReadMode}
            likedNews={likedNews}
            handleBack={handleBack}
            children={children}
            Loading={Loading}
            showBackButton={showBackButton}
            readMode={readMode}
        />
    )
}