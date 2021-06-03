import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections:[
              {
                title: 'Sombreros',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                
              },
              {
                title: 'Chaquetas',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                
              },
              {
                title: 'Zapatillas',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                
              },
              {
                title: 'Mujeres',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size:'large',
                id: 4,
                
              },
              {
                title: 'hombres',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size:'large',
                id: 5,
                
              }
            ]
        };
    }
    render() {
      return (
        <div className='directory-menu'>
        {
          this.state.sections.map(({id, title, imageUrl, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))
        }
        </div>
      );
    }
}

export default Directory;