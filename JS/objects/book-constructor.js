function book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
    this.info = function() {
       console.log(title + ' by ' + author + ', ' + page + ' pages, ' + read)
    }
}

const book1 = new book('The Hobbit', 'JRR Tolkien', '295', 'not read')
book1.info()