# Controle de Estoque Web

Sistema web para gerenciamento de estoque, desenvolvido com foco em pequenas e médias empresas.

✅ Feito com Node.js, Firebase (Firestore) e Bootstrap 5  
✅ Responsivo, leve e pronto para escalar  
✅ Ideal como base para sistemas personalizados

---

## 🔧 Funcionalidades

- Cadastro de produtos  
- Listagem e exclusão  
- Armazenamento em nuvem (Firestore)  
- Interface responsiva com Bootstrap  
- Estrutura modular pronta para expansão

---

## 💡 Objetivo

Este sistema foi criado como base para vender, adaptar e reutilizar em diferentes empresas. Pode ser facilmente customizado com login, gráficos, filtros por empresa, relatórios, etc.

---

## 🧑‍💻 Desenvolvedores

Pedro Lucas Torres  
[GitHub](https://github.com/pedrotorres277)  
---

# ⚙️ Documentação Técnica (Para desenvolvedores)

> Abaixo estão instruções detalhadas para desenvolvedores que forem contribuir com o sistema.

---

## 🛠️ Instalação e Execução

1. Clone o repositório:  
   git clone https://github.com/seu-usuario/Controle_Estoque_Web.git  
   cd Controle_Estoque_Web  

2. Instale as dependências:
npm install  

3. Configure o Firebase:

- Vá até Firebase Console

- Crie um projeto (se ainda não tiver)

- Acesse Configurações > Contas de serviço

- Clique em Gerar nova chave privada

- Renomeie o arquivo como firebase-config.json e salve na raiz do projeto

4. Rode o projeto:
node server.js  

5. Acesse em:
http://localhost:3000

📂 Estrutura do Projeto
controle-estoque/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server.js
├── firebase-config.json (NÃO versionar)
├── .gitignore
└── README.md

🔐 Segurança
- O arquivo firebase-config.json deve estar no .gitignore

- Nunca envie esse arquivo ao GitHub

- Para produção, considere usar .env + dotenv para proteger segredos

👥 Contribuindo com o Projeto
1. Crie uma branch:
git checkout -b feature/nome-da-feature  

2. Faça commits objetivos:
git commit -m "Adiciona funcionalidade X"  

3. Suba sua branch:
git push origin feature/nome-da-feature  

4. Crie um Pull Request para a branch main

📌 Futuras Melhorias
- Autenticação com Firebase Auth

- Exportação de relatórios (PDF e CSV)

- Gráficos com Chart.js ou PowerBI Embed

- Multiempresa (usuários separados)

- Painel de controle administrativo


