class Animal {
  constructor(name, gender, disease = "None") {
    this.name = name;       // Animal's name
    this.gender = gender;   // Male / Female
    this.disease = disease; // e.g., Rabies, Flu, None
  }

  walk() {
    return `${this.name} is walking.`;
  }

  eat(food) {
    return `${this.name} is eating ${food}.`;
  }

  climb(object) {
    return `${this.name} is climbing the ${object}.`;
  }

  getDetails() {
    return `
    Name: ${this.name}
    Gender: ${this.gender}
    Disease: ${this.disease}
    `;
  }
}

// Example usage:
const animal1 = new Animal("Leo", "Male", "None");

console.log(animal1.walk());
console.log(animal1.eat("meat"));
console.log(animal1.climb("tree"));
console.log(animal1.getDetails());