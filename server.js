const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Firebase Admin SDK
const serviceAccount = require('./firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Rota para adicionar produto
app.post('/api/produtos', async (req, res) => {
  try {
    const data = req.body;
    await db.collection('produtos').add(data);
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// Rota para listar produtos
app.get('/api/produtos', async (req, res) => {
  try {
    const snapshot = await db.collection('produtos').get();
    const produtos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(produtos);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// Rota para deletar produto
app.delete('/api/produtos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection('produtos').doc(id).delete();
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
