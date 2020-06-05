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


    
    // TODO find auto way to break new line
    // ! cannot exceeds email limit of 2083 characters
    var sample = [
        {
            'email': 'tbwine@louisvilleprosecutor.com',
            'sub': 'Justice for the Murder of Breonna Taylor',
            'message': 'Hello, My name is [insert name]. I am a resident of [Washington/City] and I am emailing today to demand accountability for the racist murder of Breonna Taylor. I demand that charges be pressed against all officers involved in this heinous killing, including Sgt. Jonathan Mattingly and officers Brett Hankison and Myles Cosgrove. They should all be fired, and should be charged and prosecuted to the fullest extent of the law for murder. Breonna Taylor was an ER technician, working tirelessly to help others during this global pandemic. She should be alive today. She would be alive today if it were not for the gross abuse of power and white supremacy exhibited by the Louisville Police Department. All officers involved must face consequences for this murder in order to provide her family with justice and to deter law enforcement from committing racist and brutal acts of violence against communities of color. In addition, I demand that we provide more support for community efforts and organizations that work to prevent police brutality and violence. Sincerely, [your name]',
            'raw': 'Hello,%0DMy name is [insert name]. I am a resident of [Washington/City] and I am emailing today to demand accountability for the racist murder of Breonna Taylor.%0DI demand that charges be pressed against all officers involved in this heinous killing, including Sgt. Jonathan Mattingly and officers Brett Hankison and Myles Cosgrove. They should all be fired, and should be charged and prosecuted to the fullest extent of the law for murder.%0DBreonna Taylor was an ER technician, working tirelessly to help others during this global pandemic. She should be alive today. She would be alive today if it were not for the gross abuse of power and white supremacy exhibited by the Louisville Police Department. All officers involved must face consequences for this murder in order to provide her family with justice and to deter law enforcement from committing racist and brutal acts of violence against communities of color.%0DIn addition, I demand that we provide more support for community efforts and organizations that work to prevent police brutality and violence. Sincerely, [your name]',
        },
        {
            'email': 'opa@seattle.gov',
            'sub': 'Jared Campbell Must Face Consequences',
            'message': 'Hello, My name is [your name] and I am a resident of [city], WA. On Saturday May 30th at the Seattle protest, a young girl was pepper sprayed by one of your officers, Jared Campbell. It was recorded on video and currently is going viral. His badge number is 8470, which he has covered up during the protest. I am demanding that you look into his use of excessive force against a child. Regards,',
            'raw': 'Hello,%0D%0DMy name is [your name] and I am a resident of [city], WA. On Saturday May 30th at the Seattle protest, a young girl was pepper sprayed by one of your officers, Jared Campbell. It was recorded on video and currently is going viral. His badge number is 8470, which he has covered up during the protest. I am demanding that you look into his use of excessive force against a child.%0D%0DRegards,%0D[your name]'
        }
    ]

    // TODO Remove console.log
    const handleChange = (event) => {
        // console.log('event.target.value : ', event.target.value);
        // console.log('BEFORE SUBJECT NUM : ', subjectNum);
        // console.log('BEFORE SUBJECT : ', subject);
        // console.log('BEFORE MESSAGE : ', message);

        setSubjectNum(event.target.value);
        setSubject(sample[event.target.value].sub);
        setMessage(sample[event.target.value].message);
        // setRaw(sample[event.target.value].raw);
        setRenderStatus(true);

        // console.log('------------------------')
    }

    useEffect(() => {
        // console.log("UPDATED SUBJECT : ", subject);
        // console.log("UPDATED MESSAGE : ", message);
        ExecuteOpenMailer();
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

    function ParseMessage() {
        // let starter = sample[1].raw;
        let starter = sample[subjectNum].raw;
        // console.log(starter);
        let parsed = starter.replace(/ /g, '%20');
        // console.log(parsed)
        return parsed;
    }

    function ParseSubject() {
        let starter = sample[subjectNum].sub;
        let parsed = starter.replace(/ /g, '%20');
        return parsed;
    }

    function ExecuteOpenMailer() {
        if (subjectNum !== '') {
            let htmlEmail = ParseMessage();
            let sub = ParseSubject();
            let address = sample[subjectNum].email;
            window.location.href = "mailto:" + address + "?subject=" + sub + "&body=" + htmlEmail;
        }
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
                    <MenuItem value={0}>THE MURDER OF BREONNA TAYLOR</MenuItem>
                    <MenuItem value={1}>CONDEMNING JARED CAMPBELL</MenuItem>
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