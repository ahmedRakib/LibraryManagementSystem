using LibraryManagementSystem.Models;
using System.Collections.Generic;

namespace LibraryManagementSystem.Service
{
    public class BookService : IBookService
    {
        private IBookRepository _bookRepository;
        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public string Delete(int id)
        {

            int rowAffected = _bookRepository.Delete(id);

            if (rowAffected > 0)
            {
                return "Deleted";
            }

            else
            {
                return "Deleting Failed";
            }
        }

        public string Edit(Book book)
        {
            //setting new book status to "Free"
            if (string.IsNullOrWhiteSpace(book.Status))
            {
                book.Status = "FREE";
            }
           
            int rowAffected = _bookRepository.Update(book);

            if (rowAffected > 0)
            {
                return "Updated";
            }

            else
            {
                return "Updating Failed";
            }
        }

        public Book GetBook(int id)
        {
            //return a single book by book id
            if (id > 0)
            {
                return _bookRepository.GetBook(id);
            }
            else
            {
                return null;
            }

        }

        public List<Book> GetBooks(string status)
        {
            //return list of book by book status
            if (!string.IsNullOrWhiteSpace(status))
            {
                return _bookRepository.GetBooks(status);
            }
            else
            {
                return null;
            }
        }

        public List<Book> GetBooks()
        {
            return _bookRepository.GetBooks();
        }

        public string Save(Book book)
        {
            //setting new book status to "Free"
            book.Status = "FREE";

            int rowAffected =_bookRepository.Insert(book);

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
