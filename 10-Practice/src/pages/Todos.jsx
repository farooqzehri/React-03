import React, { useEffect, useState } from 'react'

function Todos() {
    const [items , setItems] = useState(() => {
        const saveItems = localStorage.getItem('dropkeep_items');
        return saveItems ? JSON.parse(saveItems) : [];
    })
    const [activeFilter , setActiveFilter] = useState('All')

    useEffect(() => {
        localStorage.setItem('dropkepp_items' , JSON.stringify(items))
    }, [items]);
    const addItem =  (newitem) => {
        setItems([newitem, ...items])
    };
    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }
    const filterItem = items.filter(item => {
        if(activeFilters === 'All') return true;
        return item.category === activeFilter;
    })
    return (
        <div>Todos
               {['All', 'Dev' , 'Design' , 'Notes '].map(tab => {
                setActiveFilter(tab)
                return <div>
                    {tab}
                </div>
               })}
        </div>
     
  )
}

export default Todos