const joiRouter = require("koa-joi-router");
const AbstractFactory = require("./AbstractFactory");
const homeController = AbstractFactory.getFactory("controller").getController("home");
const userController = AbstractFactory.getFactory("controller").getController("user");
//-------------homeController--------------
const home = joiRouter();
home.get("/", homeController.all());
home.get("/top_hour", homeController.topHour());
home.get("/top_day", homeController.topDay());
home.get("/search", homeController.search());


//--------------userController---------------
const user = joiRouter();
user.prefix("/user");
user.get("/", userController.index());
user.get("/get-user", userController.getUser());



//exports middleware
const routerList = [
    home.middleware(),
    user.middleware()
];
module.exports = routerList;