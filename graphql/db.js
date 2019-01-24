export const people = [{
    id: 0,
    name: "delbert",
    age: 28,
    gender: "male"
  },
  {
    id: 1,
    name: "Halloe",
    age: 28,
    gender: "male"
  },
  {
    id: 2,
    name: "KIM",
    age: 28,
    gender: "male"
  },
  {
    id: 3,
    name: "JAY",
    age: 28,
    gender: "male"
  },
  {
    id: 4,
    name: "PARK",
    age: 28,
    gender: "male"
  }
  ]

  export const getById = id => {
      const filteredPeople = people.filter(person => person.id === id);
      return filteredPeople[0];
  }