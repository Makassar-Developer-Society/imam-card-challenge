import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 150,
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.img}
                image={require('../assets/img/imam.jpeg')}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Nama : Imam Fachrul Razi
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Motto : Sedia payung sebelum hujan
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Status : Online jikalau ada koneksi internet
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}