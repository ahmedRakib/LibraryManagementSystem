using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSystem.Models
{
    public class BookIssue
    {
        [Key]
        public int IssueId { get; set; }

        public int BookId { get; set; }

        public int StudentId { get; set; }

        public DateTime? IssueDate { get; set; }

        public DateTime? ReturnDate { get; set; }

       
    }
}
