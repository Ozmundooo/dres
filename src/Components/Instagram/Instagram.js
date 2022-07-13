import React from "react";
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './Instagram.scss'
function Instagram(){
    
    return(
        <>  
            <div className="Instagram">
                <InstagramFeed token='IGQVJVME9NdXBrYnIzRXRwWi1jeUU5dUZAsdTZAWREFNWERFYy1BWlFfeU5QNkRSTjM2VksyQllILWQySGtfbV9RaWtqUWxMSV8tRkVBamNwSWRudUNfdWszaFA1Wko3cG96eGpsRi04OC1KYWpGZAkZASLQZDZD'  counter="3"/>
            </div>
        </>
    )
}
export default Instagram