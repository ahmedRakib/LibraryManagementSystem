using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public interface IBookIssueRepository
    {
        int Insert(BookIssue bookIssue);
        List<BookIssue> GetBookIssueListByStudent(int studentId);
        List<BookIssue> GetBookIssueListByStudent(DateTime? issueDate);
    }
}
