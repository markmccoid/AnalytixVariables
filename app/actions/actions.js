export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
};

export var getVariableFile = (varSetName) => {
	return {
		type: 'LOAD_VARIABLE_FILE',
		varSetName: varSetName
	};
};

export var updateVariableFile = (id, newVarValues) => {
	return {
		type: 'UPDATE_VARIABLE_FILE',
		id: id,
		newVarValues: newVarValues
	};
};
export var createGroupList = (varData) => {
	return {
		type: 'CREATE_GROUP_LIST',
		varData: varData
	};
};

export var setGroupSelected = (groupSelected) => {
	return {
		type: 'SET_GROUP_SELECTED',
		groupSelected: groupSelected
	};
};
