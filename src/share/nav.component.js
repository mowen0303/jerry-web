import { Link, useLocation } from "react-router-dom"

export default function Nav(){

    /**
     * 这里使用 useLocation 可以让 Nav 组件进行每次导航的时候进行刷新
     * 如果不添加这个, 本组件默认不会刷新, 所以 setHover 不会执行
     **/
    const location = useLocation();

    const navData = [
        {path:'/searchSuggestion', title:'Search Suggestion - Amazon'},
        {path:'/totalSalary', title:'Total Salary - Scotiabnak'},
        {path:'/functionComponetLifeCycle', title:'Function Component Life Cycle'},
        {path:'/parentComponent', title:'Parent Component'},
        {path:'/phoneNumberInput', title:'Phone Number Input'},
        {path:'/myTestPage', title:'My Test Page'},
    ]

    function setHover(pathname){
        if(location.pathname == pathname){
            return 'hover'
        }else{
            return ''
        }
    }

    return (
        <nav className="nav">
            <ul>
                {
                    navData.map((x,index)=>
                        <li key={index}><Link className={setHover(x.path)} to={x.path}>{x.title}</Link></li>
                    )
                }
            </ul>
        </nav>
    )
}