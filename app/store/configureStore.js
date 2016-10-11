var redux = require('redux');
var {variablesReducer, searchTextReducer, groupSelectedReducer}  = require('reducers');

//--------------------------------------------
//-Create Store
//--------------------------------------------
export var configure = (initialState = {}) => {

	var reducer = redux.combineReducers({
			variables: variablesReducer,
			searchText: searchTextReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
			window.devToolsExtension ? window.devToolsExtension() : f => f));

	return store;
}
