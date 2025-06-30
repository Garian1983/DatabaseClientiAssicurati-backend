# Backend – Insurance Client Manager

## Setup

1. Clona la repo e spostati nella cartella `backend`.
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Copia `.env.example` in `.env` e imposta `MONGO_URI` con la tua stringa MongoDB Atlas.
4. Avvia il server:
   ```bash
   npm run dev
   ```
   Il server sarà su `http://localhost:3001`.

## Deploy su Render

1. Push del codice su GitHub.
2. Accedi a [Render](https://dashboard.render.com/) e fai `New > Web Service`.
3. Seleziona la repo, imposta:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Aggiungi variabile ambiente `MONGO_URI`.
5. Deploy: Render assegnerà un URL pubblico che potrai usare come base per l'API.

