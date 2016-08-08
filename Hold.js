var jsonData = require('./variables.js');
var tstExport = require('./fileSystemHelpers.js');
var js2xml = require('js2xmlparser');

console.log("App Start");

var salesFlash = jsonData.Variables.SALESFLASH;
var common = jsonData.Variables.COMMON;
var advertisingAnalytix = jsonData.Variables.ADVERTISINGANALYTIX;

var commonVarNames = salesFlash.map(function(obj){
	console.log(obj.name);
	return ("<li>" + obj.name + "</li>");
});

console.log(commonVarNames.join(" "));

document.getElementById('json').innerHTML = "<ul>" + commonVarNames.join(" ") + "</ul>"; //jsonData.Variables.QVD_ALL[0].Name;


//console.log(tstExport.convertArrayOfObjectsToCSV({data: qvdall}));
var xmlVars = '';
var theLink;

xmlVars = js2xml("VARS", jsonData.Variables);
theLink = tstExport.downloadXML(xmlVars, 'xmlVars.xml');

var  dlDiv;
dlDiv = document.getElementById('dl');
dlDiv.appendChild(theLink);
console.log('done');


// function handleJSON(data) {
// 	console.log(data);
// 		var template = $('#vars').html();
// 		console.log(template);
// 		var html = Mustache.to_html(template, data);
// 		console.log(html);

// 		$('#json').html(html);
// 	}
// $(function(){
// /*	$.getJSON('variable_full.json', function(data){
// 		var template = $('#vars').html();
// 		var html = Mustache.to_html(template, data)
// 		$('#json').html(html);
// 	});*/

// });
// var elem = document.getElementById("json");

// function handleJSON(vars) {
// //	console.log(vars.Variables);
// 	var objArray = vars.Variables;
// 	// var nameArray = objArray.map(function(obj) {
// 	// 	console.log(obj.Name);
// 	// 	var list = '<li>' + obj.Name + '</li>';
// 	// 	return list;
// 	// });
// 	// console.log(nameArray);
// 	var list = '';
// 	objArray.forEach(function(obj){
// 		list += '<li>' + obj.Name + '</li>';
// 		console.log(list);
// 	});
// 	elem.innerHTML = list;
// }