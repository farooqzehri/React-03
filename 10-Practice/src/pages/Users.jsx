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