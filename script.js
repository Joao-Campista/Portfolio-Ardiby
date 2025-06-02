// scripts.js

// Função para alternar a cor de fundo e as animações de cores
document.querySelector('body').addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const corR = Math.floor(x * 255);
    const corG = Math.floor(y * 255);
    const corB = Math.floor((1 - x) * 255);

    document.body.style.background = `rgb(${corR}, ${corG}, ${corB})`;
});
