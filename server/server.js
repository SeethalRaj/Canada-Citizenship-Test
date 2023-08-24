const express = require('express')
const app=express()

const questions = [
    {
      id: 1,
      question: 'What is the importance of 15th February?',
      options: ['Sir John A. MacDonald Day', 'Vimy Day', 'Sir Wilfrid Laurier Day', 'National Flag of Canada Day'],
      answer: 3, // Index of the correct answer (0-based)
    },
    {
      id: 2,
      question: 'Who is Canada s Head of State??',
      options: ['The Governor General', 'His Majesty King Charles III', 'The Prime Minister', 'The Senate'],
      answer: 1,
    },
    {
      id: 3,
      question: 'What is the capital city of Manitoba?',
      options: ['Thomson', 'Winnipeg', 'Portage la Prairie', 'Brandon'],
      answer: 1,
    },
    {
      id: 4,
      question: 'When did Nunavut become a territory?',
      options: ['1989', '2000', '1999', '2001'],
      answer: 2,
    },
  ];

app.get("/api/questions", (req,res)=>{
    const randomQuestions=getRandomQuestion();
    res.json(randomQuestions);
})

app.listen(5000, () => {console.log("Server started on port 5000")})

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }