
// Acciones
interface Action {
  type: string;
  payload?: any;
}

// const incrementadorAction: Action = {
//   type: 'INCREMENTAR',
// }


function reducer(state = 10, action: Action){
  
  switch(action.type){
    case 'INCREMENTAR':
      return state += 1;
    case 'DECREMENTAR':
      return state -= 1;
    case 'MULTIPLICAR':
      return state * action.payload;
    case 'DIVIDIR':
      return state / action.payload;
    default:
      return state;
  }

}


// Uso de acciones:

const incrementadorAction: Action = {
  type: 'INCREMENTAR',
}
console.log(reducer(10, incrementadorAction)); // 11

const decrementadorAction: Action = {
  type: 'DECREMENTAR',
}
console.log(reducer(10, decrementadorAction)); // 9

const multiplicadorAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2,
}
console.log(reducer(10, multiplicadorAction)); // 20

const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 2,
}
console.log(reducer(10, dividirAction)); // 5


