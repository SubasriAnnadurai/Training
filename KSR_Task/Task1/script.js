const questions = [
    { question: "Which method is used to remove the last element from an array?", options: ["pop()", "shift()", "push()", "unshift()"], correct: 0 },
    { question: "Which method is used to join all elements of an array into a string?", options: ["join()", "concat()", "slice()", "splice()"], correct: 0 },
    { question: "Which method creates a new array with all elements that pass a test?", options: ["filter()", "map()", "reduce()", "forEach()"], correct: 0 },
    { question: "Which of the following is not a valid JavaScript data type?", options: ["Number", "String", "Float", "Boolean"], correct: 2 },
    { question: "What will the following code output: `console.log(3 + '3')`?", options: ["33", "6", "NaN", "Error"], correct: 0 }
  ];
  
  let users = [];
  let currentUser = {};
  
  function startQuiz() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
  
    if (!username || !email) {
      alert("Please fill in all fields.");
      return;
    }
  
    currentUser = { name: username, email: email, score: 0 };
  
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");
  
    loadQuestions();
  }
  
  function loadQuestions() {
    const container = document.getElementById("questionContainer");
    container.innerHTML = "";
  
    questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `<p><strong>${index + 1}.</strong> ${q.question}</p>`;
  
      q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type='radio' name='question${index}' value='${i}'> ${option}`;
        div.appendChild(label);
      });
  
      container.appendChild(div);
    });
  }
  
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const answer = document.querySelector(`input[name='question${index}']:checked`);
      if (answer && parseInt(answer.value) === q.correct) {
        score++;
      }
    });
  
    currentUser.score = score;
    updateUserScore(currentUser);
  
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");
  
    displayResult();
  }
  
  function updateUserScore(user) {
    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
      if (user.score > existingUser.score) {
        existingUser.score = user.score;
      }
    } else {
      users.push(user);
    }
  
    users.sort((a, b) => b.score - a.score);
  }
  
  function displayResult() {
    const container = document.getElementById("resultContainer");
    container.innerHTML = "";
  
    questions.forEach((q, index) => {
      const userAnswer = document.querySelector(`input[name='question${index}']:checked`);
      const userAnswerText = userAnswer ? q.options[parseInt(userAnswer.value)] : "No Answer";
  
      container.innerHTML += `<p>${index + 1}. ${q.question}<br>
        <strong>Correct Answer:</strong> ${q.options[q.correct]}<br>
        <strong>Your Answer:</strong> ${userAnswerText}</p>`;
    });
  }
  
  function viewDashboard() {
    document.getElementById("resultPage").classList.add("hidden");
    document.getElementById("dashboardPage").classList.remove("hidden");
  
    const container = document.getElementById("dashboardContainer");
    container.innerHTML = "";
  
    users.forEach((user, index) => {
      container.innerHTML += `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.score}</td>
        <td>${index + 1}</td>
      </tr>`;
    });
  }
  