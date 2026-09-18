
let proximoID = 1

let events =  localStorage.getItem('events')

if (events !== null ){
    //pega o que tem salvo lá
   events = JSON.parse(events)

    //pegar somente o id do array de objetos e retorá-lo com o map
    const idsExistentes = events.map(n => n.id )

    //pegar o maior valor do id com Math.max
    let idBiggest = Math.max(...idsExistentes)

    //o próximo id  deveria ser o maior id +1
    proximoID = idBiggest + 1

} else {
    events = [
    { id: gerarID(), title: 'Reunião de escola', event_date: '2026-07-01', event_time: '15:00',created_at: Date.now()  , created_by: 'Liliane' },
    { id: gerarID(), title: 'Apresentação do coral', event_date: '2026-07-05', event_time: '11:40', created_at: Date.now()  , created_by: 'Liliane' },
    { id: gerarID(), title: 'Psicóloga', event_date: '2026-07-10',event_time: '8:00', created_at:Date.now()  , created_by: 'Liliane' },
]
}


function gerarID() {
    return proximoID++
}

function createEvent(title, event_date, created_by, event_time) {
    if (!title || !event_date || !event_time) {
        console.error('Título, data e horário são obrigatórios')
        return
    }
    const id = gerarID()
    const newEvent = { id, title, event_date, event_time, created_at: Date.now(), created_by}
    events = [...events, newEvent]
    saveEvent()
    return newEvent
}

function listEvents(){
    return events
}

function updateEvent( id, changes){
    // essa função precisa receceber o campo id
    // id, created_date, created_by vem do sistema 
    if (!id ) {
        console.error('Id não existente')
        return
    }
    
    const eventFounds = events.find( n => n.id === id)
    if (!eventFounds) {
        console.error('Informe um id válido')
        return
    }
   
    //o usuário modifica title, event_date, event_time
    //eventFounds: id, title, event_date, created_at, created_by
    //changes: o que eu quero mudar e quero sobrescrever
    let eventFoundUpdated = { ...eventFounds, ...changes, id:eventFounds.id, created_at:eventFounds.created_at, created_by:eventFounds.created_by}
    
    const eventsUpdated =  events.map(item =>{
        if(item.id === id) {
            return eventFoundUpdated
        } else {
            return item
        }
    })
    events = eventsUpdated
    saveEvent()
    return events
}

function deleteEvent ( id ) {

    if (!id) {
        console.error('Id não encontrado')
        return 
    }

    events = events.filter( n => n.id !== id)
    saveEvent()
    return events
}

function saveEvent(){
    //salva
   localStorage.setItem('events',JSON.stringify(events))
}

function  searchByTitle(title){

    let eventsTitle
    //procura pelo título no array de objetos de titles
    eventsTitle = events.filter(n => n.title.toUpperCase().includes(title.toUpperCase()))
    
    return eventsTitle
}

//devolve os eventos de uma data
function searchByDate(date){
    let eventsDate

    eventsDate = events.filter(n =>n.event_date.includes(date))
    return eventsDate
}

//Exportar dados da agenda como JSON
function exportJSON(){
    return JSON.stringify(events)
}

//Importar dados da agenda
function importJSON(json){
   events = JSON.parse(json)
   saveEvent()
   return events
}

function esc(string){
    if(!string){
        return
    }
    //replace texto em objeto
    const escape = string.replaceAll('<' , '&lt;').replaceAll('>', '&gt;')
    return escape
}



