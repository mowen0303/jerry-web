
import { memo } from 'react'


const Child = memo((props)=>{
    console.log('ChildComponent rendered');
    return <div>child: {props.count}</div>
})

// const Child = ()=>{
//     console.log('ChildComponent rendered');
//     return <div>child</div>
// }

export default Child;


// export default function Child (props){

//     console.log('ChildComponent rendered');

//     return (
//         <>
//         <div>Child Props: {props.name}</div>
//         </>
//     )
// }