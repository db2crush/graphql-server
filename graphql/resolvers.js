const Delbert = {
  name: "delbert",
  age: 28,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => Delbert
  }
};

export default resolvers;
