class Magager{

    constructor() {
        this.books = [];
    }

    showlistBook(){
        let html = '';
        for (let i = 0; i < this.books.length; i++) {
            html += '<tr>'
            // html += `<td> ${i+1}</td>`
            html += `<td> ${this.books[i].getId()}</td>`
            html += `<td> ${this.books[i].getName()}</td>`
            html += `<td> ${this.books[i].getYear()}</td>`
            html += `<td> ${this.books[i].getQuantity()}</td>`
            html += `<td> ${this.books[i].getStatus()}</td>`
            html += '</tr>'
        }
        document.getElementById("list-books").innerHTML = html;
    }

    addBook(id,name,year,quantity,status){
        let book = new Book(id,name,year,quantity,status);
        this.books.push(book);
        this.showlistBook();
    }
}