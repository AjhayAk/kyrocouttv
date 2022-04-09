import React from 'react';
import { useEffect, useContext } from 'react';
import ShowsContext from '../context/Shows/showsContext';
const Singlepage = ({match}) => {

    const {getSingleShow, singleShow, loading } = useContext(ShowsContext);
    useEffect(() => {
        getSingleShow(match.params.id);
        //eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
        if (text === null || text ===""){
        return false;
        }
        else{
            text=text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };
  return (
    <>
        {loading ? (<h2><center>Loading Please Wait...</center></h2>
        ) : (
            <div className='singleshow'>
                <img src={singleShow.image?singleShow.image.medium:""} alt={singleShow.name}/>
                <div className='singleshowinfo'><h1>{singleShow.name}</h1>
                {singleShow.genres && singleShow.genres.map(genre => (
                    <span key={genre} className="singleshowgenre">{genre}</span>
                ))}
                <p>
                <strong>Status:</strong> {singleShow.status && singleShow.status}
                </p>
                <p>
                <strong>Rating:</strong> {singleShow.rating? singleShow.rating.average : "No Rating"}
                </p>
                <p>
                <strong>Official Site:</strong> {singleShow.officialsite? (<a href={singleShow.officialsite} 
                target="_blank" rel="noreferrer">{singleShow.officialsite}</a>) : "No official site"}
                </p>
                <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
                </div>
            </div>
        )}
    </>
    );
};

export default Singlepage;
