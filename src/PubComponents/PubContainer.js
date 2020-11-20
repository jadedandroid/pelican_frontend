import React from "react"
import {connect} from "react-router-dom"
import {Grid} from  "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
    pubCont: {
        paddingTop: "20px",
        paddingRight: "50px",
        paddingLeft: "50px",
    },
});

const getPubCard = (props) => {
    console.log(props)
    return (
        <Grid item xs={4}>
            <Card>
                <CardContent> </CardContent>
            </Card>
        </Grid>
    )
}


const PubContainer = (props) => {
    const classes = useStyles();
    console.log(props)
    return(
    <>
    <h2>Published publication</h2>
    <Grid container direction ='cloumn' container spacing={4} className={classes.pubCont}>
          {getPubCard()};
        {/* <Grid item xs = {6}>
        {arrayOfComponents}  
        </Grid>  */}
    </Grid>
</>
    )
    
    
}

export default PubContainer;