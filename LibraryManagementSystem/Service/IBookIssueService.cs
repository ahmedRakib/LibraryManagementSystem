using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public interface IBookIssueService
    {
        string Save(BookIssue bookIssue);
    }
}
