import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'

const Error = () => (
     <div>
          <Hero>
               <Banner title="Error 404" subtitle="Page not found">
                    <Link to="/" className="btn-primary"> Return home </Link>
               </Banner>
          </Hero>
     </div>
)
     
export default Error