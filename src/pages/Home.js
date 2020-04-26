import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import FeaturedRooms from '../components/featured-rooms/FeaturedRooms'

const Home = () => (
     <React.Fragment>
          <Hero>
               <Banner title="Your vacation starts here" subtitle="rooms start at $100">
                    <Link to="/rooms" className="btn-primary"> Our rooms </Link>
               </Banner>
          </Hero>
          <Services/>
          <FeaturedRooms/>

     </React.Fragment>
)
     
export default Home