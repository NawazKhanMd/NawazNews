
import React from 'react';
export const TopStory = ({code, key}) => {
    return (
        <div key={key} >{JSON.stringify(code)} , </div>
    )
}