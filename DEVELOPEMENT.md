# 🚀 Développement du Plugin Penpot – Switcher de Design Tokens

## 📋 Objectif
Ce plugin permet de **changer dynamiquement les valeurs des design tokens** pour les **éléments sélectionnés**, sans impacter tout le projet.  
L'utilisateur peut choisir un **groupe de couleurs** depuis un menu déroulant et l'appliquer aux éléments sélectionnés.

---

## ✅ Suivi des tâches

### 🔹 1. Planification
- [ ] Définir les tokens et leur structure JSON  
- [ ] Lister les interactions avec l'API GraphQL de Penpot  
- [ ] Définir la structure du projet (dossier, fichiers...)  

### 🔹 2. Interface utilisateur (UI)
- [ ] Créer une interface avec un menu déroulant listant les groupes de couleurs  
- [ ] Ajouter un bouton "Appliquer" pour mettre à jour les styles  
- [ ] Styliser l'UI pour Penpot  

### 🔹 3. Intégration avec Penpot
- [ ] Détecter les éléments sélectionnés via l'API GraphQL  
- [ ] Extraire leurs styles et identifier les tokens utilisés  
- [ ] Appliquer dynamiquement les nouvelles valeurs de tokens  

### 🔹 4. Gestion des données
- [ ] Charger et stocker la liste des groupes de couleurs  
- [ ] Associer chaque token (`btn-bg`, `btn-txt`, etc.) à ses valeurs par groupe  
- [ ] Permettre une mise à jour des groupes via JSON (optionnel)  

### 🔹 5. Tests & Optimisations
- [ ] Tester sur plusieurs types d’éléments (boutons, textes, etc.)  
- [ ] Gérer les erreurs (éléments sans styles, token inexistant...)  
- [ ] Optimiser la rapidité des requêtes API  

### 🔹 6. Finalisation
- [ ] Ajouter une icône et une description au plugin  
- [ ] Écrire une documentation d’utilisation  
- [ ] Publier et tester sur une instance Penpot  

---

## 🛠️ Structure du projet

```
/mon-plugin-penpot
│── /src
│   │── index.js (Point d’entrée du plugin)
│   │── ui.js (Interface utilisateur)
│   │── api.js (Gestion des requêtes GraphQL)
│   │── tokens.json (Stockage des groupes de couleurs)
│── package.json (Dépendances et config)
│── README.md (Documentation)
```

---

## 📌 Exemples de JSON de tokens

```json
{
  "groups": {
    "blue-theme": {
      "btn-bg": "#3498db",
      "btn-txt": "#ffffff",
      "btn-bg-hover": "#2980b9"
    },
    "red-theme": {
      "btn-bg": "#e74c3c",
      "btn-txt": "#ffffff",
      "btn-bg-hover": "#c0392b"
    }
  }
}
```

---

## 📚 Notes et améliorations futures
- Ajouter la possibilité de **créer des groupes personnalisés directement dans l’UI**  
- Ajouter un **aperçu en temps réel** des changements avant application  
- Explorer une **synchronisation des tokens avec un fichier externe (JSON, API...)**  

---

## 🏁 Suivi de développement
Cocher chaque tâche une fois terminée pour suivre l'avancement du projet. ✅  
Bon développement ! 🚀
