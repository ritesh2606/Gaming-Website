import React, { Component } from 'react'
import Data from '../../Store/data.json'
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/paper';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
export default class DataLoader extends Component {
    constructor(props) {
        super(props);
        this.state= {
            products: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        
        this.setState ={
            products: Data,
            isLoaded: true,
        }
    }
    render() {
        setTimeout(function() {

        }, 5000);
        return (
            <Carousel>
                {Data.map(data => (
                    <Paper key={data.asin} className="paper" style={{display:'block', height:'60vh', width:'100%',background:'#e8eaf6'}}>
                    <div style={{marginTop:10}}> <img src={data.thumbnail} alt="Girl in a jacket"  ></img>
                    </div>
                    <div>{data.title}</div> 
                    <button>Details</button>
                 </Paper>
                ))}
            </Carousel>
        ) 
    }
}
