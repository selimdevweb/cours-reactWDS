import './App.css'
import React ,{useState, useEffect} from 'react'

function Use() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json)
  
)
return {
    
}
    },[resourceType])
    
    return (
        <div>
            <button onClick={()=> setResourceType('posts')}>Posts</button>
            <button onClick={()=> setResourceType('users')}>Users</button>
            <button onClick={()=> setResourceType('comments')}>Comments</button>


            <h1>{resourceType}</h1>
            
            {items.map (item => {
                if (item.title) {
                    return<p key={item.id}>{JSON.stringify(item.title)}</p>
                     
                } else if (item.name) {
                    return <pre key={item.id}>{JSON.stringify(item.name)}</pre>
                     
                }
            })}

        </div>
    )
}

export default Use

