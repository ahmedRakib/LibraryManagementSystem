using LibraryManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSystem.Gateway
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
           base(options)
        {

        }

        public DbSet<Book> Books { get; set; }

        public DbSet<BookIssue> BookIssues { get; set; }

        public DbSet<Student> Students { get; set; }
    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().ToTable("Book");
            modelBuilder.Entity<BookIssue>().ToTable("BookIssue");
            modelBuilder.Entity<Student>().ToTable("Student");
        }
    
    }
}
