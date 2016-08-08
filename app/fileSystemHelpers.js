var exportFuncs = {
    convertArrayOfObjectsToCSV: function (args) {  
        //-------------------------------------------
        //-Accepts in an args object with data, length, columnDelimiter, lineDelimiter variables
        //-Converts the array of objects into a CSV file
        //-------------------------------------------
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data === null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    },
    downloadXML: function(data, filename) {  
        var link, xmlOut;
        var xml = data;
        if (xml === null) return;

        filename = filename || 'export.xml';

        xml = 'data:text/xml;charset=utf-8,' + xml;
        xmlOut = encodeURI(xml);

        link = document.createElement('a');
        link.setAttribute('href', xmlOut);
        link.setAttribute('download', filename);
        var txt = document.createTextNode("Download XML");
        link.appendChild(txt);
        return link;
        //link.click();
    }
};
// function convertArrayOfObjectsToCSV(args) {  
//         var result, ctr, keys, columnDelimiter, lineDelimiter, data;

//         data = args.data || null;
//         if (data == null || !data.length) {
//             return null;
//         }

//         columnDelimiter = args.columnDelimiter || ',';
//         lineDelimiter = args.lineDelimiter || '\n';

//         keys = Object.keys(data[0]);

//         result = '';
//         result += keys.join(columnDelimiter);
//         result += lineDelimiter;

//         data.forEach(function(item) {
//             ctr = 0;
//             keys.forEach(function(key) {
//                 if (ctr > 0) result += columnDelimiter;

//                 result += item[key];
//                 ctr++;
//             });
//             result += lineDelimiter;
//         });

//         return result;
//     }

    // function downloadCSV(args) {  
    //     var data, filename, link;
    //     var csv = convertArrayOfObjectsToCSV({
    //         data: stockData
    //     });
    //     if (csv == null) return;

    //     filename = args.filename || 'export.csv';

    //     if (!csv.match(/^data:text\/csv/i)) {
    //         csv = 'data:text/csv;charset=utf-8,' + csv;
    //     }
    //     data = encodeURI(csv);

    //     link = document.createElement('a');
    //     link.setAttribute('href', data);
    //     link.setAttribute('download', filename);
    //     link.click();
    // }

    // function testMe() {
    //     console.log('test me');
    // }

    // function testMe2() {
    //     console.log('test2 me2');
    // }
    // // module.exports = convertArrayOfObjectsToCSV;
    // // module.exports = downloadCSV;
    module.exports = exportFuncs;
    