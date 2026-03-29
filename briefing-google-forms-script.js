/**
 * ============================================================
 *  BRIEFING COMPLETO — Angélica Pires · @angelicapires_s
 *  Versão Final · Atualizado com bloco Missão & Público
 *  Criado por Maria Loyola · Estrategista de Conteúdo
 *
 *  COMO USAR:
 *  1. Acesse script.google.com
 *  2. Clique em "Novo projeto"
 *  3. Apague tudo que estiver no editor
 *  4. Cole TODO este código
 *  5. Clique em "Executar" (▶) ou Ctrl+R
 *  6. Autorize o script quando solicitado
 *  7. Aguarde a mensagem de conclusão
 *  8. Acesse drive.google.com — o formulário estará lá
 * ============================================================
 */

function criarBriefingAngelica() {

  var form = FormApp.create('📋 Briefing Completo — Angélica Pires · @angelicapires_s');

  form.setDescription(
    'Angélica, este briefing foi preparado pela Maria Loyola para que você responda uma única vez.\n\n' +
    'Não existe resposta certa ou errada. Quanto mais honesta e detalhada você for, mais o conteúdo vai soar como você.\n\n' +
    'Este briefing tem um bloco especial — Missão & Público — onde as perguntas não têm resposta certa. São perguntas para você pensar e sentir. Não há pressa nesse bloco.\n\n' +
    '⏱️ Tempo estimado: 40 a 60 minutos. Sugestão: 2 blocos por dia ao longo de uma semana.\n\n' +
    '— Maria Loyola · Estrategista de Conteúdo & Storytelling'
  );

  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    'Muito obrigada, Angélica! 💛\n\nRecebi todas as suas respostas. Em breve entro em contato para darmos início ao trabalho.\n\n— Maria Loyola'
  );

  // ════════════════════════════════════════════════════════
  //  BLOCO 01 · SOBRE VOCÊ
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('👩 BLOCO 01 · Sobre Você')
    .setHelpText('Quem é a Angélica além dos títulos. É daqui que sai a voz, o tom e a humanidade de todo o conteúdo.');

  form.addParagraphTextItem()
    .setTitle('01.01 · Como você se descreveria em 3 palavras — não títulos, mas palavras que definem quem você é como pessoa?')
    .setHelpText('Ex: determinada, acolhedora, resiliente — o que vier naturalmente.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.02 · Qual foi o momento da sua vida em que você sentiu com mais clareza que estava no caminho certo?')
    .setHelpText('Um episódio específico, uma fala de aluno, um momento com a equipe, na fé ou na família.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.03 · Qual foi o momento mais difícil dos seus mais de 35 anos de escola — e o que te fez continuar?')
    .setHelpText('Material para o storytelling mais poderoso do perfil.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.04 · O que você faz fora da escola que te recarrega?')
    .setHelpText('Hobbies, rotinas, hábitos de fim de semana.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('01.05 · Como a fé aparece no seu dia a dia — na gestão, na família, nas decisões? Um exemplo concreto?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.06 · Seus 4 filhos estudaram nas suas escolas. O que esse fato significa para você? Tem uma história específica?')
    .setHelpText('Este é o ativo mais único do seu perfil.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.07 · Como é a participação do seu marido no projeto de vida que vocês construíram — as escolas, a família, a missão?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('01.08 · Tem algum livro, frase ou ensinamento que mudou sua forma de liderar ou de ver o mundo?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('01.09 · Se você pudesse dar um conselho para a Angélica de 30 anos — antes de tudo que você viveu — qual seria?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('01.10 · Tem algo que as pessoas frequentemente se surpreendem quando descobrem sobre você ou sua trajetória?')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 02 · HISTÓRIA DAS ESCOLAS
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🏫 BLOCO 02 · As Escolas e a Trajetória')
    .setHelpText('Mais de 35 anos como prova viva de autoridade. Detalhes que transformam números em história real.');

  form.addParagraphTextItem()
    .setTitle('02.01 · Como surgiu a primeira escola? Qual era o sonho inicial — e como ele se transformou?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('02.02 · Quais são os nomes das 3 escolas e o que cada uma representa? Existe diferença entre elas?')
    .setRequired(true);

  form.addTextItem()
    .setTitle('02.03 · Cidade e estado onde as escolas estão localizadas')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('02.04 · Qual foi a maior crise que o grupo enfrentou — e como foi superada?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('02.05 · Qual conquista das escolas você considera a prova mais clara do trabalho bem feito?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('02.06 · Como é o processo de formação de equipe dentro das suas escolas? O que você faz diferente?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('02.07 · Tem alguma pessoa que você formou ao longo dos anos — dentro ou fora das escolas — cujo crescimento te orgulha muito?')
    .setHelpText('Não precisa citar o nome. O que importa é o tipo de transformação que aconteceu.')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('02.08 · Como é o perfil confessional das escolas? Qual tradição ou espiritualidade orienta o projeto?')
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  //  BLOCO 03 · MISSÃO & PÚBLICO — REFLEXIVO
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🌿 BLOCO 03 · Missão & Público Real — Bloco Especial')
    .setHelpText(
      'Este é o bloco mais importante do briefing. Não tem resposta certa.\n\n' +
      'São perguntas para você pensar, sentir e descobrir — porque a clareza aqui define tudo o que vem depois.\n\n' +
      'Antes de definir o que você vai oferecer, é preciso entender para quem você foi chamada a servir — e o que realmente te move quando ninguém está olhando.\n\n' +
      'Reserve um momento de calma para este bloco.'
    );

  form.addParagraphTextItem()
    .setTitle('03.01 · Quando você pensa nas pessoas que mais se transformaram por terem passado pela sua vida — quem são elas?')
    .setHelpText('Não pense no cargo. Pense na pessoa. Diretoras? Professoras? Mulheres? Mães? Jovens? Quem são elas de verdade?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.02 · O que essas pessoas tinham em comum antes de você — e o que elas passaram a ter depois?')
    .setHelpText('Qual era a dor, a confusão, o vazio — e o que floresceu?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.03 · Quando você imagina a mulher que mais precisa do que você tem a oferecer — como ela é? O que ela carrega? O que ela busca?')
    .setHelpText('Não o cargo ou a função. A mulher por dentro.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.04 · Sua formação sempre foi dentro da educação escolar. Mas você sente que o que você ensina serve só para diretoras — ou para qualquer mulher que quer viver com mais propósito, compromisso e liderança?')
    .setHelpText('Não há resposta errada. Esta pergunta existe para você ouvir o que sente, não o que parece mais óbvio.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.05 · Quando você pensa em liderança, o que vem primeiro: gestão e resultados — ou o ser humano por trás do cargo?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.06 · Existe algum tema que te faz falar por horas sem cansar — que vai além da gestão escolar?')
    .setHelpText('Família, fé, propósito de vida, maternidade, identidade feminina, vocação? O tema que te acende por dentro costuma ser o que você foi chamada a ensinar.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.07 · Se você pudesse dedicar os próximos anos a formar um único tipo de pessoa — independente de cargo — quem seria essa pessoa?')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('03.08 · Você se sente mais energizada quando forma líderes para serem mais eficientes — ou pessoas para viverem com mais inteireza, fé e propósito?')
    .setChoiceValues([
      'Mais eficientes no que fazem',
      'Mais inteiras no que são',
      'As duas — não consigo separar',
      'Ainda não sei — essa pergunta me faz pensar'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('03.08b · Complemento ou reflexão sobre essa resposta:')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('03.09 · Tem algo que você sente que ainda não conseguiu entregar para o mundo — algo que está dentro de você mas ainda não encontrou o formato certo?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('03.10 · Se alguém te descrevesse em uma frase — não pelo cargo, mas pelo impacto que você gera — o que você gostaria que essa frase dissesse?')
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  //  BLOCO 04 · A MENTORIA
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🎓 BLOCO 04 · A Mentoria')
    .setHelpText('Perguntas sobre o produto — sua estrutura atual, o que você quer que ele seja e se o formato ainda faz sentido para o seu momento.');

  form.addMultipleChoiceItem()
    .setTitle('04.01 · A mentoria "Diretora de Missão" ainda representa o que você quer oferecer — ou precisa ser reformulada?')
    .setChoiceValues([
      'Representa bem — quero continuar como está',
      'Precisa de alguns ajustes',
      'Precisa ser bastante reformulada',
      'Ainda não tenho clareza — preciso pensar'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('04.01b · O que você sente sobre a mentoria hoje? (complemento)')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('04.02 · Quando você imagina mentorar alguém nos próximos meses, quem você quer que seja essa pessoa?')
    .setHelpText('Diretoras especificamente — ou um perfil mais amplo de mulheres que buscam liderança com propósito?')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('04.03 · Você tem disponibilidade real para mentorar pessoas de forma contínua — ou seu momento pede algo mais pontual?')
    .setHelpText('Honestidade aqui é fundamental. Uma mentoria mal dimensionada para o seu tempo pode se tornar um peso em vez de um propósito.')
    .setChoiceValues([
      'Tenho disponibilidade — quero mentoria contínua',
      'Prefiro algo mais pontual (eventos, encontros, palestras)',
      'Quero os dois, mas preciso organizar',
      'Ainda não sei — preciso pensar com calma'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('04.03b · Seus pensamentos sobre disponibilidade e formato:')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('04.04 · O nome "Diretora de Missão" ainda faz sentido — ou precisa refletir algo maior do que o cargo?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('04.05 · A mentoria já existe formalmente? Se já teve turmas, como foi a experiência?')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('04.06 · Qual formato te energiza mais ao pensar em formar pessoas? (marque todos)')
    .setChoiceValues([
      'Online ao vivo',
      'Presencial',
      'Gravado (assíncrono)',
      'Individual (1 a 1)',
      'Grupo / turma',
      'Encontros pontuais'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('04.07 · Quais temas você se sentiria mais entusiasmada ensinando?')
    .setHelpText('Gestão escolar? Liderança com fé? Formação de mulheres? Propósito de vida? Família e vocação?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('04.08 · Qual transformação concreta você quer que alguém tenha ao passar pela sua formação?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('04.09 · Tem depoimento de alguém que você formou que representa bem o seu impacto?')
    .setRequired(false);

  form.addTextItem()
    .setTitle('04.10 · Valor que você pensa em cobrar — e você sente que ele reflete o que entrega?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('04.11 · Plataforma onde a formação vai acontecer')
    .setChoiceValues([
      'Zoom',
      'Google Meet',
      'WhatsApp',
      'Hotmart',
      'Kiwify',
      'Presencial',
      'Ainda não definido',
      'Outra'
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle('04.12 · Quantas pessoas por turma seria ideal — e tem data prevista para a próxima abertura?')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 05 · EVENTOS
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🗓️ BLOCO 05 · Eventos e Formações')
    .setHelpText('Cada evento é semanas de conteúdo. Preciso entender o calendário e os tipos para planejar com antecedência.');

  form.addCheckboxItem()
    .setTitle('05.01 · Quais tipos de eventos você realiza? (marque todos)')
    .setChoiceValues([
      'Encontro para mulheres',
      'Evento para mães',
      'Formação de equipe escolar',
      'Evento de fé / espiritualidade',
      'Palestra / conferência',
      'Retiro',
      'Formatura',
      'Festa da escola',
      'Outro'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('05.02 · Com que frequência acontecem os eventos?')
    .setChoiceValues([
      'Semanalmente',
      'Mensalmente',
      'Bimestralmente',
      'Trimestralmente',
      'Só em datas específicas do ano',
      'Varia — não tem frequência fixa'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('05.03 · Tem algum evento confirmado ou previsto nos próximos 3 meses? Datas e tema?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('05.04 · Qual evento recente teve o maior impacto — o que aconteceu de especial?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('05.05 · Como os eventos são registrados em foto/vídeo?')
    .setChoiceValues([
      'Tenho fotógrafo/videógrafo contratado',
      'Alguém da equipe registra',
      'Eu mesma registro',
      'Ainda não temos registro sistemático'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('05.06 · Os eventos são abertos ao público externo ou só para a comunidade escolar?')
    .setChoiceValues([
      'Só comunidade escolar',
      'Abertos ao público externo',
      'Depende do evento'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('05.07 · Você quer usar o Instagram para captar público para os eventos?')
    .setChoiceValues([
      'Sim — quero captar público externo',
      'Prefiro manter divulgação interna',
      'Depende do evento',
      'Ainda não pensei nisso'
    ])
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  //  BLOCO 06 · TOM DE VOZ E CONTEÚDO
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🗣️ BLOCO 06 · Tom de Voz e Conteúdo')
    .setHelpText('Para que os posts soem como você — e não como qualquer outra pessoa.');

  form.addCheckboxItem()
    .setTitle('06.01 · Como você prefere se comunicar com seu público? (marque todos)')
    .setChoiceValues([
      'Direta e objetiva',
      'Acolhedora e empática',
      'Reflexiva e profunda',
      'Técnica e didática',
      'Com humor leve',
      'Inspiracional',
      'Firme e provocadora'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('06.02 · Você se sente confortável gravando Reels (vídeos curtos para a câmera)?')
    .setChoiceValues([
      'Sim, consigo gravar sem problema',
      'Consigo mas preciso de roteiro pronto',
      'Prefiro fotos e carrosséis por enquanto',
      'Nunca fiz mas quero tentar'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('06.02b · Quantos Reels por semana você consegue gravar?')
    .setHelpText('Ex: 1, 2, 3 ou "depende da semana"')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('06.03 · Tem algum assunto ou tema que você NÃO quer que apareça no perfil?')
    .setHelpText('Ex: política, dados financeiros das escolas, assuntos familiares específicos.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('06.04 · Você prefere "Você" (maiúscula) ou "você" (minúscula) nos posts?')
    .setChoiceValues([
      '"Você" com maiúscula (mais formal)',
      '"você" com minúscula (mais próximo)',
      'Sem preferência'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('06.05 · Tem alguma frase, expressão ou palavra que você usa muito e que caracteriza seu jeito de falar?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('06.06 · Você já tentou criar conteúdo para o Instagram antes? O que funcionou? O que não gostou?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('06.07 · Qual é o maior sonho para o seu perfil daqui a 1 ano — o que você quer que ele tenha feito pela sua vida e pelo seu propósito?')
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  //  BLOCO 07 · ENVIO DE MATERIAL
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('📁 BLOCO 07 · Envio de Material — Fotos e Vídeos')
    .setHelpText('Como você vai me enviar o material bruto para produzir o conteúdo.');

  form.addMultipleChoiceItem()
    .setTitle('07.01 · Qual plataforma você prefere para compartilhar fotos e vídeos?')
    .setChoiceValues([
      'Google Drive',
      'WhatsApp',
      'Dropbox',
      'iCloud',
      'Outra'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('07.02 · Você tem alguém que pode ajudar a organizar e enviar os materiais?')
    .setChoiceValues([
      'Sim — vou indicar a pessoa',
      'Não — farei eu mesma',
      'Talvez — preciso verificar'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('07.02b · Nome e contato da pessoa que vai ajudar (se houver):')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('07.03 · Com que frequência consegue enviar fotos e vídeos novos?')
    .setChoiceValues([
      'Toda semana',
      'A cada 15 dias',
      'Uma vez por mês',
      'Conforme os eventos acontecem'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('07.04 · Você tem um banco de fotos existente para começarmos?')
    .setChoiceValues([
      'Sim, tenho bastante material',
      'Tenho pouca coisa',
      'Praticamente não tenho'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('07.05 · Para os vídeos — onde você prefere gravar? Qual ambiente te deixa mais à vontade?')
    .setRequired(false);

  form.addTextItem()
    .setTitle('07.06 · Qual celular você usa? (Para calibrar as instruções de qualidade.)')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 08 · REUNIÕES E APROVAÇÕES
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('📅 BLOCO 08 · Reuniões e Aprovações')
    .setHelpText('Para que o trabalho aconteça sem atrasos e com total alinhamento — mesmo à distância.');

  form.addMultipleChoiceItem()
    .setTitle('08.01 · Canal preferido para a comunicação do dia a dia')
    .setChoiceValues(['WhatsApp', 'E-mail', 'Instagram DM', 'Outro'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('08.02 · Melhor dia da semana para a reunião mensal (60–90 min)')
    .setChoiceValues(['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado (manhã)'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('08.03 · Melhor horário para as reuniões? (segunda a sexta)')
    .setChoiceValues(['13h–14h', '14h–15h', '15h–16h', 'Prefiro outro horário — vou especificar abaixo'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('08.03b · Se preferir outro horário, especifique aqui:')
    .setRequired(false)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('08.04 · Plataforma de videochamada preferida')
    .setChoiceValues(['Google Meet', 'Zoom', 'WhatsApp videochamada', 'Sem preferência'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('08.05 · Com quantos dias de antecedência precisa receber os posts para aprovar?')
    .setChoiceValues(['2 dias antes', '3 dias antes', '5 dias antes', '7 dias antes (semana inteira)'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('08.06 · Como prefere aprovar o conteúdo?')
    .setChoiceValues(['Post a post', 'Semana a semana', 'Mês inteiro de uma vez'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('08.07 · Tem algum período do ano em que você fica mais sobrecarregada ou indisponível?')
    .setHelpText('Para já planejar com antecedência.')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 09 · PERFIL ATUAL
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('📱 BLOCO 09 · O Perfil Atual')
    .setHelpText('Para entender de onde partimos. O @angelicapires_s tem mais de 2.245 seguidores — entender a composição dessa audiência calibra a estratégia.');

  form.addParagraphTextItem()
    .setTitle('09.01 · Na sua percepção, quem são as pessoas que te seguem hoje? Família, amigos, colegas, educadores externos?')
    .setHelpText('Isso nos ajuda a entender quem já está lá e quem ainda precisamos atrair.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('09.02 · O que fazer com os posts antigos do @angelicapires_s?')
    .setChoiceValues([
      'Manter tudo e adicionar novos',
      'Arquivar os antigos e começar do zero',
      'Selecionar o que fica — decidiremos juntas'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('09.03 · O @angelicapires_s já é uma conta Creator ou Business?')
    .setChoiceValues(['Sim, já é profissional', 'Não, ainda é pessoal', 'Não sei'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('09.04 · O @diretoranotamil — o que você quer fazer com ele?')
    .setChoiceValues([
      'Redirecionar para o @angelicapires_s',
      'Desativar',
      'Manter ativo por enquanto',
      'Ainda não sei'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('09.05 · Tem alguma parceria ou colaboração que deva ser considerada no conteúdo?')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 10 · IDENTIDADE VISUAL
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('🎨 BLOCO 10 · Identidade Visual')
    .setHelpText('A identidade Rosa Vinho + Champagne já foi escolhida e aprovada. Este bloco confirma apenas detalhes para a execução dos templates.');

  form.addMultipleChoiceItem()
    .setTitle('10.01 · Você tem logo ou assinatura visual das escolas ou da mentoria?')
    .setChoiceValues([
      'Sim — vou enviar o arquivo',
      'Tenho mas não em PNG com fundo transparente',
      'Não tenho logo ainda'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('10.02 · Tem alguma cor que definitivamente NÃO pode aparecer nas artes?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('10.03 · Você usa o Canva?')
    .setChoiceValues(['Sim — Canva Pro', 'Sim — Canva Free', 'Não uso', 'Tenho equipe que usa'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('10.04 · Tem algum perfil que você considera referência visual — de qualquer nicho?')
    .setHelpText('O @ já ajuda.')
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  //  BLOCO 11 · EXTRAS
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('✦ BLOCO 11 · Informações Extras')
    .setHelpText('Tudo que não coube nos blocos anteriores mas que pode ser importante para o projeto.');

  form.addParagraphTextItem()
    .setTitle('11.01 · Tem alguma experiência ruim anterior com redes sociais que você não quer que se repita?')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('11.02 · Como você prefere receber feedback e sugestões minhas?')
    .setChoiceValues([
      'Direta e objetiva — sem rodeios',
      'Com cuidado — prefiro ser preparada',
      'Depende do assunto'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('11.03 · Tem algum perfil do mesmo nicho que você acompanha — referência positiva ou negativa?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('11.04 · Tem alguma data comemorativa, aniversário de escola ou marco especial nos próximos 6 meses?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('11.05 · Espaço livre — tem algo que quer me dizer que não foi perguntado aqui?')
    .setHelpText('Qualquer informação, preocupação ou expectativa que é importante eu saber antes de começar.')
    .setRequired(false);

  // ── Links finais ──────────────────────────────────────
  var url     = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('✅ Briefing criado com sucesso!');
  Logger.log('🔗 Link para a Angélica: ' + url);
  Logger.log('✏️  Link de edição: ' + editUrl);

  Browser.msgBox(
    '✅ Briefing criado!',
    '🔗 Link para a Angélica:\n' + url + '\n\n✏️ Link de edição (só você):\n' + editUrl,
    Browser.Buttons.OK
  );
}
