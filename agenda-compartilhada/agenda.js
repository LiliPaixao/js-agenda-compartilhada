
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
    { id: gerarID(), title: 'Reunião de escola', event_date: '2026-07-01', created_at: Date.now()  , created_by: 'Liliane' },
    { id: gerarID(), title: 'Apresentação do coral', event_date: '2026-07-05', created_at: Date.now()  , created_by: 'Liliane' },
    { id: gerarID(), title: 'Psicóloga', event_date: '2026-07-10',created_at:Date.now()  , created_by: 'Liliane' },
]
}


function gerarID() {
    return proximoID++
}

function createEvent(title, event_date, created_by) {
    if (!title || !event_date) {
        console.error('Título e data são obrigatórios')
        return
    }
    const id = gerarID()
    const newEvent = { id, title, event_date, created_at: Date.now(), created_by}
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
   
    //o usuário modifica title, event_date
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



function criarMes(ano, mes){
    //quantos dias tem o mês passado - me dá o último dia ex:31
    const ultimoDia = new Date(ano, mes + 1, 0).getDate()

    //traz dia da semana  que o mês começa
    //0=dom, 1=seg,2=ter, 3=qua, 4=qui, 5=sex, 6=sab, 7=dom
    const diaSemanaInicio = new Date(ano, mes, 1).getDay()

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
        //coloca o i dentro da div
        div.textContent = i
        date = `${ano}-${String(mes+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`
        div.dataset.date = date
        searchByDate(date) //pega os eventos desse dia específico
        diasMes = [...diasMes, div]
    }
    return diasMes
}
const mesJaneiro = criarMes(2026,0)
const mesFevereiro = criarMes(2026,1)
const mesMarco = criarMes(2026,2)
const mesAbril = criarMes(2026,3)
const mesMaio = criarMes(2026,4)
const mesJunho = criarMes(2026,5)
const mesJulho = criarMes(2026,6)
const mesAgosto = criarMes(2026,7)
const mesSetembro = criarMes(2026,8)
const mesOutubro = criarMes(2026,9)
const mesNovembro = criarMes(2026,10)
const mesDezembro = criarMes(2026,11)
const calendario = document.querySelector('#calendario')

//posso pegar desse jeito o calendário
calendario.append(...mesJaneiro)
calendario.append(...mesFevereiro)
calendario.append(...mesMarco)
calendario.append(...mesAbril)
calendario.append(...mesMaio)
calendario.append(...mesJunho)
calendario.append(...mesJulho)
calendario.append(...mesAgosto)
calendario.append(...mesSetembro)
calendario.append(...mesOutubro)
calendario.append(...mesNovembro)
calendario.append(...mesDezembro)


//selecionar visualmente um dia
let selectedDiv

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


