export class Book {
    constructor(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year
    }
    static oldestBook(books) {
        let oldestBook = books[0];
        for (const book of books) {
            if
                (book.year < oldestBook.year) {
                oldestBook = book
            }
        }
        return oldestBook;
    };
    get title() {
        return this._title;
    };

    set title(title) {
        if (title.includes('Inna')) throw new Error(`There is correct book`);
        this._title = title
    };

    get author() {
        return this._author;
    };

    set author(author) {
        if (author.includes('Inna Vlasenko')) throw new Error(`Should be great book`);
        this._author = author
    };

    get year() {
        return this._year;
    };

    set year(year) {
        if (year < 1925) throw new Error(`Book is too old book`);
        this._year = year;
    };

    printinfo() {
        console.log(`This book - ${this.title} was written by ${this.author} in ${this.year}`)
    };
}
