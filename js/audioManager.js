// Gerenciador central de áudios
const AudioManager = {
    // Lista de todos os áudios do site
    audios: {
        sopro: null,
        surpresa: null,
        confete: null,      // NOVO
        presente: null,    // NOVO
        claps: null
    },

    paths: {
        sopro: 'assets/music/sopro.mp3',
        claps: 'assets/music/claps.mp3',
        feliz: 'assets/music/feliz.mp3',
        surpresa: 'assets/music/surpresa.mp3',
        confete: 'assets/music/confete.mp3',    // NOVO
        presente: 'assets/music/presente.mp3'   // NOVO
    },
    
    // Inicializa e carrega um áudio específico
    carregarAudio(nome) {
        if (!this.audios[nome] && this.paths[nome]) {
            this.audios[nome] = new Audio(this.paths[nome]);
            this.audios[nome].preload = 'auto';
            console.log(`Áudio "${nome}" carregado!`);
        }
        return this.audios[nome];
    },
    
    // Toca um áudio específico
    tocar(nome) {
        const audio = this.carregarAudio(nome);
        if (audio) {
            audio.currentTime = 0;  // Reinicia o som
            audio.play().catch(error => {
                console.log(`Erro ao tocar áudio "${nome}":`, error);
            });
        } else {
            console.log(`Áudio "${nome}" não encontrado!`);
        }
    },
    
    // Para um áudio específico
    parar(nome) {
        const audio = this.audios[nome];
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    },

    

    
    // Pré-carrega todos os áudios (opcional)
    preCarregarTodos() {
        Object.keys(this.paths).forEach(nome => {
            this.carregarAudio(nome);
        });
        console.log('Todos os áudios foram pré-carregados!');
    }
};

