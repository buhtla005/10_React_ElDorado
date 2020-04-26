import React, { Component } from 'react'
import { FaCoins, FaBed, FaShuttleVan, FaPaperPlane } from 'react-icons/fa'
import Title from '../title/Title'
import './Services.css'

export default class Services extends Component {
 
     state={
        services:[
          {
               icon:<FaBed/>,
               title:"luxurious rooms",
               info: "The Eldorado offers luxurious rooms that are for everyones tastes."
          },
          {
               icon:<FaCoins/>,
               title:"Casino",
               info: "Join in our BlueHedge casino. See if lady luck is smiling to you."
          },
          {
               icon:<FaShuttleVan/>,
               title:"free shuttle",
               info: "The free shuttle will pick you up from the airport."
          },
          {
               icon:<FaPaperPlane/>,
               title:"Entertainment",
               info: "A lot of entertaining activities and programs. From sightseeing to joga and gym."
          }
        ]  
     }

     render(){
          return(
               <section className="services">
                    <Title title="services"/>
                    <div className="services-center">
                    {
                         this.state.services.map((item, id) => {
                              return <article key={id} className="service">
                                   <span>{ item.icon }</span>
                                   <h6>{ item.title }</h6>
                                   <p> { item.info }</p>
                              </article>
                         })
                    }
                    </div>
               </section>
          )
     }

}