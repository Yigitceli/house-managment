import React from 'react'
import Item from '../Item/Item';
import './list.css';

export default function List(props) {
    
    
    return (
        <div className='list'>
            {props.isClient && props.items.map(item => {
                return <Item clients={props.items} setClients={props.setClients} isClient={props.isClient} key={item.id} id={item.id} name={item.name} budget={item.budget} city={item.city} situation={item.situation}/>
            })}

            {props.isApartment && props.items.map(item => {
                return <Item apartments={props.items} setApartments={props.setApartments} isApartment={props.isApartment} key={item.id} id={item.id} net={item.net} room={item.room} extra={item.extra} rent={item.rent} rentTime={item.rentTime} price={item.price} situation={item.situation}/>
            })}

            
            
        </div>
    )
}
