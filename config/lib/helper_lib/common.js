

class Common {

	generateResponses(statusCode, status, message, error, result,dataErrorMessages){
            let resObj = {}

            resObj.statusCode = statusCode;
            resObj.status = status;
            resObj.message = message;
            
            if(error) resObj.error = error;
            if(result) resObj.result = result;
            if(dataErrorMessages) resObj.dataErrorMessages = dataErrorMessages;
            return resObj;		
	}
}

module.exports = {
	common: Common
}