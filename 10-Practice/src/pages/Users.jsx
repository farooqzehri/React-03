import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Users() {
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
            id:5,  name: 'Alice Smith',
            email: 'alicesmith@example.com',
            phone: '555-987-6543',
            address: '202 Maple St, One More Town, USA',
            image: 'https://randomuser.me/api/portraits/women/5.jpg'
        },
        {
            id: 6, name: 'Charlie Brown',
            email: 'charlie@example.com',
            phone: '555-555-1234',
            address: '303 Cedar St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/men/6.jpg'
        },
        {
            id: 7, name: 'david Johnson',
            email: 'david.johnson@example.com',
            phone: ` 555-555-5678`, address: '404 Birch St, Final Town, USA',
            image: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
            id:8, name: 'mickel',
            email: 'mickel@example.com',
            phone: '555-555-9012', address: '505 Spruce St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/men/8.jpg'

        },
        {
            id:9, name: 'alex star',
            email: 'alex.star@example.com',
            phone: '555-555-3456',
            address: '606 Willow St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        {
            id: 10,
        }
        

    ]
    const navigate = useNavigate()
    const {id} = useParams()
  return (
    <div>Users
        <ul>
            {customers && customers.map(item => {
                return <div key={item.id}>
                    <img src={item.image} alt={item.name} width="100" height="100"/>
                    <h3>{item.name}</h3>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Address: {item.address}</p>
                    <button onClick={() => navigate(`/singleuser/${item.id}`) }>Details</button>
                </div>
            }) }
        </ul>
    </div>
  )
}

export default Users