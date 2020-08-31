import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    body: {
        marginTop: theme.spacing(5),
        height: '100vh'
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={8} className={classes.body}>
                    <Card />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}
