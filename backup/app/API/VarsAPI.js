module.exports = {
	loadVariableFile: function (varFileToLoad) {
		var jsonData = require('json!../variablesWID.json');

		switch(varFileToLoad.toLowerCase()) {
			case 'common':
				//load common variables
				return jsonData.Variables.COMMON;
			case 'salesflash':
				//load SalesFlash variables
				return jsonData.Variables.SALESFLASH;
			case 'advertising':
				//load AdvertisingAnalyix variables
				return jsonData.Variables.ADVERTISINGANALYTIX;
			default:
				console.log('VarsAPI: Could not file var file for: ', varFileToLoad);
		}

	},
	filterVars: function(varData, searchText, groupSelected) {
		//-------------------
		//- varData :
		//- searchText :
		//- groupSelected :
		//-------------------

		//Handle groupSelected Change
		//Filter passed varListView so only passed "groupSelected" shows
		//or if "All" is passed, show all variables
		let filteredVarData = varData.filter((value, index, arr) => {
				if (value.group === groupSelected || groupSelected === 'All') {
					return true;
				} else {
					return false;
				}
		});

		//Handle search string searching
		if (searchText.length > 0) {
			//convert input string to a regular expression object to pass to match function
			let reSearchString = new RegExp(searchText, "g");
			filteredVarData = filteredVarData.filter(function(item){
				if (item.name) {
					return item.name.toLowerCase().match(reSearchString);
				}
			});
		}

		return filteredVarData;

	}
};
