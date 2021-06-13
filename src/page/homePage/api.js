import axios from 'axios';
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export default class PictureList extends React.Component {

    state = {
        pictures:[],
    };
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/pictures/')
            .then(res => {
                console.log(res);
                this.setState({pictures:res.data});
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    
    render() {
        
        return(
            <div className="api-root">
                <GridList className="gridList" cols = {2.5}>
                    {this.state.pictures.map(picture => (
                        <GridListTile>
                            <img src={picture.p_url} alt={picture.title}/>
                            
                        </GridListTile>
                    ))}
                </GridList>
                
            </div>
        )
    }


}