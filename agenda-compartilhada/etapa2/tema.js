// tema.js — controla SOMENTE o atributo data-theme e o localStorage.
// Não conhece eventos, calendário ou qualquer coisa de agenda.js.
(function () {
    'use strict';

    var CHAVE_STORAGE = 'agenda-tema';
    var TEMA_PADRAO = 'planner';
    var TEMAS_VALIDOS = ['planner', 'boho', 'editorial'];

    function temaSalvo() {
        var tema;
        try {
            tema = localStorage.getItem(CHAVE_STORAGE);
        } catch (erro) {
            tema = null;
        }
        return TEMAS_VALIDOS.indexOf(tema) !== -1 ? tema : TEMA_PADRAO;
    }

    function aplicarTema(tema) {
        document.documentElement.setAttribute('data-theme', tema);
    }

    function salvarTema(tema) {
        try {
            localStorage.setItem(CHAVE_STORAGE, tema);
        } catch (erro) {
            // localStorage indisponível (modo privado, etc.) — segue sem persistir
        }
    }

    // Aplica imediatamente, antes da primeira pintura da página,
    // para a tela não "piscar" com o tema errado por uma fração de segundo.
    aplicarTema(temaSalvo());

    // O controle (botões) só existe depois que o <body> for parseado,
    // então a ligação dos cliques espera o DOM ficar pronto.
    document.addEventListener('DOMContentLoaded', function () {
        var atual = temaSalvo();
        var botoes = document.querySelectorAll('[data-theme-choice]');

        botoes.forEach(function (botao) {
            botao.classList.toggle('is-active', botao.dataset.themeChoice === atual);

            botao.addEventListener('click', function () {
                var tema = botao.dataset.themeChoice;
                if (TEMAS_VALIDOS.indexOf(tema) === -1) return;

                aplicarTema(tema);
                salvarTema(tema);

                botoes.forEach(function (b) {
                    b.classList.toggle('is-active', b === botao);
                });
            });
        });
    });
})();
