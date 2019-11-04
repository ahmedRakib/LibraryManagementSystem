using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSystem.Service
{
    public class BookIssueRepository : IBookIssueRepository
    {
        private ApplicationDbContext _dbContext;
        public BookIssueRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<BookIssue> GetBookIssueListByStudent(int studentId)
        {
            var noOfIssuedBooks = _dbContext.BookIssues.Where(i => i.StudentId == studentId).ToList();

            return noOfIssuedBooks;
        }

        public List<BookIssue> GetBookIssueListByStudent(DateTime? issueDate)
        {
            var noOfIssuedBooks = _dbContext.BookIssues.Where(i => i.IssueDate == issueDate).ToList();

            return noOfIssuedBooks;
        }

        public int Insert(BookIssue bookIssue)
        {
            //insert
            _dbContext.BookIssues.Add(bookIssue);
            return _dbContext.SaveChanges();
        }
    }
}
