import { Action, Reducer } from "./ngrx-fake/ngrx";
import { incrementadorAction, multiplicadorAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

class Store<T> {
  
  // private state: T;

  constructor(
    private reducer: Reducer<T>, 
    private state: T,
  ){
    // this.state = state;
  }

  getState(){
    return this.state;
  }

  dispatch(action: Action){
    this.state = this.reducer(this.state, action);
  }

}

const store = new Store(contadorReducer, 10);
console.log(store.getState()); // 10

store.dispatch(incrementadorAction);
console.log(store.getState()); // 11

store.dispatch(multiplicadorAction);
console.log(store.getState()); // 22


