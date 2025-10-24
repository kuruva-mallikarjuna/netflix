import './pagecontents2.css'


function pagecontents2 (){
     
    var userdetails= [ { 
         title : " Enjoy on your TV " , 
         content : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." },
        { title : " Download your shows to watch offline " ,
        content : "Save your favourites easily and always have something to watch.." },
       { title : " Watch everywhere " ,
         content : "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.." },
        { title : " Create profiles for kids " ,
        content : "Send kids on adventures with their favourite characters in a space made just for them — free with your membership." }
]

    return(

         <div className='card2'>
           { userdetails.map((details) => (
            <div className='card-body'>
            <h5 className='card-title'> {details.title} </h5>
            <p className='card-content'> {details.content} </p>
            </div>

 ))}

         </div>      

    )




}
export default pagecontents2