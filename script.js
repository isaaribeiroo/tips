// Alternar Entre Categorias por Botões
function showCategory(categoryId) {
    const blocks = document.querySelectorAll('.category-block');
    blocks.forEach(block => block.classList.remove('active'));

    const activeBlock = document.getElementById(categoryId);
    if (activeBlock) {
        activeBlock.classList.add('active');
    }
}

// Sistema de Like e Deslike
function vote(button, type) {
    const countSpan = button.querySelector('.count');
    let currentCount = parseInt(countSpan.textContent);
    countSpan.textContent = currentCount + 1;
    
    // Desabilita o botão do mesmo tipo no card após o voto
    button.disabled = true;
    button.style.opacity = '0.6';
}

// Alternar Modo Escuro / Claro
const themeToggleBtn = document.getElementById('theme-toggle');
const bgColorInput = document.getElementById('bg-color');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    themeToggleBtn.textContent = isDark ? '☀️ Alternar Modo Claro' : '🌙 Alternar Modo Escuro';
    bgColorInput.value = isDark ? '#2b1b22' : '#ffe6ee';
});

// Alterar Cor de Fundo Dinamicamente
bgColorInput.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});