import { useEffect, useState } from "react"

export default function Users(){
    
    //data paiteo pari nao paite pari
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, []) //prothom bar data load korte gele ekTa empty Array dibo

    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

/* 
1. Declare a state to hold the data
2. useEffect with callback and dependency array
3. Use fetch to load data
4. Set loaded data to the state
5. Display data on the component

*/