import React, { useState } from 'react'

function Movie({items}) {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false)
    const [currentImages, setCurrentImages] = React.useState('');

    const getOpenImages = (imagesSrc) => {
        setCurrentImages(imagesSrc);
        setModal(true);
    };
    
    
    const filteredMovie = items.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <>
        <input
            placeholder='Search...' 
            className='mt-5' 
            type="text" 
            value={filteredMovie.title} 
            onChange={(event => setSearch(event.target.value))} 
        />
        <div className='card'>
            <div className={modal ? 'model-open' : 'model'}>
                <img className='modal__images' src={currentImages} alt="" />
                <button className="model-close" onClick={() => setModal(false)}>
                    &times;
                </button>
            </div>
                {filteredMovie.length ? <>
                    {filteredMovie && filteredMovie.map(item => (
                        <div key={item.id} className='movie card'>
                            <div className="movie__inner">
                                <div className="gallery">
                                    <div className="prics">
                                        <img onClick={() => getOpenImages(item.images)} className='movie__images' src={item.images} alt="" />
                                    </div>
                                </div>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </> : <p>No Results</p>}
            </div>
        </>
    )
}

export default Movie
