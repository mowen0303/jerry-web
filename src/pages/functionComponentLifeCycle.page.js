import {useState, useEffect, useLayoutEffect} from 'react';


export default function FunctionComponentLifeCyclePage(props) {

    const [state, setState] = useState(()=>{
        console.log('getDerivedStateFromProps');
        return '';
    })

    useEffect(()=>{
        //数据请求
        console.log('componentDidMount');
        new Promise((resolve)=>{
            resolve()
        }).then(res=>{
            console.log("xxxx")
        })

        return () =>{
            console.log('componentWillUnmount')
        }
    },[])

    useEffect(()=>{
        console.log('componentWillReceiveProps')
    },[props])

    useEffect(()=>{
        console.log("componentDidUpdate")
    })

    useLayoutEffect(()=>{
        console.log("componentDidUpdate -- layout")
    })


    return (
        <div className="pageContainer">
            <div className="questionBox">Please console log</div>
        </div>
    )
}