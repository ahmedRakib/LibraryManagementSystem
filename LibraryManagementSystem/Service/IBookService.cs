using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public interface IBookService
    {
        string Save(Book book);
        string Edit(Book book);
        List<Book> GetBooks();
        Book GetBook(int id);
    }
}
