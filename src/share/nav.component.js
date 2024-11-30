export default function Nav(){

    function setHover(pathname){
        if(window.location.pathname.indexOf(pathname)>0){
            return 'hover'
        }else{
            return ''
        }
    }

    return (
        <nav className="nav">
            <ul>
                <li><a className={setHover('searchSuggestion')} href="/searchSuggestion">Search Suggestion - Amazon</a></li>
                <li><a className={setHover('totalSalary')} href="/totalSalary">Total Salary - Scotiabnak</a></li>
            </ul>
        </nav>
    )
}