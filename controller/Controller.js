const AbstractFactory = require("../AbstractFactory");
class Controller
{
    constructor()
    {

    }

    getParam(ctx,name,value=null)
    {
        return ctx.query.name===undefined?ctx.query[name]:value;
    } 

    getServer(serverName)
    {
        /*
		*@var ../server/ServerFactory
		*/
        return AbstractFactory.getFactory("server").getServer(serverName);
    }
}
module.exports = Controller;