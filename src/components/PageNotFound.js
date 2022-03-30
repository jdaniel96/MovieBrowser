import React from "react";
import Hero from "./Hero";

const PageNotFound = () =>{
    return(
        <div className="mx-auto">
            <Hero text="Sorry but this page has not been found!" />
            <img className="rounded shadow mx-auto d-block mt-5"  src="https://www.memecreator.org/static/images/memes/4541861.jpg" alt="meme" />

        </div>

        
    )
}


export default PageNotFound;