import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import RoomsContainer from '../components/room-container/RoomsContainer'

const Rooms = () => (
     <React.Fragment>
          <Hero hero="roomsHero">
               <Banner title="Our rooms">
                    <Link to="/" className="btn-primary"> Return home </Link>
               </Banner>
          </Hero>
          <RoomsContainer/>
     </React.Fragment>
)
     
export default Rooms