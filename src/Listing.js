import React from 'react';
import PropTypes from 'prop-types'
import ListItem from './ListItem';

export default function Listing(props) {
  const {items} = props;
  console.log("перед отрисовкой", items);
  return (
    <div className='item-list'>
      {items.map((item) => {
        return <ListItem item={item} key={item.listing_id} /> 
      })}
    </div>
  );
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}