import React from 'react';
import ViewMiddle from "./responsive/ViewMiddle/ViewMiddle";

const Footer = React.memo(
    () =>{
        return (
            <div style={{width: '80%'}}>
                <ViewMiddle/>
            </div>
        )
    }
)

export default Footer;
