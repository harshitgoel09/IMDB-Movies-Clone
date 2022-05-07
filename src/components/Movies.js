import React from 'react'
import { useEffect } from 'react';
import InputBox from './InputBox'
import Pagination from './Pagination'
import MoviesTable from './MoviesTable'

function Movies(props) {
    let [searchText, setSearchText] = React.useState("");
    let [movieCount, setMovieCount] = React.useState(4);

    //*️⃣Get Props Here
    let { genreSelected, currPage, setCurrPage } = props;



    //*********************This Part is Dragged from movies table (PART 1)************************** */
    let [isloader, setLoader] = React.useState(true);
    let [content, setContent] = React.useState([]);


    //useEffect -> will run only one time after first execution of return statement 
    //*️⃣useEffect ke andar ek outer function use karna ha, uske andar async function daal do and call kar do 
    useEffect(function () {
        (async function () {
            // Fetch : is a inbuilt function of browser that makes the request to get data -> promise based
            let response = await fetch('https://react-backend101.herokuapp.com/movies');
            response = await response.json();
            setLoader(false);
            setContent(response);
        })()
    }, [])

    // Note: Why ? -> kyunki agar parent ki state change hogi toh components bhi fir se render hongey and hume bhaut saari cheeje moviesTable vaali pagination me bhi chaye thi.. esliye instead of passing props from moviesTable to movies to pagination, we did a small change-> humne moviesTable me se saari cheeje parent me shift kar di.. esliye ab parent ki state change hogi or hum jis compopnents ko jo chaye vo props ke through pass kar denge.
    //*********************************************************************************** */



    // *********************This part is dragged from MoviesTable (PART 2)************************* */
    let filteredContent = [];
    let totalMoviesAfterToggling = []; //Toggle: Genre, Moives Count or search text is changed then how many movies remained will get in this array

    if (content.movies) {
        // Put initially all movies into filtered array
        filteredContent = content.movies;


        //*️⃣Logic of Search Functionality
        if (searchText != "") {
            filteredContent = content.movies.filter((movie) => {

                // Convert serached text and movie title in lower case
                let lowerCaseTitle = movie.title.toLowerCase();
                let lowerCaseSearchText = searchText.toLowerCase();

                return lowerCaseTitle.includes(lowerCaseSearchText);
            });
        }

        //*️⃣Logic of Genre Functionality
        if (genreSelected !== "") {

            filteredContent = filteredContent.filter(function (movie) {
                return movie.genre.name.trim() == genreSelected.trim();
            })

        }

        totalMoviesAfterToggling = filteredContent;

        //*️⃣Logic of Count Functionality and Pagination
        let startIdx = (currPage - 1) * movieCount;
        let endIdx = startIdx + movieCount;
        filteredContent = filteredContent.slice(startIdx, endIdx);

    }
    //*************************************************************************************** */



    const parentSearchText = (text) => {
        setSearchText(text);
        setCurrPage(1); //*️⃣ To handle the pagination during searching text: jab hum kuch search karenge toh automatically vo hume page 1 pe le ayega.
    }

    const parentMovieCount = (count) => {
        setMovieCount(count);
        setCurrPage(1);//*️⃣ To handle the pagination during Toggling count: jab hum count change karenge toh automatically vo hume page 1 pe le ayega.
    }

    return (
        <>
            <div>
                <InputBox parentSearchText={parentSearchText} parentMovieCount={parentMovieCount}></InputBox>

                <MoviesTable content={content} isloader={isloader} setContent={setContent} filteredContent={filteredContent}></MoviesTable>

                <Pagination movieCount={movieCount} currPage={currPage} setCurrPage={setCurrPage} totalMoviesAfterToggling={totalMoviesAfterToggling}></Pagination>
            </div>
        </>
    )
}

export default Movies