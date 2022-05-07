import React from 'react'
import Genre from './Genre'
import Movies from './Movies'

function Main() {

    let [genreSelected, setGenre] = React.useState("");

    // *********************This part is dragged from Movies***********************
    let [currPage, setCurrPage] = React.useState(1);

    // NOTE: Becoz we are needed setCurrPage and CurrPage when Genre is changed(setGenre) and in Movies.js Both.
    
    //****************************************************************************** */

    const parentGenre = (genre) => {
        // *️⃣Logic of All Genre Functionality
        if (genre == "All Genre") {
            setGenre("");
        } else {
            setGenre(genre);
        }
        setCurrPage(1);//*️⃣ To handle the pagination during Toggling Genre: jab hum Genre change karenge toh automatically vo hume page 1 pe le ayega.
    }

    return (
        <>
            <div className='flex'>
                <Genre parentGenre={parentGenre}></Genre>
                <Movies genreSelected={genreSelected} currPage={currPage} setCurrPage={setCurrPage}></Movies>
            </div>
        </>
    )
}

export default Main