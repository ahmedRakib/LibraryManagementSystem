using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public interface IBookRepository
    {
        int Insert(Book book);
        int Update(Book book);
        List<Book> GetBooks();
        Book GetBook(int id);
        List<Book> GetBooks(string status);
    }
}
