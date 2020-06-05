import React, { useState, useEffect } from 'react';
import {
    Container,
    MenuItem,
    InputLabel,
    FormControl,
    Select,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParseMessage from './ParseMessage';


const useStyles = makeStyles((theme) => ({
    FormControl: {
        margin: theme.spacing(1),
        minWidth: 400,
    },
    formWrapper: {
        padding: theme.spacing(5, 0, 5)
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    select: {
        '&:before': {
            borderColor: theme.palette.secondary.main
        },
        '&:after': {
            borderColor: theme.palette.secondary.main
        },
        color: 'white'
    },
    selectLabel: {
        color: 'white'
    },
    menuItem: {
        color: theme.palette.secondary.main
    },
    displayMessage: {
        padding: theme.spacing(10)
    },
    messageWrapper: {
        padding: theme.spacing(5)
    }
}))

export default function EmailSelector() {
    const classes = useStyles();
    // TODO change to default
    const [subjectNum, setSubjectNum] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [renderStatus, setRenderStatus] = useState(false);


    /* 
    DESIRED FORMAT
    
    Hello,

    My name is [your name] and I am a resident of [city], WA. On Saturday May 30th at the Seattle protest, a young girl was pepper sprayed by one of your officers, Jared Campbell. It was recorded on video and currently is going viral. His badge number is 8470, which he has covered up during the protest. I am demanding that you look into his use of excessive force against a child.
    
    Regards,
    [your name]

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

    // TODO Remove console.log
    const handleChange = (event) => {
        console.log('event.target.value : ', event.target.value);
        console.log('BEFORE SUBJECT NUM : ', subjectNum);
        console.log('BEFORE SUBJECT : ', subject);
        console.log('BEFORE MESSAGE : ', message);

        setSubjectNum(event.target.value);
        setSubject(sample[event.target.value].sub)
        setMessage(sample[event.target.value].message)
        setRenderStatus(true);

        console.log('------------------------')
    }

    useEffect(() => {
        console.log("UPDATED SUBJECT : ", subject);
        console.log("UPDATED MESSAGE : ", message);
    })

    function DisplayMessage() {
        return (
            <div>
                <div>
                    <Typography variant="h4" color="secondary">
                        Subject: <span style={{ color: 'white' }}>{subject}</span>
                    </Typography>
                </div>
                <div className={classes.messageWrapper}>
                    <Typography variant="body1" color="primary">
                        {message}
                    </Typography>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className={classes.formWrapper}>
                <Typography variant="h3" color="secondary">
                    Select an email to send:
                </Typography>
            </div>
            <FormControl
                className={classes.FormControl}
                color="primary"
            >
                <InputLabel
                    variant="standard"
                    color="secondary"
                    focused={true}
                >
                    Select Subject
                </InputLabel>
                <Select
                    variant="standard"
                    labelId="subject-select-label"
                    id="subject-select"
                    value={subjectNum}
                    onChange={handleChange}
                    className={classes.select}
                >
                    <MenuItem value={0}>JENNY DURKAN NEEDS TO DO MORE</MenuItem>
                    <MenuItem value={1}>CONDEMNING JARED CAMPBELL</MenuItem>
                    <MenuItem value={2}>RAISE REJECT REDMOND CURFEW</MenuItem>
                </Select>
            </FormControl>
            <Container className={classes.displayMessage}>
                {
                    renderStatus ? <DisplayMessage /> : null
                }
            </Container>
        </React.Fragment>
    )
}