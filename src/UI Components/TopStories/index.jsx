
import React from 'react';
import { memo } from 'react';
import { ErrorBoundary } from './ErroBoundry';
import TopStory from './TopStory';
const TopStories = ({ TopNewsCodes }) => {
    const RowCount = 25;
    const [page, setPage] = React.useState(1);
    const paginate = function (array, index, size) {
        // transform values
        index = Math.abs(parseInt(index));
        index = index > 0 ? index - 1 : index;
        size = parseInt(size);
        size = size < 1 ? 1 : size;

        // filter
        return [...(array.filter((value, n) => {
            return (n >= (index * size)) && (n < ((index + 1) * size))
        }))]
    }
    const handlePagination = (number) => {
        setPage(page + number);
        try {
            document.getElementById("scroller").scroll(0, 0)
        } catch (error) {
            console.log("Scrolll Not supported!")
        }
    }
    return (
        <>
            <div className="topStoriesContainer">
                {paginate(TopNewsCodes, page, RowCount).map((Story, index) =>
                    <ErrorBoundary key={index}><TopStory code={Story} /></ErrorBoundary>)
                }
            </div>
            <div className="centerAlign">
                {page > 1 &&
                    <button className="moreButton" onClick={() => handlePagination(-1)}>Prev</button>
                }
                {Math.abs(TopNewsCodes / RowCount) !== page &&
                    <button className="moreButton" onClick={() => handlePagination(1)}>Next</button>
                }
            </div>
        </>
    )
};
export default memo(TopStories);
