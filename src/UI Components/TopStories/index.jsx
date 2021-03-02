
import React from 'react';
import { TopStory } from './TopStory';
export const TopStories = ({TopNewsCodes}) => {
    return (
        <div>{TopNewsCodes.map((Story, index)=><TopStory code={Story} key={index}/>)}</div>
    )
}