using LibraryManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSystem.Service
{
    public class StudentService : IStudentService
    {
        private IStudentRepository _studentRepository;
        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public List<Student> GetStudents()
        {
            return _studentRepository.GetStudents();
        }

        public string Save(Student student)
        {
            int rowAffected = _studentRepository.Insert(student);

            if (rowAffected > 0)
            {
                return "Saved";
            }

            else
            {
                return "Saving Failed";
            }
        }
    }
}
