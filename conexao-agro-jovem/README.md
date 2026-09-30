# Site institucional — Associação Conexão Agro Jovem

Este pacote contém um site de página única para a associação, usando as cores do emblema oficial: verde, dourado, creme e tons terrosos.

## Arquivos

- `index.html` — site completo, responsivo e autocontido, com CSS, JavaScript e emblema embutidos para funcionar sozinho.
- `assets/emblema-oficial.png` — imagem original enviada com o emblema oficial, mantida para edição, redes sociais ou futura manutenção.

## O que personalizar

No arquivo `index.html`, procure por `EDITE AQUI` e atualize:

```js
const CONTACT_WHATSAPP_NUMBER = "";
const CONTACT_EMAIL = "conexaoagrojoven@gmail.com";
```

Sugestões de dados para trocar no texto:

- WhatsApp oficial;
- e-mail oficial;
- Instagram;
- cidade/UF de atuação;
- datas das reuniões e assembleias;
- documentos reais de transparência;
- nomes dos membros da diretoria quando forem definidos.

## Como publicar

Você pode hospedar o site em qualquer serviço que aceite HTML estático, como GitHub Pages, Netlify, Vercel ou servidor próprio. Para a versão atual, basta enviar o arquivo `index.html`. A pasta `assets` foi mantida como apoio caso você queira reutilizar o emblema em outras peças.


## Edição da próxima reunião no próprio site

A seção **Próxima reunião e encaminhamentos** possui campos para alterar data, horário, local e participação diretamente na página. Como este é um site estático, a alteração fica salva no navegador quando permitido. Para que todos os visitantes vejam a mesma atualização oficialmente, publique novamente o arquivo HTML atualizado ou integre um painel administrativo/banco de dados.


## Envio do formulário para o e-mail oficial

O formulário **Cadastre seu interesse** foi configurado para enviar os dados para:

`conexaoagrojoven@gmail.com`

Como o site é estático, o envio usa o serviço FormSubmit (`https://formsubmit.co/`). No primeiro envio, o serviço pode mandar uma mensagem de confirmação para esse e-mail. Após confirmar, os próximos cadastros passam a chegar automaticamente na caixa de entrada.


## Envio em tempo real

O formulário foi ajustado para enviar os dados em tempo real via AJAX para o FormSubmit, direcionando tudo para:

`conexaoagrojoven@gmail.com`

Se o envio AJAX falhar por bloqueio de navegador/rede, o site usa automaticamente o envio alternativo padrão do FormSubmit. No primeiro uso, é normal o FormSubmit solicitar confirmação no e-mail de destino.


## Envio real por e-mail

O envio em tempo real foi preparado para funcionar com Google Apps Script. Veja o arquivo `CONFIGURAR-ENVIO-EM-TEMPO-REAL.md` e o script `apps-script-enviar-cadastro.gs`.


## URL do Google Apps Script configurada

O site já está configurado para enviar cadastros para o Web App:

`https://script.google.com/macros/s/AKfycbxYg-JJU3JFfukizUywmSWjCur-la02vW2tE7EE3Snfq7Xsm_eZTlNEvNYTlSf9Vm1MCg/exec`

Destino dos e-mails: `conexaoagrojoven@gmail.com`.


## Novos recursos adicionados

- `confirmacao.html`: página de confirmação após envio do cadastro.
- Botão flutuante de WhatsApp oficial, pronto para ativar quando o número for informado.
- Arquivos `.nojekyll`, `404.html` e `GITHUB-PAGES-PUBLICACAO.md` para publicação no GitHub Pages.


## WhatsApp da Secretaria configurado

Número para dúvidas e contato com a secretária da associação:

`(99) 98439-5082`

No site, o botão de WhatsApp usa o número em formato internacional:

`5599984395082`


## Seções completas acrescentadas

Foram adicionadas as seções: Membros fundadores, Como se associar, Documentos da associação, Parceiros e apoiadores, além de um rodapé mais completo com links rápidos, contato e localização.


## Formulário próprio de apoiadores

O botão **Inscreva-se aqui** na seção Parceiros e apoiadores abre um formulário específico para apoiadores. O envio usa o mesmo Google Apps Script configurado para encaminhar os dados ao e-mail oficial da associação.
