import React, { Component } from 'react'
import { Consumer } from '../../Context'
import Loading from '../loading/Loading'
import Room from '../room/Room'
import Title from '../title/Title'
import './FeaturedRooms.css'

export default class FeaturedRooms extends Component {
     render() {
          
          return (
               <section className="featured-rooms">
                    <Title title="featured rooms"/>
                    <div className="featured-rooms-center">
                         <Consumer>
                         {
                              (c) => ( 
                                   c.loading ? 
                                   <Loading/> :
                                   c.featuredRooms.map(room => {
                                        return <Room key={room.id} room={room}/>
                                   })
                              )
                         }
                         </Consumer>
                    </div>
               </section>
          )
     }
}
