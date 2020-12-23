import React from 'react';
import  Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './SiteLayout.css'
import Data from './DataLoader.jsx'
import Form from './Form.jsx'
import {Link} from 'react-router-dom'

export default function mainLayout() {

    return (
        <div className='MainContainer'>
            <Grid container spacing={[2]}>
                <Grid item xs={9} ><Paper id='paper1'><Link to={'/Second'}>MainView </Link><Data /></Paper></Grid>
                <Grid item xs={3}><Paper id='paper1'>FormView <Form /></Paper></Grid>
            </Grid>
        </div>
    );
}