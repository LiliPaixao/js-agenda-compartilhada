// ========================================
// ATRIBUTOS vs PROPRIEDADES — resumo de estudo
// javascript.info/dom-attributes-and-properties
// ========================================

/*
 * ATRIBUTO = o que está escrito no HTML (sempre string, case-insensitive no nome)
 * PROPRIEDADE = o reflexo do atributo no objeto DOM (JS) — só existe se for padrão
 *               para aquela classe de elemento (ex: HTMLInputElement, HTMLBodyElement)
 *
 * Nem todo atributo vira propriedade:
 *   - Atributo padrão (id, class, href...) -> vira propriedade automaticamente
 *   - Atributo não-padrão (inventado por quem escreveu o HTML) -> NÃO vira propriedade,
 *     mas continua acessível via getAttribute
 *
 * O mesmo nome pode ser padrão em uma tag e não-padrão em outra.
 * Ex: "type" é padrão em <input> (HTMLInputElement), mas não em <body> (HTMLBodyElement)
 */

// Tabela comparativa
// ┌────────────┬────────────────────────────────────┬──────────────────────┐
// │            │ Propriedade                         │ Atributo              │
// ├────────────┼────────────────────────────────────┼──────────────────────┤
// │ Tipo       │ Qualquer valor (número, obj, etc)   │ Sempre string          │
// │ Nome       │ Case-sensitive (className, id)      │ Case-insensitive       │
// └────────────┴────────────────────────────────────┴──────────────────────┘

// Métodos para trabalhar direto com atributos (bypassa a propriedade):
// elem.hasAttribute(name)        -> verifica existência
// elem.getAttribute(name)        -> obtém o valor (sempre string)
// elem.setAttribute(name, value) -> define o valor
// elem.removeAttribute(name)     -> remove o atributo
// elem.attributes                -> coleção iterável de todos os atributos {name, value}

// ----------------------------------------
// SINCRONIZAÇÃO propriedade <-> atributo
// ----------------------------------------

// Caso normal (ex: id): sincroniza nos DOIS sentidos
// let input1 = document.createElement('input');
// input1.setAttribute('id', 'id');
// console.log(input1.id); // 'id' (atributo -> propriedade)

// input1.id = 'newId';
// console.log(input1.getAttribute('id')); // 'newId' (propriedade -> atributo)

// EXCEÇÃO: value sincroniza só em UM sentido (atributo -> propriedade)
// let input2 = document.createElement('input');
// input2.setAttribute('value', 'texto original');
// console.log(input2.value); // 'texto original' (funcionou)

// input2.value = 'o que o usuário digitou';
// console.log(input2.getAttribute('value')); // 'texto original' (NÃO atualizou!)

/*
 * Por que isso é útil (não é bug, é proposital):
 * O atributo "value" guarda o valor ORIGINAL do HTML, intocado, mesmo depois
 * do usuário digitar algo novo no campo. Isso permite implementar um botão
 * "Resetar" de forma simples, sem precisar salvar o valor original numa
 * variável separada:
 *
 *   function resetar() {
 *     input.value = input.getAttribute('value'); // volta pro original
 *   }
 *
 * Se a sincronização fosse nos dois sentidos, o atributo mudaria junto com
 * a propriedade, e o "original" se perderia — o reset viraria inútil.
 */

// ----------------------------------------
// Quando usar ATRIBUTO em vez de PROPRIEDADE
// ----------------------------------------
// Na maioria das vezes, propriedade é preferível (mais direto, tipado).
// Usar atributo só quando:
//   1. Precisar de um atributo não-padrão (mas se começar com "data-", usar dataset)
//   2. Quiser o valor "como está escrito" no HTML — a propriedade pode
//      transformar o valor (ex: href sempre vira URL absoluta na propriedade,
//      mas getAttribute('href') devolve exatamente o que foi digitado)



// document.body.myData = {
//     name: 'Caesar',
//     title: 'Imperator'
// }

// alert(document.body.myData.title)

// document.body.sayTagName = function() {
//     alert(this.tagName)
// }

// document.body.sayTagName()

// Element.prototype.sayHi = function() {
//     alert(`Hello, I'm ${this.tagName}`)
// }
// document.documentElement.sayHi()
// document.body.sayHi()

//alert(document.body.id)
//alert(document.body.something)

//Resumo
//Atributo = o que está escrito no HTML (sempre string, sempre acessível via getAttribute/setAttribute, não diferencia maiúscula/minúscula no nome)
//Propriedade = o reflexo disso no objeto JS (só existe se for padrão pra aquela classe de elemento)

//Regra: atributo padrão → vira propriedade DOM automaticamente. Atributo não-padrão → não vira.
//atributos viram lower case
//tagName viram uppercase

//Pra atributos padrão em geral (como id), propriedade e atributo ficam sincronizados nos dois sentidos.
//value é uma exceção proposital: só sincroniza atributo → propriedade, nunca o contrário — pra preservar o valor original do HTML mesmo depois de o usuário mexer no campo.