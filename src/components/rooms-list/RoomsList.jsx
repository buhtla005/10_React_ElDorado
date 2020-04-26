import React from 'react'
import Room from '../room/Room'
import { withConsumer } from '../../Context'
import './RoomsList.css'

function Lista({ rooms }) {
     
     if(rooms.length === 0){
          return (
               <div className="empty-search">
                    <h3>unfortunatly no rooms matched your search parametaes</h3>
               </div>
          )
     }

     return (
          <section className="roomslist">
               <div className="roomslist-center">
               {
                    rooms.map(room => {
                         return <Room key={room.id} room={room}/>
                    })   
               }
               </div>
          </section>

     )
}

export default withConsumer(Lista)