function criarMes(ano, mes){
    //quantos dias tem o mês passado - me dá o último dia ex:31
    const ultimoDia = new Date(ano, mes + 1, 0).getDate()

    //traz dia da semana  que o mês começa
    //0=dom, 1=seg,2=ter, 3=qua, 4=qui, 5=sex, 6=sab, 7=dom
    const diaSemanaInicio = new Date(ano, mes, 1).getDay()

    //Inicia com array vazio
    let diasMes = []
    //dias vazios
    for (let diaVazio = 0; diaVazio < diaSemanaInicio; diaVazio++){
        let div = document.createElement('div')
        div.textContent =""
        diasMes = [...diasMes, div]
    }

    //for javascript // constroi um mes com os dias 1 até 31
    for (let i = 1; i <= ultimoDia; i++) {
        //cria a div
        let div = document.createElement('div')

        //isso me daria os dias de 1 a 31
        //coloca o i dentro da div (i é o número = data)
        div.textContent = i
        date = `${ano}-${String(mes+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`
        div.dataset.date = date
        //dates é array
        const dates = searchByDate(date) //pega os eventos desse dia específico

        dates.forEach( evento =>{
            //crio div
            let divEvento = document.createElement('div')
            //crio p hora
            let hourEvento = document.createElement('p')
            //coloco conteúdo do p dentro do p
            hourEvento.textContent = `${evento.event_time ? evento.event_time : ''}`
            //coloco p dentro da div
            divEvento.append(hourEvento)

            //crio p título
            let titleEvento = document.createElement('p')
            titleEvento.textContent = `${evento.title ? evento.title : ''}`
            divEvento.append(titleEvento)

            //crio span ícone excluir
            let excluirEvento = document.createElement('span')
            excluirEvento.textContent = '❌'
            divEvento.append(excluirEvento)
            
            excluirEvento.addEventListener('click', function(){
                deleteEvent(evento.id)
                divEvento.remove()
            })

            //crio span ícone editar
            let editarEvento = document.createElement('span')
            editarEvento.textContent = '✏️'
            divEvento.append(editarEvento)

            editarEvento.addEventListener('click', function(){
               const modal = document.querySelector('#modal')
               modal.style.display = 'flex';
               //pega inputs
               let inputTitulo = modal.querySelector('input[name="title"]')
               let inputHora = modal.querySelector('input[name="event_time"]')
               let inputData = modal.querySelector('input[name="event_date"]')

               inputTitulo.value = `${evento.title ? evento.title : ''}`
               inputHora.value = `${evento.event_time ? evento.event_time: ''}`
               inputData.value = `${evento.event_date ? evento.event_date: ''}`

               modal.dataset.id = evento.id


            })

            //crio span ícone confirmar
            let confirmarEvento = document.createElement('span')
            confirmarEvento.textContent = '✅'
            divEvento.append(confirmarEvento)

            div.append(divEvento)
        })
        
        diasMes = [...diasMes, div]
    }
    return diasMes
}
const mesesPortugues = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
    ]
const calendario = document.querySelector('#calendario')
//janeiro começa 0
 for (let cadaMes = 0; cadaMes <= 11; cadaMes++){
    //mesCorrente recebe return de criarMes =diasMes = array de divs
        let mesCorrente = criarMes(2026, cadaMes)
        //Criar cabeçalho
        let cabecalho = document.createElement('div')
        cabecalho.classList.add('cabecalho')
        let nomeMes = document.createElement('h2')
        let button = document.createElement('button')
        button.textContent = '+ Novo Evento'
        nomeMes.textContent = `${mesesPortugues[cadaMes]}`
        cabecalho.append(nomeMes)
        cabecalho.append(button)
        calendario.append(cabecalho)
        calendario.append(...mesCorrente)
    }


//selecionar visualmente um dia
let selectedDiv

//botão salvar fora de criar mes
let btnSalvar = document.querySelector('#btn-salvar')
    btnSalvar.addEventListener('click', function(){
    let modal = document.querySelector('#modal')
    

    //Preciso criar id e changes
    let id = Number(modal.dataset.id)
    let changes = {
        title: modal.querySelector('input[name="title"]').value,
        event_time: modal.querySelector('input[name="event_time"]').value,
        event_date: modal.querySelector('input[name="event_date"]').value
    }
    modal.style.display = 'none';

    updateEvent(id,changes)
    //depois melhorar essa solução para recarregar a pg
    location.reload()
})

calendario.onclick = function(event) {
    //onde ocorre o click
    let target = event.target;
    //barra cliques em divs vazias
    if ( !target.dataset.date ) return
    highlight(target)
}

//garante selção única
function highlight(param) {
    if (selectedDiv) {
        selectedDiv.classList.remove('highlight')
    }
    selectedDiv = param;
    selectedDiv.classList.add('highlight')
}


