using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementSystem.Models;

namespace LibraryManagementSystem.Service
{
    public class BookIssueService : IBookIssueService
    {
        private IBookIssueRepository _bookIssueRepository;
        private IBookRepository _bookRepository;
        public BookIssueService(IBookIssueRepository bookIssueRepository, IBookRepository bookRepository)
        {
            _bookIssueRepository = bookIssueRepository;
            _bookRepository = bookRepository;
        }

        public string Save(BookIssue bookIssue)
        {
            string message = "";

            //to check if the book status is free before issuing
            var book = _bookRepository.GetBook(bookIssue.BookId);
            if (book != null)
            {
                if (book.Status == "FREE" || book.Status ==null)
                {
                    //to check if the student already has issued 4 books
                    List<BookIssue> booksIssuedByTheStudent = _bookIssueRepository.GetBookIssueListByStudent(bookIssue.StudentId);
                    if (booksIssuedByTheStudent.Count > 4)
                    {
                        message = "Student Already Issued 4 Books";
                    }
                    else
                    {
                        //to check if student already has issued 2 books in current date
                        List<BookIssue> booksIssuedByTheStudentInCurrentDate = _bookIssueRepository.GetBookIssueListByStudent(bookIssue.IssueDate);
                        if (booksIssuedByTheStudent.Count >= 2)
                        {
                            message = "Student Already Issued 2 Books Today";
                        }
                        else
                        {
                            int rowAffected = _bookIssueRepository.Insert(bookIssue);
                            if (rowAffected > 0)
                            {
                                //updating book status
                                book.Status = "ISSUED";
                                _bookRepository.Update(book);

                                message = "Issued Successfully";
                            }
                            else
                            {
                                message = "Issuing Failed";
                            }
                        }
                    }
                    
                }
                else
                {
                    message = "Book is already issued";
                }
            }
            else
            {
                message = "No Book with this id";
            }

            return message;
            
        }
    }
}
