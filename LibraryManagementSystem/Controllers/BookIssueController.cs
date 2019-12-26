using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;
using LibraryManagementSystem.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookIssueController : ControllerBase
    {
        private IBookIssueService _bookIssueService;
        public BookIssueController(IBookIssueService bookIssueService)
        {
            _bookIssueService = bookIssueService;
        }

        [HttpPost]
        public IActionResult Save([FromBody] BookIssue bookIssue)
        {
            string outputMessage = _bookIssueService.Save(bookIssue);

            if (outputMessage == "Issued Successfully")
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
    }
}