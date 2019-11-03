using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LibraryManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Student> WeatherForecasts()
        {

            return new List<Student>()
           {
               new Student{ Name= "Rakib"},

                new Student{ Name= "Sakib"},
           };
        }

        public class Student
        {
            public string Name { get; set; }
           
        }
    }
}