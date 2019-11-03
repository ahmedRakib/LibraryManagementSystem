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

        [HttpPut]
        public IActionResult Edit([FromBody] Book book)
        {

            return Ok("Edit");
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


        [HttpGet("{id}")]
        public Book Get(int id)
        {

            return new Book()
            {
                Author = "Rakib", Title="Ice and Fire", Price = 230, BookId=1,
            };

        }
    }
}