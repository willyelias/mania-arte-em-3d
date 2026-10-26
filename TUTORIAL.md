# 📖 Tutorial de Uso e Administração — Mania Arte em 3D

Este guia explica como gerenciar produtos, fotos e configurações do site através da **Área Administrativa Protegida por Login e Senha (`/admin`)**, além de como utilizar um subdomínio gratuito limpo (`maniaarteem3d.vercel.app` ou `maniaarteem3d.netlify.app`).

---

## 🔒 1. Como Acessar o Painel Administrativo (Login e Senha)

O site público ([index.html](./index.html)) permanece **100% limpo** para os clientes. Para editar produtos, fotos ou textos:

1. Acesse o endereço administrativo do site:
   * **Link Direto do Painel Admin:** [https://willyelias.github.io/mania-arte-em-3d/admin](https://willyelias.github.io/mania-arte-em-3d/admin) *(ou clique no cadeado discreto **`🔒 Admin`** no final do rodapé do site).*
2. Digite as credenciais de acesso:
   * **Usuário padrão:** `admin`
   * **Senha padrão:** `mania3d2026`
   *(Você pode alterar esse usuário e senha a qualquer momento dentro da aba **"🔑 Alterar Login e Senha"** do próprio painel!)*

---

## 📦 2. Como Cadastrar, Editar ou Excluir Produtos

Depois de entrar no painel `/admin`:

1. **Cadastrar um Novo Produto:**
   * Na aba **`📦 Produtos do Catálogo`**, clique no botão **`➕ Cadastrar Novo Produto`**.
   * Preencha o **Nome do Produto**, o **Universo Geek / Tag** (ex: `🐉 Dragon Ball Z`), escolha a **Categoria** e escreva uma breve descrição.
   * **Foto do Produto:** Clique em **Enviar Foto do Celular / Computador** e selecione a imagem do seu aparelho (o sistema otimiza o tamanho da imagem automaticamente!).
   * Clique em **`✓ Confirmar Produto na Lista`**.
2. **Editar, Reordenar ou Excluir um Produto Existente:**
   * Use os botões **`↑`** e **`↓`** ao lado de cada produto para mudar a ordem em que eles aparecem no site.
   * Clique em **`✏️ Editar`** para alterar nome, foto, categoria ou descrição.
   * Clique em **`🗑️ Excluir`** para remover um produto do catálogo.
3. **Publicar para Todos os Clientes (Passo Obrigatório):**
   * Após fazer suas alterações, clique no botão verde no topo da página:
     **`💾 Salvar e Publicar no Site`**
   * Em poucos segundos aparecerá a confirmação **`✅ Tudo publicado e atualizado em tempo real!`**. Qualquer cliente que abrir o site no celular ou computador já verá as novidades na mesma hora!

---

## 📷 3. Como Atualizar o Feed do Instagram e o WhatsApp

* **Aba `📷 Feed do Instagram`:** Clique em **`➕ Adicionar Post ao Feed`** para subir uma nova foto (ou remover posts antigos) da grade do Instagram exibida no site.
* **Aba `🏪 WhatsApp & Dados da Loja`:** Permite alterar o número de WhatsApp que recebe os pedidos, o nome da loja, o `@` do Instagram e a cidade.
* **Aba `🔑 Alterar Login e Senha`:** Digite um novo usuário e uma nova senha e clique em **`🔒 Salvar Novo Login e Senha`**. O cofre criptografado (`auth-vault.json`, protegido com **AES-256-GCM**) será atualizado automaticamente.

---

## 🌐 4. Como Ativar o Subdomínio Gratuito Limpo (`maniaarteem3d.vercel.app`)

Se você quiser divulgar na bio do Instagram um link curto e sem o nome de usuário do GitHub (ex: **`https://maniaarteem3d.vercel.app`** ou **`https://maniaarteem3d.netlify.app`**), totalmente grátis para sempre:

1. Acesse [https://vercel.com](https://vercel.com) (ou [https://netlify.com](https://netlify.com)) e clique em **Continue with GitHub**.
2. Clique em **Add New Project** → selecione o repositório **`mania-arte-em-3d`**.
3. Em **Project Name**, digite **`maniaarteem3d`** e clique em **Deploy**.
4. Pronto! Seu site ficará disponível gratuitamente em:
   * **`https://maniaarteem3d.vercel.app`** (Loja para os clientes)
   * **`https://maniaarteem3d.vercel.app/admin`** (Painel com Login e Senha)
5. **Sincronização Automática:** Toda vez que alguém salvar uma alteração pelo painel `/admin`, tanto o link da Vercel quanto o do GitHub Pages serão atualizados automaticamente!
