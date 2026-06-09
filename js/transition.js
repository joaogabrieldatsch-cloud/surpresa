// Controla a transição entre as telas
function switchScreen(fromScreenId, toScreenId) {
    const fromScreen = document.getElementById(fromScreenId);
    const toScreen = document.getElementById(toScreenId);
    
    if (fromScreen && toScreen) {
        // Remove a classe active da tela atual
        fromScreen.classList.remove('active');
        
        // Adiciona a classe active na nova tela
        toScreen.classList.add('active');
        
        console.log(`Transição concluída: ${fromScreenId} → ${toScreenId}`);
    }
}