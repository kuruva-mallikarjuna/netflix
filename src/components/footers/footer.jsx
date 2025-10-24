import './footer.css'

function footer() {
   
return(
<div className=''>
    <div className='foot'>
    <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
     </div>
     <div className='foot-int'>
        <input type="text" id='int2' placeholder='Email address'/>
        <button id="btn">Get started &gt; </button> 
        </div>
        <p id="foot-p">Questions? Call 000-800-919-1743</p>
        <div className='ang-page'>
            <a href=''>FAQ</a>
            <a href=''>Investor Relations</a>
            <a href=''>Privacy</a>
            <a href=''>Speed Test</a>
            <a href=''>Help Centre</a>
            <a href=''>Jobs</a>
            <a href=''>Cookie Preferences</a>
            <a href=''>Legal Notices</a>
            <a href=''>Account</a>
            <a href=''>Ways to Watch</a>
            <a href=''>Corporate Information</a>
            <a href="">Only on Netflix</a>
            <a href="">Media Centre</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>
        </div>
        <div className='select-option'>
            <select className='sel-option'>
                <option>English</option>
                <option>Telugu</option>
                <option>Hindi</option>
            </select>
        </div>
        <div className='net-p'>
            <p>Netflix India</p>
        </div>
        
</div>
        
        
     

)


}
export default footer;