// Store questions and answers in variables
const questions = [
    "What does HTML stand for?",
    "Which keyword is used to declare a constant in JavaScript?",
    "What is the output of: typeof 42?",
    "Which method is used to access an element by ID?",
    "What does BOM stand for?"
];

const correctAnswers = [
    "hypertext markup language",
    "const",
    "number",
    "getelementbyid",
    "browser object model"
];

// Function to check answers and calculate score
function checkAnswers() {
    // Get user answers
    const userAnswers = [
        document.getElementById('q1').value.trim().toLowerCase(),
        document.getElementById('q2').value.trim().toLowerCase(),
        document.getElementById('q3').value.trim().toLowerCase(),
        document.getElementById('q4').value.trim().toLowerCase(),
        document.getElementById('q5').value.trim().toLowerCase()
    ];

    let score = 0;

    // Check each answer and provide feedback
    for (let i = 0; i < correctAnswers.length; i++) {
        const feedbackElement = document.getElementById(`feedback${i + 1}`);

        if (userAnswers[i] === correctAnswers[i]) {
            score++;
            feedbackElement.textContent = "✓ Correct!";
            feedbackElement.className = "feedback correct";
        } else {
            feedbackElement.textContent = `✗ Incorrect. The correct answer is: ${correctAnswers[i]}`;
            feedbackElement.className = "feedback incorrect";
        }
    }

    // Display score
    document.getElementById('score').textContent = score;

    // Display message based on score using conditional statements
    const messageElement = document.getElementById('message');
    if (score === 5) {
        messageElement.textContent = "🎉 Excellent! Perfect score!";
    } else if (score >= 3) {
        messageElement.textContent = "👍 Good job! Keep learning!";
    } else {
        messageElement.textContent = "📚 Keep practicing! You'll do better next time!";
    }

    // Show result container
    document.getElementById('result-container').style.display = 'block';

    // Show confirmation message
    alert(`Quiz submitted! Your score: ${score}/5`);
}

// Function to reset quiz
function resetQuiz() {
    // Clear all input fields
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`q${i}`).value = '';
        document.getElementById(`feedback${i}`).textContent = '';
    }

    // Reset score and message
    document.getElementById('score').textContent = '0';
    document.getElementById('message').textContent = '';

    // Hide result container
    document.getElementById('result-container').style.display = 'none';
}

// Initialize - hide result container initially
document.getElementById('result-container').style.display = 'none';