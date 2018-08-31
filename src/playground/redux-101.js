import {createStore} from 'redux';


const incrimentCount = ({incrimentby=1} = {}) =>({
      type:'INCRIMENT',
      incrimentby 
    });

 const decrimentcount = ({decrimentby=10} = {}) =>( {
     type:'DECRIMENT',
     decrimentby
 });   

 const resetcount = () => ({
     type:'RESET'
 });

 const countreducer = (state= { count:0},action) => {
  
    switch(action.type) {
        case 'INCRIMENT' :
      return {
          count: state.count+action.incrimentby
      };
        case 'DECRIMENT' : 
        //const dby = typeof action.decrimentby === 'number' ? action.decrimentby : 1
        return {
          count:state.count - action.decrimentby
      };
        case 'RESET' :
        return {
          count:0
      } ;   
         default:return state;
    }
    
  } 

const store=createStore(countreducer );


store.subscribe( () => {
    console.log(store.getState());
})


/*store.dispatch({
    type:'INCRIMENT',
    incrimentby :5
});*/

store.dispatch(incrimentCount ({incrimentby :5}));


store.dispatch(incrimentCount ());

store.dispatch(resetcount());



store.dispatch(decrimentcount ({decrimentby :10}));



