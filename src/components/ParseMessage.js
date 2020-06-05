import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   
}))

/* 
    TODO - Create parser to convert to full messages
*/

var sample = [
    {
        'sub': 'JENNY DURKAN NEEDS TO DO MORE',
        'message': 'Fuck Jenny',
    },
    {
        'email': 'opa@seattle.gov',
        'sub': 'CONDEMNING JARED CAMPBELL',
        'message': 'Hello,%0DMy name is [your name] and I am a resident of [city], WA. On Saturday May 30th at the Seattle protest, a young girl was pepper sprayed by one of your officers, Jared Campbell. It was recorded on video and currently is going viral. His badge number is 8470, which he has covered up during the protest. I am demanding that you look into his use of excessive force against a child.%0DRegards,%0D[your name]'
    },
    {
        'sub': 'RAISE REJECT REDMOND CURFEW',
        'message': 'Fuck Curfew'
    },
]

function Parser() {
    let starter = sample[1].message;
    // console.log(starter);
    let parsed = starter.replace(/ /g, '%20');
    // console.log(parsed)
    return parsed;
}


export default function ParseMessage(props) {
    let message = Parser();
    // window.location.href = "mailto:test@example.com?subject=Test%20Email&body=" + message;

    return(
        <React.Fragment>
            <div>Hello</div>
            
        </React.Fragment>
    )
}