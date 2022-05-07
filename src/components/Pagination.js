import React from 'react'

function Pagination(props) {
    //****************Get Required things as props from dragged part -> parent*********** */
    let { totalMoviesAfterToggling, movieCount, currPage, setCurrPage } = props;
    //*********************************************************************************** */

    let requiredPagesArr = [];
    if (totalMoviesAfterToggling) {
        let numberOfPages = Math.ceil(totalMoviesAfterToggling.length / movieCount);

        for (let i = 1; i <= numberOfPages; i++) {
            requiredPagesArr.push(i);
        }
    }

    return (
        // <div>
        //     <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded'>1</button>
        //     <button className='hover:bg-blue-700 border-2 py-2 px-3 rounded'>2</button>
        //     <button className='hover:bg-blue-700 border-2 py-2 px-3 rounded'>3</button>
        // </div>

        <>
            {requiredPagesArr.map(function (pageNumber) {
                let cssOfPageButton = pageNumber == currPage ? 'hover:bg-blue-700 border-2 py-2 px-3 rounded bg-blue-500 text-white' : 'hover:bg-blue-700 border-2 py-2 px-3 rounded';
                return (<button key={pageNumber} className={cssOfPageButton} onClick={() => { setCurrPage(pageNumber) }} > {pageNumber}</button>)
            })}
        </>
    )
}

export default Pagination