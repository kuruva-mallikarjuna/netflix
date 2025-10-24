

import './Pageheader.css'
function PageHeader() {
    return(
        
        <div className='head'>
            <div className='net'>
        <h1> NETFLIX </h1>
        </div>
        <div className='sel'>
        <select id='s'>
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
        </select>
        
        
        <button id='bt'>Sign in </button>
        </div>
         </div>
    )

}
 export default PageHeader;