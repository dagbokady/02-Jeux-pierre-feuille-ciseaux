
# Jeu Pierre-Feuille-Ciseaux - Version Web

## 📋 Description

Projet 02 de la série **100 projets en 1 an**

---

## ✨ Fonctionnalités

* jouer à pierre- feuilles -ciseaux contre l'ordinateur


---

## 🗂️ Structure du projet

```
01_Contact_management/
│
├── node_modules/                     # Modules Node.js
├── public/                           # Ressources publiques
├── src/                              # Code source
│   ├── assets/                       # Images et photos
│   ├── App.css                       # Styles du composant principal
│   ├── data.js                       # données des cartes
│   ├── game.js                       # logique du jeu
│   ├── GameViewx.jsx                 # Écran du jeu
│   ├── Home.jsx                      # Composant principal
│   ├── index.css                     # Styles globaux
│   └── main.jsx                      # Point d’entrée de l’application
├── index.html                        # Template HTML
├── package.json                      # Dépendances et scripts
├── package-lock.json                 # Verrouillage des versions
├── README.md                         # Documentation du projet
├── vite.config.js                    # Configuration Vite
└── .gitignore                        # Fichiers ignorés par Git
```

---

## 🛠️ Technologies utilisées

* **React** : Gestion des composants et logique de l’interface
* **React-router** : Navigation entre les écrans
* **Vite** : Outil de build rapide et moderne
* **CSS** : Stylisation et mise en page

---

## 🚀 Installation et utilisation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/dagbokady/01-contact-management.git
   ```

2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Lancer l’application** :

   ```bash
   npm run dev
   ```

4. **Accéder à l’application** :
   Ouvrez le navigateur à l’URL indiquée dans le terminal (souvent `http://localhost:5173`).

---

## 🎨 Personnalisation

### Modifier la typographie

Vous pouvez changer la police de l’application dans `index.css` :

```css
body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
```

### Couleurs et styles

* Modifier les couleurs et les styles des boutons ou badges dans les fichiers CSS correspondants (`App.css`, `Index.css`, etc.)
* Les images des éléments sont gérées via des URL et peuvent être remplacées dans `assets/` ou via des placeholders.

---

## 📱 Responsive Design

Le projet **n’est pas encore totalement responsive**, mais les composants sont facilement adaptables pour mobile et tablette.

---

## 📝 Bonnes pratiques

* HTML valide selon W3C
* CSS structuré et commenté
* Images optimisées pour la performance
* Accessibilité (attributs `alt`, contraste)
* Compatibilité cross-browser
* Performance optimisée grâce à Vite et React

---

## 🤝 Contribution

Vous pouvez contribuer à ce projet pour proposer des améliorations ou corriger des bugs :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité :

   ```bash
   git checkout -b ma-fonctionnalite
   ```
3. Committez vos changements :

   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Pushez vers votre branche :

   ```bash
   git push origin ma-fonctionnalite
   ```
5. Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est libre de réutilisation et modification.

---
## 🎇 Image de l'application


![image](public/img.png)

![image du projet](public/Capture-02.png)


---

## ✉️ Contact

Pour toute question ou retour :

* **Auteur** : DAGBO KADY CHRIST-PHANUEL
* **Email** : [dagbokady@gmail.com](mailto:dagbokady@gmail.com)

---

**Dernière mise à jour : 11-01-2026** ✅

---

