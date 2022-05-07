import React from 'react'
import { useEffect } from 'react';

function Genre(props) {
    let [isloader, setLoader] = React.useState(true);
    let [content, setContent] = React.useState([]);

    //*️⃣ Getting Clicked/selected Genre Here
    const handleGenre = (e) => {
        props.parentGenre(e.target.textContent);
        // console.log("My genre : " + e.target.textContent);
    }

    //*️⃣useEffect ke andar ek outer function use karna ha, uske andar async function daal do and call kar do 
    useEffect(function () {
        (async function () {
            let response = await fetch('https://react-backend101.herokuapp.com/genres');
            response = await response.json();
            setLoader(false);
            setContent(response);
        })()
    }, [])

    return (
        <div className='Genre'>
            <div className='border-2 w-40 text-center h-10 font-bold' onClick={handleGenre}>All Genre</div>
            {isloader == true ? <div className='font-bold'> Loading...</div> :
                content.genres.map(function (genre) {
                    return (
                        <div key={genre._id}
                            className='mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold' onClick={handleGenre} >{genre.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Genre