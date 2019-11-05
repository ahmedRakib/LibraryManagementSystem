using LibraryManagementSystem.Gateway;
using LibraryManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LibraryManagementSystem.Service
{
    public class BookRepository : IBookRepository
    {
        private ApplicationDbContext _dbContext;
        public BookRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int Delete(int id)
        {
            var book = _dbContext.Books.Find(id);
            if (book != null)
            {
                _dbContext.Books.Remove(book);
            }
            return _dbContext.SaveChanges();
            
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

        public List<Book> GetBooks(string status)
        {
            var books = _dbContext.Books.Where(x => x.Status == status).ToList();

            return books;
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
