using LibraryManagementSystem.Models;
using LibraryManagementSystem.Service;
using Microsoft.AspNetCore.Mvc;
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


            var outputMessage = _bookService.Save(book);

            if (outputMessage == "Saved")
            {
                var messageModel = new[] {
                        new {

                            message = outputMessage,
                            status = 200
                            }
                        }.ToList();

                return Ok(messageModel);
            }
            else
            {
                var messageModel = new[] {
                        new {

                            message = outputMessage,
                            status = 500
                            }
                        }.ToList();

                return Ok(messageModel);
            }

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

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            string message = _bookService.Delete(id);

            return Ok(message);

        }

        [HttpGet("GetByStatus/{status}")]
        public List<Book> GetByStatus(string status)
        {
            var book = _bookService.GetBooks(status);

            return book;

        }
    }
}