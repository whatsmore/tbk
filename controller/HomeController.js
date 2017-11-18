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

    all()
    {
        return async(ctx)=>{
            let allRes = await MyRequest.getJsonData(urlConfig.all,{
                app_key:cfg.app_key,
                page:1,
            });
            let goosList = allRes.data;
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'all',
            });
        };
    }

    topHour()
    {
        return async(ctx)=>{
            let allRes = await MyRequest.getJsonData(urlConfig.top_day,{
                app_key:cfg.app_key,
                page:1,
            });
            let goosList = allRes.data;
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'top_hour',
            });
        };
    }

    topDay()
    {
        return async(ctx)=>{
            let allRes = await MyRequest.getJsonData(urlConfig.top_day,{
                app_key:cfg.app_key,
                page:1,
            });
            let goosList = allRes.data;
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'top_day',
            });
        };
    }

    search()
    {
        return async(ctx)=>{
            let q = this.getParam(ctx,'q','');
            let allRes = await MyRequest.getJsonData(urlConfig.search,{
                app_key:cfg.app_key,
                page:1,
                q:q
            });
            let goosList = allRes.data;
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'search',
                q:q
            });
        };
    }
}

module.exports = HomeController;