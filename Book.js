class Book {
    constructor(id,name,year,quantity,status) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.quantity = quantity;
        this.status = status;
    }

    getId () {
        return this.id;
    }
    getName(){
        return this.name;
    }
    getYear(){
        return this.year;
    }
    getQuantity(){
        return this.quantity;
    }
    getStatus(){
        return this.status;
    }
}