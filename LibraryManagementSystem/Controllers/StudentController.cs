using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;
using LibraryManagementSystem.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpPost]
        public IActionResult Save([FromBody] Student student)
        {
            //_dbContext.Students.Add(student);
            //_dbContext.SaveChanges();

            var message = _studentService.Save(student);

            return Ok(message);
        }

        [HttpGet]
        public IEnumerable<Student> Get()
        {

            var studetns = _studentService.GetStudents();

            return studetns;

        }

    }

}