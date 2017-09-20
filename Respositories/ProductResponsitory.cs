using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Respositories
{
    public class ProductResponsitory:BaseResponsitory
    {
        public IQueryable<Product> GetAll()
        {
            return ctx.Products.AsQueryable();
        }

        public void Create(Product product)
        {
            ctx.Products.Add(product);
            ctx.SaveChanges();
        }

        public void Update(Product product)
        {
            var p = ctx.Products.FirstOrDefault(x => x.Id == product.Id);
            p.Name = product.Name;
            ctx.SaveChanges();
        }

        public void DeleteById(int id)
        {
            var product = ctx.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                ctx.Products.Remove(product);
                ctx.SaveChanges();
            }
        }
    }
}