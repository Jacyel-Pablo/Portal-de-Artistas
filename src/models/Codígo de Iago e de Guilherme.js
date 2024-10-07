const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarAlerta(tipo, data, mensagem) {
  const alerta = await prisma.alerta.create({
    data: {
      tipo,
      data,
      mensagem,
    },
  });
  console.log(Alerta criado: ${alerta.mensagem});
}

async function verificarAlertas() {
  const agora = new Date();
  const alertas = await prisma.alerta.editais({
    where: {
      data: {
        lte: agora, // Filtra alertas cujo prazo já passou
      },
    },
  });

  alertas.forEach(alerta => {
    console.log(Alerta: ${alerta.mensagem});
  });

  // Opcional: Remover alertas que já foram tratados
  await prisma.alerta.deleteMany({
    where: {
      data: {
        lte: agora,
      },
    },
  });
}

async function main() {
  // Exemplo: criando alguns alertas
  await criarAlerta("entrega", new Date(Date.now() - 86400000), "Entrega do pedido #1234 atrasada");
  await criarAlerta("seleção", new Date(Date.now() - 86400000), "Resultados da seleção de candidatos disponíveis");

  // Verificando e enviando alertas
  await verificarAlertas();
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });