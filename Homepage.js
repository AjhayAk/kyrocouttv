import React, { useContext } from 'react';
import ShowsContext from '../context/Shows/showsContext'; 
import Search from '../components/Search'; 
import Listitem from '../components/Listitem'; 
 
const Homepage =() => { const showsContext = useContext(ShowsContext); const {loading, shows} = showsContext; return (
<div className="homepage">
    <Search/> {loading ? (
    <h2><center>Loading Please Wait...</center></h2>):(
    <div className='homepagelist'>
        {shows.map((item) => (
        <Listitem key={item.show.id} id={item.show.id} image={ item.show.image ? item.show.image.medium: "" } name={item.show.name} rating={item.show.rating.average ? item.show.rating.average : "No Rating Available" } /> ))}
    </div>

    )}
</div>
); }; export default Homepage;