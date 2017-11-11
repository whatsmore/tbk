const request = require("request-promise-native");
const querystring = require("querystring");
class MyRequest{
    static async getJsonData(url,params={},method="get")
    {
        return await request[method](`${url}?${querystring.stringify(params)}`,{json:true});
    }
}
module.exports = MyRequest;