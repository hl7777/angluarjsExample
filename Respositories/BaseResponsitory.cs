using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Respositories
{
    public abstract class BaseResponsitory:IDisposable
    {
        protected testEntities ctx = new testEntities();

        public BaseResponsitory() { }
        public BaseResponsitory(testEntities context)
        {
            ctx = context;
        }

        public void Dispose()
        {
            ctx.Database.Connection.Close();
            ctx.Dispose();
        }
    }


}