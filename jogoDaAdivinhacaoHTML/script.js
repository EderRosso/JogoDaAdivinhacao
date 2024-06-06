document.addEventListener('DOMContentLoaded', () => {
    // Recupera o nome do usuário do localStorage
    let username = localStorage.getItem('username');
    // Gera um número aleatório entre 1 e 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // Inicializa o contador de tentativas
    let attempts = 0;

    // Manipulação da tela de boas-vindas
    if (document.getElementById('welcome-form')) {
        // Adiciona um ouvinte de evento para o formulário de boas-vindas
        document.getElementById('welcome-form').addEventListener('submit', (e) => {
            e.preventDefault(); // Evita o envio padrão do formulário
            username = document.getElementById('username').value; // Pega o valor do campo de nome
            if (username) {
                // Se o nome não estiver vazio, armazena os dados no localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('randomNumber', randomNumber);
                localStorage.setItem('attempts', attempts);
                // Redireciona para a tela do jogo
                window.location.href = 'game.html';
            }
        });
    }

    // Manipulação da tela de jogo
    if (document.getElementById('guess-form')) {
        // Recupera dados do localStorage
        username = localStorage.getItem('username');
        randomNumber = Number(localStorage.getItem('randomNumber'));
        attempts = Number(localStorage.getItem('attempts'));

        // Exibe uma mensagem de boas-vindas com o nome do usuário
        document.getElementById('welcome-message').textContent = `Bem-vindo, ${username}!`;

        // Adiciona um ouvinte de evento para o formulário de palpites
        document.getElementById('guess-form').addEventListener('submit', (e) => {
            e.preventDefault(); // Evita o envio padrão do formulário
            const guess = Number(document.getElementById('guess').value); // Pega o valor do palpite
            attempts++; // Incrementa o contador de tentativas
            if (guess === randomNumber) {
                // Se o palpite estiver correto, armazena o número de tentativas e redireciona para a tela de resultado
                localStorage.setItem('attempts', attempts);
                window.location.href = 'result.html';
            } else {
                // Caso contrário, exibe uma mensagem de feedback indicando se o palpite é muito alto ou baixo
                const feedback = guess > randomNumber ? 'Muito alto!' : 'Muito baixo!';
                document.getElementById('feedback').textContent = feedback;
            }
            // Armazena o número de tentativas no localStorage
            localStorage.setItem('attempts', attempts);
        });
    }

    // Manipulação da tela de resultado
    if (document.getElementById('play-again')) {
        // Recupera dados do localStorage
        username = localStorage.getItem('username');
        randomNumber = Number(localStorage.getItem('randomNumber'));
        attempts = Number(localStorage.getItem('attempts'));

        // Exibe o nome do usuário, o número correto e o número de tentativas
        document.getElementById('username').textContent = username;
        document.getElementById('correct-number').textContent = randomNumber;
        document.getElementById('attempts').textContent = attempts;

        // Adiciona um ouvinte de evento para o botão de jogar novamente
        document.getElementById('play-again').addEventListener('click', () => {
            // Remove dados do localStorage e redireciona para a tela de boas-vindas
            localStorage.removeItem('randomNumber');
            localStorage.removeItem('attempts');
            window.location.href = 'index.html';
        });
    }
});
