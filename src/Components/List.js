import React from 'react';

const List = ({data, link}) => {

    const list = data.map((item)=>{
        link ? <li><a href={link}>{item}</a></li> : <li>{item}</li>
    });
    
  return (
    <div className='mt-list mt-component'>
        <ul>
            {list}
        </ul>
    </div>
  )
};

export default List;
