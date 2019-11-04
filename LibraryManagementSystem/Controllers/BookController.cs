using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;
using LibraryManagementSystem.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private IBookService _bookService; 
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpPost]
        public IActionResult Save([FromBody] Book book) 
        {


            var message =_bookService.Save(book);

            return Ok(message);
        }

        [HttpPut]
        public IActionResult Edit([FromBody] Book book)
        {
            var message = _bookService.Edit(book);

            return Ok("Edit");
        }


        [HttpGet]
        public IEnumerable<Book> Get()
        {
            var books = _bookService.GetBooks();

            return books;
        }


        [HttpGet("{id}")]
        public Book Get(int id)
        {
            var book = _bookService.GetBook(id);

            return book;

        }
    }
}