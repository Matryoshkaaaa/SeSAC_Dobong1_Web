class House {
    constructor(year,name,window){
        
    }
}






class Shape {
    constructor(row,column){
        this.row = row;
        this.column = column;
    }
    getArea(){
        return this.row*this.column;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());