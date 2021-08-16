const INITIAL_STATE = {
    sections:[
        {
          title: 'Sombreros',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'Hats'
          
        },
        {
          title: 'Chaquetas',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
          
        },
        {
          title: 'Zapatillas',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
          
        },
        {
          title: 'Mujeres',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size:'large',
          id: 4,
          linkUrl: ''
          
        },
        {
          title: 'hombres',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size:'large',
          id: 5,
          linkUrl: ''
          
        }
      ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer;