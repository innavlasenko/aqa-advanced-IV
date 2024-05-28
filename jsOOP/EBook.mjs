import { Book } from './Book.mjs';

export class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year),
            this.format = format
    }
    static createEbook(book, format) {
        const eBook = new EBook(book.title, book.author, book.year, format);
        return eBook;
    };

    get format() {
        return this._format;
    };

    set format(format) {
        if (format.includes('web')) throw new Error(`Incorrect format`);
        this._format = format
    };

    printinfo() {
        console.log(`This book - ${this.title} was written by ${this.author} in ${this.year}, available in ${this.format}`)
    };
}

