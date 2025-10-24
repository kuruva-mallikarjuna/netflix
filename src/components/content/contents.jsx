import './contents.css'
function contents(){
    return(
        <div className='con'>
        <h1 id='p1'>
          Unlimited movies, TV<br/>
           shows and more</h1>
    <h4 id='p2'>Starts at ₹149. Cancel at any time.</h4>
   <h6 id='p3'> Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <div className='int'>
        <input type="text" id='int1' placeholder='Email address'/>
        <button id="b1">Get started &gt; </button> 
        </div>
        </div>
    )
} 
export default contents