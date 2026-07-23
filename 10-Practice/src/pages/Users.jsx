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
            id: 10, name: 'susan lee',
            email: 'susan.lee@example.com',
            phone: '555-555-7890' , address: '707 Aspen St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/women/10.jpg'
        },
        {
            id:11, name: 'mike tyson',
            email: 'mike.tyson@example.com',
            phone: '555-555-2345',
            address: '808 Chestnut St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/men/11.jpg' 
        },
        {
            id: 12, name: 'jorden mike',
            email: 'jorden.mike@example.com',
            phone: '555-555-6789', address: '909 Redwood St, Last Town, USA',
            image: 'https://randomuser.me/api/portraits/men/12.jpg'
            },
            {
                id:13, name: 'lisa simpson',
                email: 'lisa.simpson@example.com',
                phone: '555-555-2342', address: '1010 Magnolia St, Last Town, USA',
                image: 'https://randomuser.me/api/portriats/women/13.jpg'

            },
            {
                id: 14, name: 'kendal jenner',
                email: 'kendal.jenner@gmail.com',
                phone: '555-555-6585', address: 'saint-lorent new-york',
                image: 'https://randomuser.me/api/portriats/women/14.jpg'
            },
            {
                id: 15, name: 'kyle jenner',
                email: 'kyle.jenner@example.com',
                phone: '555-555-4585',
                address: 'state of malbury -use',
                image: 'https://randomuser.me/api/portriats/women/15.jpg'
            },
            {
                id : 16,
                name: 'emily smith',
                email: 'emily.smith@example.com',
                phone: '555-555-2342',
                address: 'new clean0smith, california',
                image: 'https://randomuser.me/api/portriats/women/16.jpg'
                
            },
            {
                id:17, name: 'farwah shah',
                email: 'farwah.shah@example.com',
                phone: '555-555-2347',
                address: 'roly state, new-york city',
                image: 'https://randomuser.me/api/portriats/women/17.jpg'
                
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