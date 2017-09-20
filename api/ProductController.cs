using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Respositories;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebApplication2.api
{
    public class ProductController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {            
            var rep = new ProductResponsitory();
            var products = rep.GetAll();
            return Json(products, GetSetting());
        }

        public IHttpActionResult Post(Product product)
        {
            var rep = new ProductResponsitory();
            rep.Create(product);
            return Json(product, GetSetting());
        }

        public IHttpActionResult Put(Product product)
        {
            var rep = new ProductResponsitory();
            rep.Update(product);

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var rep = new ProductResponsitory();
            rep.DeleteById(id);

            return Ok();
        }

        private JsonSerializerSettings GetSetting()
        {
            var setting = new JsonSerializerSettings();
            setting.ContractResolver = new CamelCasePropertyNamesContractResolver();
            return setting;
        }
    }
}