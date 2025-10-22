# Vigontina Stats RT - Test Environment 🧪

> **Ambiente di Test Indipendente** - Clone di vigontina-stats per testing real-time

Questo repository è una **copia completa e indipendente** del progetto [vigontina-stats](https://github.com/enricobrunazzo/vigontina-stats) creata per test e sperimentazioni senza impattare il sistema di produzione.

## 🎯 Caratteristiche

- ✅ **Codice identico** al repository principale
- 🔥 **Database Firebase separato** (da configurare)
- 🚀 **Deploy Vercel indipendente** (da configurare)
- 🧪 **Environment di test isolato**
- 📝 **Configurazioni personalizzate per RT**

## 🏗️ Setup Ambiente Indipendente

### 1. Firebase (Nuovo Database)
```bash
# Creare nuovo progetto Firebase
# Aggiornare src/config/firebase.js con nuove credenziali RT
```

### 2. Vercel Deploy
```bash
# Collegare a nuovo progetto Vercel
# URL target: vigontina-statsRT.vercel.app
```

### 3. Installazione
```bash
git clone https://github.com/enricobrunazzo/vigontina-statsRT.git
cd vigontina-statsRT
npm install
npm run dev
```

## 📊 Differenze con Produzione

| Aspetto | Produzione | Test RT |
|---------|------------|----------|
| Database | Firebase Prod | Firebase RT |
| URL | vigontina-stats.vercel.app | vigontina-statsRT.vercel.app |
| Nome App | "Vigontina Stats" | "Vigontina Stats RT" |
| Scopo | Utilizzo reale | Test e sviluppo |

## 🔧 Tecnologie

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS  
- **Database**: Firebase Firestore
- **Export**: ExcelJS, jsPDF
- **Icons**: Lucide React
- **Deploy**: Vercel

## ⚠️ Note Importanti

- Questo è un **ambiente di test** - i dati non sono sincronizzati con produzione
- Modifiche qui **non impattano** il sistema principale
- Utilizzare per sperimentare nuove funzionalità in sicurezza

---

**🔗 Repository Principale**: [vigontina-stats](https://github.com/enricobrunazzo/vigontina-stats)  
**🎯 Ambiente Produzione**: [vigontina-stats.vercel.app](https://vigontina-stats.vercel.app)