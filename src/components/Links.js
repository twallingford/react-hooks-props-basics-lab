import React from "react";

function Links(props){
    const userLinks = Object.keys(props.links).map((key, index) => {
        return <div key={props.links[key]}><a href={props.links[key]}>{props.links[key]}</a></div>
    });

    console.log(userLinks);

    return(
        <div>
            <center>
                <h3>Links</h3>
                {userLinks}
            </center>
        </div>
    )
}

export default Links;