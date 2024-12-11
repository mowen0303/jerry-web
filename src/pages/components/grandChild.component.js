import {useContext} from 'react';

//要将 CounterContext 引入到文件里来
import { CounterContext } from '../myTestPage';

export default function GrandChild (){
    
    //在孙子组件里使用 CounterContext的内容
    const {count,setCount} = useContext(CounterContext);

    return (
        <>
            <div>GrandChild: {count}</div>
            <button onClick={()=>setCount(count+1)}>+++++</button>
        </>
    )
}