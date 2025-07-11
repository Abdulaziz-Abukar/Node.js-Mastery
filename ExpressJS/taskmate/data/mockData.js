const users = [
  { id: 1, name: "Abdulaziz", email: "abdul@email.com" },
  { id: 2, name: "Hassan", email: "hassan@email.com" },
];

const userTasks = {
  1: [
    { id: 1, title: "Learn Express.js", completed: true },
    { id: 2, title: "Build TaskMate", completed: false },
  ],
  2: [
    { id: 1, title: "Review JavaScript", completed: true },
    { id: 2, title: "Submit resume", completed: false },
  ],
};

module.exports = { users, userTasks };
