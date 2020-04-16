using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackendSample.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class JsItemsController : ApiController
    {
        public IHttpActionResult Get()
        {
            var data = new MyData();

            data.items = new List<string>()
            { 
                "red", "yellow" , "blue"
            };

            

            return Ok(data);
        }
    }

    internal class MyData
    {
        public MyData()
        {
        }

        public List<string> items { get; set; }
    }
}
