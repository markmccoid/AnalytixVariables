import VarsAPI from 'VarsAPI';

export var variablesReducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOAD_VARIABLE_FILE':
			//--This will load the variable file based on the varSetName value passed
			//--varSet is the variable set being load -- SalesFlash, AdvertisingAnalytix, Common, etc
			var varData = VarsAPI.loadVariableFile(action.varSetName);
			return {
				varData: varData,
				varSetName: action.varSetName,
				groupList: VarsAPI.createGroupList(varData),
				groupSelected: 'All'
			};
		case 'UPDATE_VARIABLE_FILE':  //Run when a variable is edited
			//Get new copy of varData
			var newVarData = [...state.varData];
			var { id, newVarValues} = action;
			//Loop through the variables array and update the record equal to the action.id that was passed
			newVarData.forEach(currVariable => {
					if (currVariable.ID == id) {
						currVariable.name = newVarValues.newVarName;
						currVariable.description = newVarValues.newVarDescription;
						currVariable.value = newVarValues.newVarExpression;
					}
				});
			//rebuild state adding in the new version of varData
			return Object.assign({}, state, {varData: newVarData});
		case 'SET_GROUP_SELECTED':
			return Object.assign({}, state, {groupSelected: action.groupSelected});
		default:
			return state;
	}
};

export var searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
};

// export var groupSelectedReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case 'SET_GROUP_SELECTED':
// 			return Object.assign({}, state, {groupSelected: action.groupSelected});
// 		// case 'CREATE_GROUP_LIST':
// 		// 	//Going to get action.varData which will be an array of variable objects
// 		// 	//Return new Object and new groupList - VarsAPI.createGroupList will create distinct list of groups.
// 		// 	return Object.assign({}, state, {groupList: VarsAPI.createGroupList(action.varData)});
// 		default:
// 			return state;
// 	}
// };

