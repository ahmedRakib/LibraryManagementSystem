using LibraryManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        [HttpPost]
        public IActionResult Save([FromBody] Book book) 
        {

            return Ok("Saved");
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {

            return new List<Book>()
            {
                new Book{ Author = "Rakib", Title="Ice and Fire", Price = 230, BookId=1},
                new Book{ Author = "Rakib", Title="Ice and Fire", Price = 230, BookId=1},
            };

        }
    }
}