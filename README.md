# graphql-test

Very first steps with grapql, using [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

## Run it

In order to get the GraphQL API GUI client running, execute:

```bash
# Install dependencies
npm i

# Start the server
npm start
```

Then, navigate to http://localhost:4000

## Project structure

```bash
└── server
    ├── index.js
    ├── lib
    │   ├── methods
    │   │   ├── author
    │   │   │   └── get-authors.js
    │   │   ├── book
    │   │   │   ├── add-book.js
    │   │   │   └── get-books.js
    │   │   └── index.js
    │   ├── resolvers
    │   │   ├── author
    │   │   │   ├── index.js
    │   │   │   ├── mutations
    │   │   │   └── queries
    │   │   │       └── get-authors.js
    │   │   └── book
    │   │       ├── index.js
    │   │       ├── mutations
    │   │       │   └── add-book.js
    │   │       └── queries
    │   │           └── get-books.js
    │   └── schemas
    │       ├── author.js
    │       ├── book.js
    │       └── index.js
    ├── package-lock.json
    └── package.json
```
