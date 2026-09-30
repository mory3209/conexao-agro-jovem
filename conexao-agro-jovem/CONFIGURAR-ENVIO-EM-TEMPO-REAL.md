# Configurar envio em tempo real para conexaoagrojoven@gmail.com

O envio direto para Gmail não funciona apenas com HTML puro. Para o cadastro chegar em tempo real, o site precisa de um serviço autorizado. A opção preparada aqui usa **Google Apps Script**, gratuito e ligado ao Gmail.

## Passo a passo

1. Entre em https://script.google.com/ com a conta `conexaoagrojoven@gmail.com`.
2. Clique em **Novo projeto**.
3. Apague o conteúdo do arquivo `Code.gs`.
4. Cole o conteúdo do arquivo deste pacote: `apps-script-enviar-cadastro.gs`.
5. Clique em **Implantar > Nova implantação**.
6. Escolha o tipo **Aplicativo da Web**.
7. Em **Executar como**, selecione **Eu**.
8. Em **Quem tem acesso**, selecione **Qualquer pessoa**.
9. Clique em **Implantar** e autorize as permissões solicitadas.
10. Copie a URL gerada que termina com `/exec`.
11. Envie essa URL para ser colocada no site, ou abra `index.html` e cole a URL nesta linha:

```js
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYg-JJU3JFfukizUywmSWjCur-la02vW2tE7EE3Snfq7Xsm_eZTlNEvNYTlSf9Vm1MCg/exec';
```

Ela deve ficar assim:

```js
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ID_DO_SCRIPT/exec';
```

Depois disso, todo cadastro enviado pelo site será encaminhado em tempo real para `conexaoagrojoven@gmail.com`.
