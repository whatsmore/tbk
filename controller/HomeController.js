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

    randomGoodsListName(goosList)
    {
        if (goosList && goosList.length>0)
        {
            let key = Math.round(Math.random()*(goosList.length-1));
            return goosList[key].goods_short_title;
        }
        return '';
    }

    all()
    {
        return async(ctx)=>{
            let allRes = await MyRequest.getJsonData(urlConfig.all,{
                app_key:cfg.app_key,
                page:1,
            });
            let goosList = allRes.data;
            let q = this.randomGoodsListName(goosList);
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'all',
                q:q
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
            let q = this.randomGoodsListName(goosList);
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'top_hour',
                q:q
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
            let q = this.randomGoodsListName(goosList);
            return await ctx.render("home/index",{
                goosList:goosList,
                active:'top_day',
                q:q
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