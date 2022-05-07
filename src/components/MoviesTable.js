import React from 'react';

function MoviesTable(props) {

    //****************Get Required things as props from dragged part -> parent(Movies)*********** */
    let { content, isloader, setContent, filteredContent} = props;
    //*********************************************************************************** */


    //*️⃣ Logic of delete functionality
    const handleDelete = (movieToBeDeleted) => {
        //1. Getting an array of movies(restOfTheMovies) after filtering deleted movie through ._id
        let restOfTheMovies = content.movies.filter((movie) => movie._id !== movieToBeDeleted);
        //2. Now copy the restOfTheMovies array into the new object
        let newObj = { movies: restOfTheMovies };
        setContent(newObj);
    }

    return (
        <div>
            {isloader == true ? <div className='font-bold'> Loading...</div> :
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='px-2'>#</th>
                            <th className='px-2'>Title</th>
                            <th className='px-2'>Genre</th>
                            <th className='px-2'>Stock</th>
                            <th className='px-2'>Rate</th>
                            <th className='px-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContent.map(function (movie, idx) {
                            return <tr key={movie._id}>
                                <td className="px-2 text-center">{idx + 1}</td>
                                <td className="px-2 text-center">{movie.title}</td>
                                <td className="px-2 text-center">{movie.genre.name}</td>
                                <td className="px-2 text-center">{movie.numberInStock}</td>
                                <td className="px-2 text-center">{movie.dailyRentalRate}</td>

                                <td><button className='bg-red-500 hover:bg-red-700 text-white 
                                    font-bold py-2 px-4 rounded' onClick={() => {
                                        handleDelete(movie._id);
                                    }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default MoviesTable