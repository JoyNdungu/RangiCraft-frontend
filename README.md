<img width="25" height="25" alt="logo" src="https://github.com/user-attachments/assets/daa63c4f-32c3-483f-8ab7-975c8a48479c" />

# RangiCraft — Frontend

## Craft colors that bring your UI to life.


Color palette generator built for African market UI/UX designers.


🌍 Live Demo → rangi-craft-frontend.vercel.app


📸 Overview

RangiCraft helps designers and developers generate culturally-aware, ready-to-use color palettes tailored to their app category, target African market, brand mood, and preferred styling format.


In 3 steps you get:


A full 5-color palette with hex codes you can copy instantly

A live mini UI preview showing your palette on a real app screen

Ready-to-paste code in your exact styling format

A cultural insight explaining why the palette works for your market



## ✨ Features


🌙 Dark / Light mode — follows system preference, remembers your choice

🎯 3-step generator — App category → Brand mood → Styling format

🖌 10 app categories — Fintech, Health, E-Commerce, Social, Education, Logistics, Agriculture, Government, Entertainment, SaaS

🌍 6 African market targets — East, West, Southern, North Africa, Pan-African, Global

💡 10 brand moods — Trustworthy, Energetic, Calm, Playful, Premium, Bold, Minimal, Warm, Professional, Youthful

⚙️ 8 styling approaches — CSS Variables, External CSS, Inline HTML, React style{{}}, className, Tailwind Utilities, Styled Components, CSS Modules

📋 One-click copy — copy any hex code or full code block instantly

💾 Save palettes — save to MongoDB via REST API

📱 Fully mobile responsive



## 🛠 Tech Stack


TechnologyPurposeReact 18 + ViteFrontend framework + build toolTailwind CSSUtility-first stylingReact Router DOMClient-side routingAxiosHTTP requests to backend APIReact IconsIcon libraryCSS VariablesDynamic theming system



## 🚀 Getting Started


Prerequisites

Node.js v18+

npm or yarn

RangiCraft backend running (see backend repo)



# Installation


## Clone the repo
```
git clone https://github.com/JoyNdungu/RangiCraft-frontend.git
cd RangiCraft-frontend
```

## Install dependencies

```
npm install
```
Environment Variables
Create a .env file in the root:
```
VITE_API_URL=http://localhost:5000/api
```
For production point this to your deployed backend URL.
Running Locally
```
npm run dev
```
App runs at http://localhost:5173
Building for Production
```
npm run build
npm run preview
```



## 📁 Project Structure


src/

├── components/

│   ├── steps/

│   │   ├── StepOne.jsx       # App category + market selection

│   │   ├── StepTwo.jsx       # Brand mood selection

│   │   ├── StepThree.jsx     # Styling format selection

│   │   └── StepFour.jsx      # Results — palette, preview, code

│   ├── Navbar.jsx            # Navigation + theme toggle

│   └── StepTracker.jsx       # Step progress indicator

├── context/

│   ├── ThemeContext.jsx       # Dark/light mode state

│   └── GeneratorContext.jsx   # Generator step + selections state

├── pages/

│   ├── Home.jsx              # Landing page

│   └── Generate.jsx          # Generator page

├── utils/

│   ├── palettes.js           # Palette database + code generators

│   ├── api.js                # Axios base config

│   └── paletteApi.js         # Palette API calls

├── App.jsx

├── main.jsx

└── index.css                 # Tailwind + CSS variables + custom utilities



## 🤝 Contributing


Contributions are welcome! Here's how to get started:

1.Fork the repository
2.Create a new branch:

```
git checkout -b feature/your-feature-name
```
3.Make your changes and commit:

```
git commit -m "add: your feature description"
```
4.Push to your fork and open a Pull Request on GitHub


Live: rangi-craft-frontend.vercel.app
