// Penpot Plugin: Style Switcher
// Author: Votre Nom
// Version: 1.0.0

class StyleSwitcherPlugin {
    constructor() {
        this.api = null;
    }

    async run(api) {
        this.api = api;

        const { ui, scene, project } = api;

        // Récupérer les groupes de couleurs du projet
        const colorGroups = this.getColorGroups(project);

        if (colorGroups.length === 0) {
            ui.showError("Aucun groupe de couleurs", "Veuillez ajouter des groupes de couleurs dans votre projet.");
            return;
        }

        // Afficher une liste déroulante pour choisir un groupe de couleurs
        const chosenColorGroup = await ui.showMenu("Choisir un groupe de couleurs", colorGroups.map(group => ({
            label: group.name,
            value: group.id
        })));

        if (!chosenColorGroup) {
            ui.showInfo("Opération annulée", "Aucun groupe de couleurs sélectionné.");
            return;
        }

        // Appliquer le groupe de couleurs choisi aux éléments sélectionnés
        this.applyColorGroup(chosenColorGroup, api);
    }

    getColorGroups(project) {
        // Récupérer tous les groupes de couleurs du projet
        return project.colors || [];
    }

    async applyColorGroup(colorGroupId, api) {
        const { ui, scene, project } = api;

        // Récupérer les éléments sélectionnés
        const selectedElements = scene.getSelectedElements();

        if (selectedElements.length === 0) {
            ui.showError("Aucun élément sélectionné", "Veuillez sélectionner au moins un élément.");
            return;
        }

        // Récupérer le groupe de couleurs correspondant
        const colorGroup = (project.colors || []).find(group => group.id === colorGroupId);

        if (!colorGroup) {
            ui.showError("Groupe de couleurs introuvable", "Le groupe de couleurs sélectionné n'existe pas.");
            return;
        }

        // Créer un mapping des noms de couleurs vers leurs valeurs
        const colorMapping = {};
        colorGroup.values.forEach(color => {
            colorMapping[color.name] = color.value;
        });

        // Appliquer les couleurs aux éléments sélectionnés
        selectedElements.forEach(element => {
            if (element.style && element.style.fill) {
                const currentColorName = Object.keys(colorMapping).find(name => 
                    element.style.fill === colorMapping[name]
                );

                if (currentColorName) {
                    // Trouver la couleur correspondante dans le groupe choisi
                    const newColorValue = colorMapping[currentColorName];
                    scene.updateElement(element, {
                        style: {
                            ...element.style,
                            fill: newColorValue
                        }
                    });
                } else {
                    ui.showWarning("Couleur non trouvée", `La couleur actuelle de l'élément ne correspond à aucune couleur du groupe.`);
                }
            } else {
                ui.showWarning("Pas de propriété de remplissage", "L'élément sélectionné n'a pas de propriété de remplissage.");
            }
        });

        ui.showSuccess("Groupe de couleurs appliqué", `Le groupe de couleurs '${colorGroup.name}' a été appliqué avec succès.`);
    }
}

module.exports = StyleSwitcherPlugin;
