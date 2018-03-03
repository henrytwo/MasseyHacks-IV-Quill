module.exports = {


    csvValidation: function(data, callback) {

        String.prototype.replaceAll = function(str1, str2, ignore)
        {
            return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
        }
  	
  	// If given data is not an array
  	if(typeof data === "string" && data.trim().match(/^["=\-+@]/)){
  	    var tab = !data.includes('"');

  	    data = data.replaceAll('"', "'");

  		data = (tab ?  "\t" : "") + data;
  		return callback(data);
  	}

    for (column in data) {
    	if(typeof data[column] === "string" && data[column].trim().match(/^["=\-+@]/)) {

    	    var tab = !data[column].includes('"');

    	    data[column] = data[column].replaceAll('"', "'");

    		data[column] = (tab ?  "\t" : "") + data[column];
    	}
    }
     callback(data);
}
};