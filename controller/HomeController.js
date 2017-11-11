const Controller = require("./Controller");
const MyRequest = require("../tools/MyRequest");
const cfg = require("../config/global");
const urlConfig = require("../config/urlConfig");
class HomeController extends Controller
{
    constructor()
    {
        super();
    }

    index()
    {
        return async(ctx)=>{
            let allRes = await MyRequest.getJsonData(urlConfig.all,{
                app_key:cfg.app_key,
                page:1,
            });
            let goosList = allRes.data;
            return await ctx.render("home/index",{goosList});
        };
    }
}

module.exports = HomeController;