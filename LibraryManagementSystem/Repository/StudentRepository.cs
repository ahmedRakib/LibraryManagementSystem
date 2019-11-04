using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public class StudentRepository : IStudentRepository
    {
        private ApplicationDbContext _dbContext;
        public StudentRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Student> GetStudents()
        {
            return _dbContext.Students.ToList();
        }

        public int Insert(Student student)
        {
            //insert
            _dbContext.Students.Add(student);
            return _dbContext.SaveChanges();
        }
    }
}
