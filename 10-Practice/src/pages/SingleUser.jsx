import React from 'react'
import { useParams } from 'react-router-dom'

function SingleUser() {
     const customers = [
        { 
            id: 1, name: 'John Doe' ,
           email: 'john.doe@example.com',
           phone: '123-456-7890', address: '123 Main St, Anytown, USA',
           image: 'https://randomuser.me/api/portraits/men/1.jpg' 

        },
        {
            id: 2, name: 'Jane Smith' ,
            email: 'janesmith@example.com',
            phone: '987-654-3210', address: '456 Elm St, Othertown, USA',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 3, name: 'Bob Johnson' ,
            email: 'bobjon@example.com',
            phone: '555-555-5555', address: '789 Oak St, Another town, USA',
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 4 , name: 'Alice Williams' ,
            email: 'alice@example.com',         
            phone: '555-123-4567', address: '101 Pine St, Yet Another Town, USA',
            image: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            id:5 , name: 'charle chaplin',
            email: 'charlie.chaplin@example.com',
            phone: '555-987-6543', address: '202 Cedar St, Final Town, USA',
            image: 'https://randomuser.me/api/portraits/men/5.jpg'

        },
        {
            id:6 , name: 'Alice smith',
            email: 'alice.smith@example.com',
            phone: '555-555-1234', address: '303 Birch St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/women/6.jpg',

        },
        {
            id:7 , name: 'bob johnson',
            email: 'bob.johnson@example.com',
            phone: '555-555-5555', address: '789 Oak St, Another town, USA',
            image: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
            id:8 , name: 'fariha',
            email: 'farihakhan@example.com',
            phone: '555-555-2222',
            image: 'https://randomuser.me.api.portraits/woman/8.jpg'

        },
        {
            id:9, name: 'charlie brown',
            email:'charlie.brown@example.com',
            phone: '555-555-3333', address: '404 Maple St, Final Town, USA',
            image: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        {
            id:10, name: 'david smith',
            
        }

    ]
    const {id} = useParams()
    // const customer = customers.find(item => item.id === parseInt(id))

  return (
    <div>SingleUser

        {customers && <div key={customers[id-1].id}>
                    <img src={customers[id-1].image} alt={customers[id-1].name} width="100" height="100"/>
                    <h3>{customers[id-1].name}</h3> </div>}
    </div>
    
  )
}

export default SingleUser