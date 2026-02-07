# 🌐 Translate App - AI-Powered Multi-Language Translation

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)
![AI](https://img.shields.io/badge/AI-Powered-FF6B6B?style=for-the-badge&logo=openai)

**Application de traduction multilingue moderne avec reconnaissance vocale, synthèse audio et IA**

[🌐 Demo en ligne](https://text-translate-ai.vercel.app/) • [📖 Documentation](#-installation) • [✉️ Contact](mailto:khalidtourhzaoui@gmail.com)

![Translate App Screenshot](public/image.png)

</div>

---

## 📑 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture](#-architecture)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [APIs et Services](#-apis-et-services)
- [Contribution](#-contribution)
- [Contact](#-contact)

---

## 🎯 À propos du projet

**Translate App** est une application web moderne de traduction multilingue construite avec **Next.js 14** et **React 18**. Elle offre une expérience utilisateur fluide et intuitive avec des fonctionnalités avancées comme la reconnaissance vocale, la synthèse audio, l'upload de fichiers et l'extraction de texte depuis des URLs.

### 🚀 Concept & Innovation
- **Traduction IA** - Utilisation de modèles d'IA avancés pour des traductions précises
- **Multi-Sources** - Texte, voix, fichiers, URLs - traduisez depuis n'importe quelle source
- **Audio Playback** - Écoutez vos traductions avec synthèse vocale naturelle
- **Design Moderne** - Interface épurée avec effets visuels animés
- **Responsive First** - Optimisé pour tous les appareils
- **Performance** - Build ultra-rapide avec Next.js et optimisations avancées

---

## ✨ Fonctionnalités

### 🎨 Interface Utilisateur
- ✅ **Design Moderne** - Interface élégante avec animations fluides
- ✅ **Background Animé** - Effets visuels avec beams et lignes animées
- ✅ **Responsive Design** - Adaptation automatique mobile/tablette/desktop
- ✅ **Dark Mode Ready** - Design optimisé pour mode sombre
- ✅ **UI Components** - Composants Radix UI pour accessibilité maximale

### 🔧 Fonctionnalités Principales

#### 1️⃣ **Traduction en Temps Réel**
- Traduction instantanée entre plus de 100 langues
- Support bidirectionnel avec swap automatique
- Détection automatique de la langue source
- Historique et favoris de traductions

#### 2️⃣ **Reconnaissance Vocale (Speech-to-Text)**
- Dictée vocale en temps réel
- Support multi-langues
- Conversion instantanée et traduction automatique
- Feedback visuel pendant l'enregistrement

#### 3️⃣ **Synthèse Vocale (Text-to-Speech)**
- Lecture audio des traductions
- Voix naturelles par langue
- Contrôle de la vitesse et du volume
- Support multi-langues

#### 4️⃣ **Upload de Fichiers**
- Support formats : `.txt`, `.rtf`, `.doc`, `.docx`
- Extraction automatique du contenu
- Prévisualisation avant traduction
- Conversion RTF vers texte brut

#### 5️⃣ **Extraction depuis URL**
- Paste d'URL pour extraction de contenu web
- Parsing intelligent du texte
- Nettoyage automatique (HTML, scripts, styles)
- Traduction du contenu extrait

#### 6️⃣ **Gestion des Favoris**
- Sauvegarde locale des traductions
- Organisation par langue
- Recherche dans les favoris
- Export/Import de favoris

---

## 🛠️ Technologies utilisées

### **Core Framework**
- **Next.js** `14.x` - Framework React avec SSR et optimisations
- **React** `18.x` - Bibliothèque UI moderne avec Hooks
- **TypeScript** - Typage statique pour meilleure DX
- **Node.js** - Runtime JavaScript côté serveur

### **Styling & UI**
- **Tailwind CSS** `3.4.x` - Framework CSS utility-first
- **Radix UI** - Composants accessibles headless
  - `@radix-ui/react-select` - Selects accessibles
- **Framer Motion** - Animations et transitions fluides
- **class-variance-authority** - Gestion des variantes de composants
- **clsx** + **tailwind-merge** - Utilitaires CSS conditionnels

### **AI & Translation**
- **Groq AI** - Modèle de traduction IA avancé
- **Web Speech API** - Speech Recognition native
- **Speech Synthesis API** - Text-to-Speech navigateur

### **Icons & Assets**
- **React Icons** `5.5.0` - Bibliothèque d'icônes complète
  - Lucide Icons
  - Material Icons
  - Feather Icons

### **Utils & Helpers**
- **Axios** - Client HTTP pour appels API
- **RTF Parser** - Conversion RTF vers texte
- **URL Parser** - Extraction de contenu web

### **Build & Dev Tools**
- **Turbopack** - Build tool ultra-rapide (Next.js 14)
- **ESLint** - Linting et qualité de code
- **PostCSS** - Transformations CSS
- **TypeScript Compiler** - Compilation TypeScript

---

## ⚙️ Installation

### Prérequis
- Node.js (v18.0.0 ou supérieur)
- npm ou yarn ou pnpm
- Git
- Clé API Groq (pour traduction IA)

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/khalid-tourhzaoui/text-translate.git
cd text-translate
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configurer les variables d'environnement**
Créez un fichier `.env.local` à la racine :
```env
NEXT_PUBLIC_GROQ_API_KEY=votre_clé_api_groq
NEXT_PUBLIC_API_URL=https://api.groq.com/v1
```

4. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Construire pour la production**
```bash
npm run build
# ou
yarn build
```

6. **Lancer la production**
```bash
npm start
# ou
yarn start
```

L'application sera accessible sur `http://localhost:3000` par défaut.

---

## 📚 Utilisation

### 🔤 Traduction de Texte Simple

1. **Sélectionnez les langues**
   - Langue source (ou "Detect Language")
   - Langue cible

2. **Entrez votre texte**
   - Tapez directement dans la zone source
   - Collez du texte copié
   - Maximum 5000 caractères

3. **Traduction automatique**
   - La traduction se fait automatiquement après 500ms
   - Ou cliquez sur le bouton "Translate"

4. **Actions disponibles**
   - 🔊 Écouter la traduction
   - 📋 Copier la traduction
   - ⭐ Ajouter aux favoris
   - 🔄 Inverser les langues

---

### 🎤 Traduction Vocale (Speech-to-Text)

1. **Activer le microphone**
   - Cliquez sur l'icône 🎤 dans la zone source
   - Autorisez l'accès au microphone

2. **Parlez clairement**
   - L'indicateur rouge montre l'enregistrement actif
   - Parlez dans votre langue source

3. **Traduction automatique**
   - Le texte reconnu apparaît dans la zone source
   - La traduction se lance automatiquement

4. **Écouter le résultat**
   - Cliquez sur 🔊 pour entendre la traduction

**Exemple d'utilisation :**
```
🎤 "Hello, how are you today?"
→ Texte reconnu : "Hello, how are you today?"
→ [EN → FR] Traduction : "Bonjour, comment allez-vous aujourd'hui ?"
→ 🔊 Lecture audio en français
```

---

### 📄 Upload de Fichier

1. **Sélectionner un fichier**
   - Cliquez sur "Upload File" 📎
   - Ou glissez-déposez le fichier
   - Formats supportés : `.txt`, `.rtf`, `.doc`, `.docx`

2. **Extraction automatique**
   - Le contenu est extrait et affiché
   - Nettoyage automatique du formatage

3. **Traduction**
   - Sélectionnez la langue cible
   - La traduction démarre automatiquement

**Exemple :**
```
📎 Upload : document.txt (2.3 KB)
📝 Contenu extrait : "This is a sample document..."
[EN → ES] → "Este es un documento de muestra..."
```

---

## 📁 Structure du projet

```
text-translate/
├── public/
│   ├── image.png                    # Screenshot principal
│   └── traduction.png              # Image de démo
│
├── src/
│   ├── app/
│   │   ├── components/             # Composants spécifiques à la page
│   │   │   ├── LanguageProp.jsx
│   │   │   ├── TextAreaSource.jsx
│   │   │   └── TextAreaTarget.jsx
│   │   ├── fonts/                  # Polices Geist
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── lib/
│   │   │   └── utils.ts            # Utilitaires TypeScript
│   │   ├── favicon.ico
│   │   ├── globals.css             # Styles globaux
│   │   ├── layout.tsx              # Layout principal
│   │   └── page.tsx                # Page d'accueil
│   │
│   ├── components/
│   │   ├── Buttons/
│   │   │   └── IconButton.jsx      # Bouton avec icône réutilisable
│   │   ├── Inputs/
│   │   │   ├── FileUpload.jsx      # Upload de fichiers
│   │   │   ├── LanguageSelector.jsx # Sélecteur de langue
│   │   │   └── TextArea.jsx        # Zone de texte
│   │   ├── SpeechRecognition/
│   │   │   └── SpeechRecognition.jsx # Reconnaissance vocale
│   │   ├── ui/                     # Composants UI réutilisables
│   │   │   ├── background-beams-with-collision.tsx
│   │   │   ├── background-lines.tsx
│   │   │   └── select.tsx          # Select Radix UI custom
│   │   └── SvgDecorations.tsx      # Décorations SVG
│   │
│   ├── hooks/
│   │   └── useTranslate.js         # Hook principal de traduction
│   │
│   ├── lib/
│   │   ├── groq-ai-model.js        # Client API Groq
│   │   └── utils.ts                # Utilitaires communs
│   │
│   └── utils/
│       ├── languageMapping.js      # Mapping des langues
│       └── rtfToText.js            # Convertisseur RTF
│
├── .eslintrc.json                  # Configuration ESLint
├── .gitignore                      # Fichiers ignorés Git
├── README.md                       # Ce fichier
├── components.json                 # Config composants
├── next.config.ts                  # Configuration Next.js
├── package.json                    # Dépendances npm
├── postcss.config.mjs             # Configuration PostCSS
├── tailwind.config.ts             # Configuration Tailwind
└── tsconfig.json                  # Configuration TypeScript
```

---

## 🔌 APIs et Services

### **Groq AI Translation API**

**Endpoint de traduction :**
```javascript
POST https://api.groq.com/v1/chat/completions
```

**Exemple de requête :**
```javascript
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
});

const response = await groq.chat.completions.create({
  messages: [
    {
      role: "user",
      content: `Translate from ${sourceLang} to ${targetLang}: ${text}`
    }
  ],
  model: "llama-3.3-70b-versatile",
  temperature: 0.3,
  max_tokens: 1024
});

const translation = response.choices[0].message.content;
```

**Modèles disponibles :**
- `llama-3.3-70b-versatile` - Traduction générale
- `llama-3.1-8b-instant` - Traduction rapide
- `mixtral-8x7b-32768` - Traduction longue

---

### **Langues Supportées**

Plus de 100 langues disponibles, incluant :

| Code | Langue | Native Name |
|------|--------|-------------|
| `en` | Anglais | English |
| `fr` | Français | Français |
| `es` | Espagnol | Español |
| `de` | Allemand | Deutsch |
| `it` | Italien | Italiano |
| `pt` | Portugais | Português |
| `ru` | Russe | Русский |
| `zh` | Chinois | 中文 |
| `ja` | Japonais | 日本語 |
| `ar` | Arabe | العربية |
| ... | ... | ... |

Voir `src/utils/languageMapping.js` pour la liste complète.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

### Process de Contribution

1. **Fork** le projet
2. **Créez** votre branche feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Committez** vos changements
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** vers la branche
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Ouvrez** une Pull Request

---

## 📞 Contact

**Khalid Tourhzaoui**

- 📧 Email : [khalidtourhzaoui@gmail.com](mailto:khalidtourhzaoui@gmail.com)
- 💼 LinkedIn : [khalid-tourhzaoui](https://www.linkedin.com/in/khalid-tourhzaoui/)
- 🌐 Portfolio : [khalid-tourhzaoui.vercel.app](https://khalid-tourhzaoui.vercel.app/)
- 📱 Contact Form : [Contact Me](https://khalid-tourhzaoui.vercel.app/contactme)

---

<div align="center">

### 🌐 Construit avec passion pour briser les barrières linguistiques

**Fait avec ❤️ et ☕ par Khalid Tourhzaoui**

[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Powered by AI](https://img.shields.io/badge/Powered%20by-AI-FF6B6B?style=flat&logo=openai)](https://groq.com/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

[⬆ Retour en haut](#-translate-app---ai-powered-multi-language-translation)

</div>