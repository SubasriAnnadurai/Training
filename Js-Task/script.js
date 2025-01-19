const employees = [
  { id: 1, name: "John", age: 28, department: "HR" },
  { id: 2, name: "Jane", age: 34, department: "Finance" },
  { id: 3, name: "Mike", age: 25, department: "IT" },
  { id: 4, name: "Emma", age: 30, department: "Marketing" },
  { id: 5, name: "Chris", age: 40, department: "Operations" },
  { id: 6, name: "Sophia", age: 29, department: "HR" },
  { id: 7, name: "Daniel", age: 32, department: "Finance" },
  { id: 8, name: "Olivia", age: 27, department: "IT" },
  { id: 9, name: "Liam", age: 35, department: "Sales" },
  { id: 10, name: "Noah", age: 26, department: "Logistics" },
];

const tbody = document.getElementById("tbody");
employees.forEach((emp) => {
  let row = document.createElement("tr");
  Object.keys(emp).forEach((key) => {
    let data = document.createElement("td");
    data.textContent = emp[key];
    row.appendChild(data);
  });
  tbody.appendChild(row);
});

const tbody2 = document.getElementById("tbody2");
const data = [
  {
    id: 1,
    name: "John",
    tasks: [
      { taskId: 101, description: "Complete report", status: "Pending" },
      { taskId: 102, description: "Review code", status: "Completed" },
    ],
  },
  {
    id: 2,
    name: "Jane",
    tasks: [
      { taskId: 103, description: "Prepare slides", status: "In Progress" },
      { taskId: 104, description: "Team meeting", status: "Pending" },
    ],
  },
];

data.forEach((dat) => {
  dat.tasks.forEach((task) => {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = dat.name;

    let taskDes = document.createElement("td");
    taskDes.textContent = task.description;

    let status = document.createElement("td");
    status.innerText = task.status;

    row.appendChild(name);
    row.appendChild(taskDes);
    row.appendChild(status);

    tbody2.appendChild(row);
  });
});












document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
      e.preventDefault();
      alert("Ctrl + S is disabled.");
    }
  });
  