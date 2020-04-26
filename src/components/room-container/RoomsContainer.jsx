import React from 'react'
import RoomsFilter from '../rooms-filter/RoomsFilter'
import RoomList from '../rooms-list/RoomsList'
import Loading from '../loading/Loading'
import { withConsumer } from '../../Context'
 
function RoomsContainer({context}){

     const { loading, sortedRooms, rooms } = context
     if(loading){ return <Loading/> }
     return (
          <React.Fragment>
               <RoomsFilter rooms={ rooms } />
               <RoomList rooms={ sortedRooms } />
          </React.Fragment> 
     )
}

export default withConsumer(RoomsContainer)