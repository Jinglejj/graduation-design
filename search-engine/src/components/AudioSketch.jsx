import React,{Fragment} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

export default function Animations() {
    const classes = useStyles();

    const AudioSketch = (
        <Fragment>
            <Skeleton width="88%"/>
            <Skeleton width="72%" animation={false}/>
            <Skeleton animation="wave"/>
        </Fragment>
    )

    const VideoSketch=(
        <Fragment>
            <Skeleton/>
            <Skeleton animation={false}/>
            <Skeleton animation="wave"/>
        </Fragment>
    )

    return (
        <div className={classes.root}>
            {AudioSketch}
            {VideoSketch}
        </div>
    );
}