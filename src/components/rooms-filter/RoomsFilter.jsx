import React, { useContext } from 'react'
import { RoomContext } from '../../Context'
import Title from '../title/Title'
import './RoomFilter.css'


const getUnique = (items, value) => {
     return[...new Set(items.map(item => item[value]))]
}


export default function RoomsFilter({ rooms }) {

     const context = useContext(RoomContext)
     
     const { 
          handleChange, 
          type, 
          capacity, 
          price, 
          minPrice, 
          maxPrice, 
          breakfast, 
          pets
     } = context

     //dohvati sve unikatne typeove podataka
     let types = getUnique(rooms, "type")
     //dodamo all opciju na pocetak 
     types = ['all', ...types]
     //mapiraj u jsx
     types = types.map((item, index) => {
          return <option value={item} key={index}>{ item }</option>
     })


     let guests = getUnique(rooms, "capacity")
     guests = guests.map((item,index) => {
          return <option key={ index } value={ item }>{ item }</option>
     })


     return (
          <section className="filter-container">
                <Title title="search rooms"/>
                <form className="filter-form">
               {/*select type*/}
                    <div className="form-group">
                         <label htmlFor="type">room type</label>
                         <select 
                         name="type" 
                         id="type" 
                         value={type} 
                         className="form-control" 
                         onChange={ handleChange }
                         >
                         { types }
                         </select>
                    </div>
               {/*end select type*/}
               {/*select capacity*/}
                    <div className="form-group">
                         <label htmlFor="capacity">Guests</label>
                         <select 
                         name="capacity" 
                         id="capacity" 
                         value={ capacity } 
                         className="form-control" 
                         onChange={ handleChange }
                         >
                         { guests }
                         </select>
                    </div>
               {/*end select capacity*/}
               {/*select price range*/}
                    <div className="form-group">
                         <label htmlFor="price">Room price: ${ price }</label>
                         <input type="range" name="price" min={ minPrice } max={ maxPrice } 
                         value={ price } id="price" onChange={ handleChange }
                         className="form-control" />
                    </div>
               {/*end select price range*/}
               {/*extra*/}
               <div className="form-group">
                    <div className="single-extra">
                         <input type="checkbox" name="breakfast" id="breakfast" 
                         checked={ breakfast } onChange={ handleChange }
                         />
                         <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                         <input type="checkbox" name="pets" id="pets" 
                         checked={ pets } onChange={ handleChange }
                         />
                         <label htmlFor="pets">pets</label>
                    </div>
               </div>
               {/*end of extra*/}
                </form>
          </section>
     )
}