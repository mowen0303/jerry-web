import {useEffect, useState, createContext, useCallback} from 'react'
import Child from './components/child.component';
import GrandChild from './components/grandChild.component';


export const CounterContext = createContext();

export default function MyTestPage() {

    const [count,setCount] = useState(0);

    const cardList = [
        "Readability",
        "Performance",
        "Security",
        "Documentation",
        "Testing"
      ]
      

    return (
        <>
            {cardList.map(x=>{
                return (
                    <li>{x}</li>
                )
            })}
        </>
        
    )
}
