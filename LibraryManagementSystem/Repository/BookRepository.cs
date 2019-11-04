using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementSystem.Service
{
    public class BookRepository : IBookRepository
    {
        private ApplicationDbContext _dbContext;
        public BookRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Book GetBook(int id)
        {
            var book = _dbContext.Books.Find(id);

            return book;
        }

        public List<Book> GetBooks()
        {
            //return all books
            return _dbContext.Books.ToList();
        }

        public int Insert(Book book)
        {
            //insert
            _dbContext.Books.Add(book);
            return _dbContext.SaveChanges();
        }

        public int Update(Book book)
        {
            //update
            _dbContext.Entry(book).State = EntityState.Modified;
            return _dbContext.SaveChanges();

        }
    }
}
