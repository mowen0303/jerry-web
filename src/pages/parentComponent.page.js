import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const CourseContext = createContext();


export default function ParentComponent() {

    const [userInfo, setUserInfo] = useState(
        {
            name:'Jerry', 
            age: 18
        }
    );

    return (
        <UserContext.Provider value={{userInfo,setUserInfo}}>
            <div>父组件: {userInfo.name}</div>
            <ChildComponent/>
        </UserContext.Provider>
    );
}


function ChildComponent() {

    const courseInfo = {course:"IT1000"}

    return (
        <CourseContext.Provider value={courseInfo}>
            <div>子组件</div>
            <GrandchildComponent/>
        </CourseContext.Provider>
    )
}

function GrandchildComponent() {
    const {userInfo,setUserInfo} = useContext(UserContext);
    const {course} = useContext(CourseContext);
    return (
        <div>
            <div>孙子组件: {userInfo.name} {userInfo.age} {course}</div>
            <button onClick={()=>setUserInfo({...userInfo, name:'Tom'})}> Change Name</button>
        </div>
    )
}