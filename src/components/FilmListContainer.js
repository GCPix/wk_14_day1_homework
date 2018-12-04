import React, {Component} from 'react';
import Film from './filmContainer';

class FilmList extends Component{


  render(){
        const filmNodes = this.props.data.map(film => {
      return (<Film
        key = {film.id}
        name = {film.name}
        url = {film.url}/>)
    });

    return (<div className="filmList">
        {filmNodes}
      </div>

)}

}

export default FilmList;
