const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');

// Daftar pertanyaan dan jawaban sederhana
const questionsAndAnswers = [
    { question: 'halo', answer: 'Hai, ada yang bisa saya bantu?' },
    { question: 'siapa nama kamu', answer: 'Nama saya AI Chatbot.' },
    { question: 'apa kabar', answer: 'Saya baik-baik saja, terima kasih!' },
    { question: 'sampai jumpa', answer: 'Sampai jumpa lagi!' }
];

// Fungsi untuk menampilkan pesan di chat
function displayMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Fungsi untuk mencari jawaban dari pertanyaan
function getAnswer(question) {
    const lowercaseQuestion = question.toLowerCase();
    const match = questionsAndAnswers.find(item => lowercaseQuestion.includes(item.question));
    return match ? match.answer : "Maaf, saya tidak mengerti pertanyaan Anda.";
}

function clearChatMessages() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', clearChatMessages);
}

function handleUserMessage(message) {
  if (message.toLowerCase() === 'reset') {
    clearChatMessages();
    return;
  }

  // Logika chatbot lainnya
  const botResponse = getBotResponse(message);
  displayMessage(botResponse, false);
}

// Event listener untuk tombol kirim
sendButton.addEventListener('click', () => {
    const question = chatInput.value.trim();
    if (question) {
        displayMessage(question, true);
        const answer = getAnswer(question);
        displayMessage(answer);
        chatInput.value = '';
    }
});

// Event listener untuk menekan tombol Enter pada input
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});