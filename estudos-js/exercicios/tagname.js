// ========================================
// tagName vs nodeName — resumo de estudo
// javascript.info/basic-dom-node-properties
// ========================================

/*
 * tagName e nodeName retornam o nome da tag de um elemento.
 * Para elementos HTML, o navegador SEMPRE retorna em MAIÚSCULO,
 * não importa como foi escrito no HTML original.
 */

console.log(document.body.tagName);  // "BODY"
console.log(document.body.nodeName); // "BODY"

// <body>, <Body> ou <BODY> no HTML -> sempre "BODY" no JS.
// Isso é uma normalização do HTML DOM, não é o texto "cru" do HTML.

// ----------------------------------------
// tagName vs nodeName — qual a diferença então?
// ----------------------------------------

/*
 * tagName  -> só existe em nós do tipo Elemento (nodeType === 1)
 * nodeName -> existe em QUALQUER tipo de nó (elemento, texto, comentário...)
 *             - para elementos, se comporta igual a tagName
 *             - para outros tipos de nó, retorna algo diferente
 */

console.log(document.body.firstChild.nodeName); // ex: "#text" (nó de texto)
// document.body.firstChild.tagName -> undefined (nós de texto não têm tagName)

// Regra prática: se você já sabe que é um elemento, tagName é suficiente.
// nodeName é mais genérico, útil quando o tipo do nó pode variar.

// ----------------------------------------
// HTML vs XML: maiúsculo não é universal
// ----------------------------------------

/*
 * Essa normalização para maiúsculo é uma regra do modo HTML do DOM.
 * Em documentos XML (ou XHTML processado como XML), tagName preserva
 * o case original exatamente como foi escrito.
 *
 * Ou seja: "sempre maiúsculo" vale para páginas HTML comuns,
 * que é o caso do dia a dia no browser.
 */

// ----------------------------------------
// Não confundir com atributos (ver atributo.js)
// ----------------------------------------

/*
 * tagName/nodeName -> nome da TAG, sempre maiúsculo em HTML.
 * Nome de ATRIBUTO (id, class, data-*...) -> normalizado para MINÚSCULO,
 * e é case-insensitive na leitura (getAttribute('ABOUT') acha 'about').
 *
 * São duas normalizações diferentes, para coisas diferentes:
 * uma é o nome da tag, a outra é o nome do atributo.
 */