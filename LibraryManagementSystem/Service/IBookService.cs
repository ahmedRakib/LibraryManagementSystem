using LibraryManagementSystem.Models;
using System.Collections.Generic;

namespace LibraryManagementSystem.Service
{
    public interface IBookService
    {
        string Save(Book book);
        string Edit(Book book);
        List<Book> GetBooks();
        Book GetBook(int id);
        List<Book> GetBooks(string status);
        string Delete(int id);
    }
}
