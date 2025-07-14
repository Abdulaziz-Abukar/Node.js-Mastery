const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// Step 2: Define GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`);

// Step 3: Define resolvers
// Dummy data
const usersData = [
  { id: "1", username: "cloudstrife", email: "cloud@ff.com" },
  { id: "2", username: "tifa_lockhart", email: "tifa@ff.com" },
];

// Resolvers
const root = {
  users: () => usersData,
  user: ({ id }) => usersData.find((u) => u.id === id),
};

// Step 4: Setup GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL UI
  })
);

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});
