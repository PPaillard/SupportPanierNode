class CommandLine {
   constructor(name, price, quantity,description){
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
   }
   getTotal(){
      return Math.round((this.quantity * this.price) * 100) / 100;
   }
}

module.exports = CommandLine