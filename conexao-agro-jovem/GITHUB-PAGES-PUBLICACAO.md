# Publicar o site no GitHub Pages

## Arquivos prontos

Use o conteúdo da pasta do site como repositório GitHub. Os principais arquivos são:

- `index.html` — página principal;
- `confirmacao.html` — página de confirmação após cadastro enviado;
- `.nojekyll` — evita processamento do GitHub Pages;
- `404.html` — redirecionamento simples para a página inicial;
- `assets/` — arquivos de apoio/imagens.

## Passo a passo pelo navegador

1. Acesse https://github.com/ e entre na sua conta.
2. Clique em **New repository**.
3. Nome sugerido: `conexao-agro-jovem`.
4. Marque como **Public**.
5. Clique em **Create repository**.
6. Envie os arquivos do site para o repositório.
7. Vá em **Settings > Pages**.
8. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
9. Clique em **Save**.
10. Aguarde alguns minutos. O GitHub mostrará o link público do site.

## Observação importante sobre o formulário

O formulário já está apontando para o Google Apps Script configurado. Após publicar, teste o cadastro pelo link do GitHub Pages e verifique se o e-mail chega em `conexaoagrojoven@gmail.com`.

## WhatsApp oficial

O botão de WhatsApp foi criado e configurado com o número da Secretaria: (99) 98439-5082. No arquivo `index.html`, procure por:

```js
const CONTACT_WHATSAPP_NUMBER = "";
```

Coloque o número com DDI e DDD, somente números. Exemplo:

```js
const CONTACT_WHATSAPP_NUMBER = "5599999999999";
```


## WhatsApp da Secretaria configurado

Número para dúvidas e contato com a secretária da associação:

`(99) 98439-5082`

No site, o botão de WhatsApp usa o número em formato internacional:

`5599984395082`
