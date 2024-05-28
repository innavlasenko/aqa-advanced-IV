import { Book } from './Book.mjs';
import { EBook } from './EBook.mjs';

const book = new Book('Friends, Lovers and the Big Terrible Thing', 'Matthew Perry', 2024);
const book1 = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 1997);
const book2 = new EBook('Fantastic Beasts and Where to Find Them', 'J.K. Rowling', 2017, 'txt');
const book3 = new EBook("Dumbledore: The Life and Lies of Hogwarts's Renowned Headmaster", 'Irvin Khaytman', 2021, 'PDF');

const books = [
    { title: "Fantastic Beasts and Where to Find Them", author: "J.K. Rowling", year: 2017 },
    { title: "Dumbledore: The Life and Lies of Hogwarts's Renowned Headmaster", author: "Irvin Khaytman", year: 1921 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "Friends, Lovers and the Big Terrible Thing", author: "Matthew Perry", year: 2024, }
];

book.printinfo();
book1.printinfo();
book2.printinfo();
book3.printinfo();

const oldestBook = Book.oldestBook;
console.log(oldestBook(books));

const newBook = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 1997);
const myEbook = EBook.createEbook(newBook, 'PDF');
console.log(myEbook);