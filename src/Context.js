import React, { Component } from 'react'
import Client from './Contentful'


const RoomContext = React.createContext()
const Provider = RoomContext.Provider
const Consumer = RoomContext.Consumer

//const { Provider, Consumer } = React.createContext()

class RoomProvider extends Component {

     state={
         rooms: [],
         sortedRooms: [],
         featuredRooms: [],
         loading: true,
         type: 'all',
         capacity: 1,
         price: 0,
         minPrice: 0,
         maxPrice: 0,
         breakfast: false,
         pets: false
     }

     //get data ........ to za Contentful... order mora bit postavljen
     getData = async() => {
          try{
               let response = await Client.getEntries({
                    content_type: "eldoradoRooms",
                    order: "sys.createdAt"
               })

               //kopirat s lokalnog na online item => response.items
               let rooms = this.formatData(response.items)
               let featuredRooms = rooms.filter(x => x.featured === true)

               let maxPrice = Math.max(...rooms.map(item => item.price))

               let price = maxPrice

               this.setState({
                    rooms, 
                    sortedRooms: rooms, 
                    featuredRooms, 
                    loading: false,
                    maxPrice,
                    price
               })
          } catch(error){
               console.log(error)
          }
     }


     componentDidMount(){
          this.getData()
     }

     formatData(items){
          let tempItems = items.map(item =>{
              let id = item.sys.id
              let images = item.fields.images.map(image => image.fields.file.url)
              
              let room = {...item.fields, images, id}
              return room
          })
          return tempItems
     }


     getRoom = (slug) => {
          let tempRooms = [...this.state.rooms]
          const room = tempRooms.find((room) => room.slug === slug)
          return room
     }


     handleChange = (event) => {
          const target = event.target
          const value = target.type === 'checkbox' ? target.checked:target.value
          const name = event.target.name
          
          this.setState({
               [name]: value
          }, this.filterRooms)
     }

     filterRooms = () => {
          
          let{
               rooms, type, capacity, price, breakfast, pets
          } = this.state
          
          //all the rooms
          let tempRooms = [...rooms]
          
          //transform value
          capacity = parseInt(capacity)


          //filter by type
          if(type !== 'all'){
               tempRooms = tempRooms.filter(room => room.type === type)
          }
          //filter by capacity
          if(capacity !== 1){
               tempRooms = tempRooms.filter(room => room.capacity >= capacity)
          }
          //filter by price
          tempRooms = tempRooms.filter(room => room.price <= price)

          //filter by breakfast
          if(breakfast){ 
               tempRooms = tempRooms.filter(room => room.breakfast === true)
          }

          //filter by pets
          if(pets){
               tempRooms = tempRooms.filter(room => room.pets === true)
          }

          this.setState({
               sortedRooms: tempRooms
          })
     }


     render() {
          return (
               <Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                    { this.props.children }
               </Provider>
          )
     }
}

export function withConsumer(Component){
     return function ConsumerWrapper(props){
          return <Consumer>
               { value => <Component {...props} context={value}/> }
          </Consumer>
     }
}

export { RoomProvider, Consumer, RoomContext }  