import React from 'react';
import { useState, useContext } from 'react';
import ShowsContext from '../context/Shows/showsContext';
import AlertsContext from '../context/Alerts/alertsContext';
import Alert from './Alert';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchShows } = useContext(ShowsContext);

    const {alert, setAlert } = useContext(AlertsContext)

    const onSearchHandler = (e) => {
        e.preventDefault();

        if(searchTerm === "")
        {
            setAlert("Please Enter something", "danger");
        }else{
            searchShows(searchTerm);
        }
};
    return (
        <div className="searchbar">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<center>
        {alert ? <Alert message={alert.message} type={alert.type}/>:null}
        <form className="searchbarform">
            <input type="text" placeholder="Welcome, Watch a TV show :)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-block" onClick={onSearchHandler}>SEARCH</button></form>
       </center>
 </div>
    )
}

export default Search
