document.addEventListener('DOMContentLoaded', () => {
    const socialMediaContainer = document.getElementById('social-media-container');

    const socialMediaLogos = [
        { src: 'img/tiktok-logo.png', alt: 'TikTok' },
        { src: 'img/whatsapp-logo.png', alt: 'WhatsApp' },
        { src: 'img/instagram-logo.png', alt: 'Instagram' },
        { src: 'img/facebook-logo.png', alt: 'Facebook' }
    ];

    socialMediaLogos.forEach(logo => {
        const logoDiv = document.createElement('div');
        logoDiv.classList.add('social-media-logo');

        const img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.alt;

        logoDiv.appendChild(img);
        socialMediaContainer.appendChild(logoDiv);
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        alert('Usuário: ${username}\nSenha: ${password}');
    });
});