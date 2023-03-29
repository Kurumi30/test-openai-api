# Como usar:

## Pré-requisitos

- Node.js
- Git
- Uma API key da OPENAI e um Token da Bitly

Acesse o site da OPENAI e crie uma conta. Após isso, vá em [https://beta.openai.com/account/api-keys](https://beta.openai.com/account/api-keys) e gere uma API key.

Acesse o site da Bitly e crie uma conta. Após isso, vá em [https://app.bitly.com/settings/api](https://app.bitly.com/settings/api/) e gere um token.

1. Clone o projeto

```bash
git clone https://github.com/Kurumi30/test-openai-api
```
2. Entre no diretório do projeto

```bash
cd test-openai-api
```

3. Instale as dependências

```bash
npm i
```

4. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente.

```bash
API_KEY="SUA_API_KEY"
TOKEN="SEU_TOKEN"
```

5. Execute os seguintes comandos no seu terminal

```javascript
node chatgpt // Para testar o chat

node dall-e // Para gerar uma imagem
```

6. Para sair do chat, digite

```bash
/exit
```