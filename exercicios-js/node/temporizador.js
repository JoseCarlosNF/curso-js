// Agendamento de Tarefas com "node-schedule"
const schedule = require('node-schedule');

// 📌 Mostrar o segundo atual a cada 5 segundos.
// 👀 Regra de tempo tem syntax similar a do "cron". (seg, min, hora, dia, mês, diaSemana)
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log(`✅ Executando Tarefa 1...`, new Date().getSeconds());
})

// ⭐ Cancelar uma "tarefa1" em execução.
setTimeout(function () {
    tarefa1.cancel();
    console.log(`❌ Cancelando Tarefa 1...`);
}, 20000) // será cancelada após 20 segundos do inicio da execução do script.

// ⭐ Criar regra de recorrencia para a execução de uma determinada tarefa.
const regra = new schedule.RecurrenceRule();
    regra.dayOfWeek = [new schedule.Range(1, 6)]
    regra.hour = 3;
    regra.second = 30;

// 📌 É executada com base nas regras de recorrência criadas acima.
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`✅ Executando Tarefa 2...`, new Date().getSeconds());
})

// ⭐ Cancelando "tarefa2"
setTimeout(function () {
    tarefa2.cancel();
    console.log(`❌ Cancelando tarefa 2️...`);
}, 10000) // será cancelada após 10 segundos do inicio da execução do script.

// ⭐ Outras formas de agendamento de tarefas
//📌 setTimeout()
    // Executa uma tarefa após um determinado tempo do inicio da execução.

// 📌 setImmediate()
    // Executa uma tarefa imediatamente após a execução.

// 📌 setInterval()
    // Executa uma tarefa a cada intervalo definido.
