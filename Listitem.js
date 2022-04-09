import React from 'react'; import { Link } from 'react-router-dom'; const Listitem = ({image, name, rating, id}) => { return (
<Link to={`/singleshow/${id}`} className="listitem">
<img src={image} alt={name}/>
<div className="listiteminfo">
    <h4 className='infoname'>{name}</h4>
    <h4 className='inforating'>{rating}</h4>
</div>
</Link>
); }; export default Listitem;