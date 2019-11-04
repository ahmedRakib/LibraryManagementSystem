using LibraryManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSystem.Service
{
    public interface IStudentService
    {
        List<Student> GetStudents();
        string Save(Student student);
    }
}
