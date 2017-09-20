using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebApplication2.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name:"defaultApi",
                routeTemplate:"api/{controller}/{id}", 
                defaults: new { id = RouteParameter.Optional });
        }
    }
}