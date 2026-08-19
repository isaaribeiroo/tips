// Seleção dos elementos DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const bgColorInput = document.getElementById('bg-color');

// Alternar Modo Escuro / Claro
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    themeToggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    
    // Atualiza a cor do input para corresponder ao tema
    bgColorInput.value = isDark ? '#121212' : '#f8f9fa';
});

// Alterar Cor de Fundo Dinamicamente
bgColorInput.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
});