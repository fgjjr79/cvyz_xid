const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('BhK7sQMcAn', uuidlib.v4());
	}

module.exports = generateId
