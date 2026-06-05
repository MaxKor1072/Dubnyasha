// Предопределённые пользователи
const users = [
    { username: "user1", password: "pass1", role: "user" },
    { username: "user2", password: "pass2", role: "user" },
    { username: "admin", password: "admin", role: "admin" }
];

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('login-error');

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Сохраняем сессию
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('role', user.role);
        // Перенаправляем на игру
        window.location.href = 'index.html';
    } else {
        errorDiv.textContent = 'Неверный логин или пароль';
        errorDiv.style.display = 'block';
    }
});