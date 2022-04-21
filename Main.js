let bookManager = new Magager();
bookManager.showlistBook();

function save() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let quantity = document.getElementById("quantity").value;
    let status = document.getElementById("status").value;
    bookManager.addBook(id,name,year,quantity,status);
}

