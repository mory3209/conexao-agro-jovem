/**
 * Google Apps Script para enviar em tempo real os cadastros do site
 * Associação Conexão Agro Jovem.
 *
 * COMO USAR:
 * 1. Acesse https://script.google.com/ usando a conta conexaoagrojoven@gmail.com
 * 2. Abra o projeto que gerou a URL /exec.
 * 3. Apague o conteúdo do arquivo Code.gs e cole este código completo.
 * 4. Clique em Salvar.
 * 5. Vá em Implantar > Gerenciar implantações.
 * 6. Clique no lápis da implantação do Aplicativo da Web.
 * 7. Em Versão, escolha Nova versão.
 * 8. Em Executar como, escolha Eu.
 * 9. Em Quem tem acesso, escolha Qualquer pessoa.
 * 10. Clique em Implantar e autorize.
 */

const EMAIL_DESTINO = 'conexaoagrojoven@gmail.com';

function doPost(e) {
  try {
    const dados = e && e.parameter ? e.parameter : {};
    const agora = Utilities.formatDate(new Date(), 'America/Fortaleza', 'dd/MM/yyyy HH:mm:ss');

    const nome = dados['Nome completo'] || 'Não informado';
    const telefone = dados['Telefone/WhatsApp'] || 'Não informado';
    const emailCandidato = dados['E-mail opcional do candidato'] || '';
    const local = dados['Local onde mora ou atua'] || 'Não informado';
    const perfil = dados['Como deseja participar'] || 'Não informado';
    const interesse = dados['Área de maior interesse'] || 'Não informado';
    const motivo = dados['Por que quer participar'] || 'Não informado';
    const contribuicao = dados['Como pode contribuir'] || 'Não informado';
    const autorizacao = dados['Autorização para contato'] || 'Não informado';
    const origem = dados['Origem do cadastro'] || 'Site Associação Conexão Agro Jovem';

    const assunto = 'Novo cadastro de interesse - Associação Conexão Agro Jovem';

    const texto = [
      'Novo cadastro recebido pelo site da Associação Conexão Agro Jovem',
      '',
      'Data/Hora: ' + agora,
      'Nome completo: ' + nome,
      'Telefone/WhatsApp: ' + telefone,
      'E-mail do candidato: ' + (emailCandidato || 'Não informado'),
      'Local: ' + local,
      'Como deseja participar: ' + perfil,
      'Área de maior interesse: ' + interesse,
      '',
      'Por que quer participar:',
      motivo,
      '',
      'Como pode contribuir:',
      contribuicao,
      '',
      'Autorização para contato: ' + autorizacao,
      'Origem: ' + origem
    ].join('\n');

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#263228;">
        <h2 style="color:#2f4d31;">Novo cadastro de interesse</h2>
        <p><strong>Associação Conexão Agro Jovem</strong></p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:760px;">
          <tr><td style="border:1px solid #ddd;"><strong>Data/Hora</strong></td><td style="border:1px solid #ddd;">${escapeHtml(agora)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Nome completo</strong></td><td style="border:1px solid #ddd;">${escapeHtml(nome)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Telefone/WhatsApp</strong></td><td style="border:1px solid #ddd;">${escapeHtml(telefone)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>E-mail do candidato</strong></td><td style="border:1px solid #ddd;">${escapeHtml(emailCandidato || 'Não informado')}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Local</strong></td><td style="border:1px solid #ddd;">${escapeHtml(local)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Como deseja participar</strong></td><td style="border:1px solid #ddd;">${escapeHtml(perfil)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Área de interesse</strong></td><td style="border:1px solid #ddd;">${escapeHtml(interesse)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Por que quer participar</strong></td><td style="border:1px solid #ddd;">${escapeHtml(motivo)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Como pode contribuir</strong></td><td style="border:1px solid #ddd;">${escapeHtml(contribuicao)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Autorização</strong></td><td style="border:1px solid #ddd;">${escapeHtml(autorizacao)}</td></tr>
          <tr><td style="border:1px solid #ddd;"><strong>Origem</strong></td><td style="border:1px solid #ddd;">${escapeHtml(origem)}</td></tr>
        </table>
      </div>
    `;

    const opcoes = {
      to: EMAIL_DESTINO,
      subject: assunto,
      body: texto,
      htmlBody: html
    };

    if (emailCandidato) {
      opcoes.replyTo = emailCandidato;
    }

    MailApp.sendEmail(opcoes);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Cadastro enviado com sucesso.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (erro) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: erro.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Serviço de envio da Associação Conexão Agro Jovem ativo.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function testarEnvio() {
  MailApp.sendEmail({
    to: EMAIL_DESTINO,
    subject: 'Teste do formulário - Associação Conexão Agro Jovem',
    body: 'Se você recebeu este e-mail, o Google Apps Script está autorizado a enviar mensagens.'
  });
}

function escapeHtml(valor) {
  return String(valor || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>');
}
