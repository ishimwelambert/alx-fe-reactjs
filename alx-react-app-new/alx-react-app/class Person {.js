class Person {
    constructor(name, age) {
      this.name = name; // properties
      this.age = age;
    }
  
    // Method
    sayHello() {
      return `Hello, my name is ${this.name}!`;
    }
  }
  
  // Creating an instance of Person
  const person1 = new Person('Alice', 25);
  console.log(person1.sayHello()); // Output: Hello, my name is Alice!
  class car{
    constructor(name,id){
        this.brand=name
        this.id=id
    }
  }
  let mycar=new car("ford",123)
  console.log(mycar)
  class moto{
    constructor(name){
        this.brand=name
    }

  }
  class people{
    constructor(name){
        this.person=name
    }
  }
  class person{
    constructor(name,age,school){
        this.name=name
        this.age=age
        this.school=school
    }
  }
  let person2= new person("ISHIMWE",25,"AUCA")
  console.log(person2)
  class book{
    constructor(title,author){
    this.title=title
    this.author=author
    }
  }
  let book1= new book("new world","albert eisten")
  console.log(book1)
  class product{
    constructor(item,price){
        this.item=item
        this.price=price
    }
  }
  let product1= new product("maize","$50")
  let product2=new product("rice","$7")
  console.log(product1)
  console.log(product2)
  
