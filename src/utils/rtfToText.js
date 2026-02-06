export function rtfToText(rtf) {
    // Expression régulière pour détecter les différents éléments RTF :
    // commandes, accolades, séquences d'échappement et texte brut.
    const rtfRegex = /\\([a-z]+)(-?\d+)? ?|[{}]|\\'([0-9a-fA-F]{2})|([^\\{}]+)/g;
    let match; // Variable pour stocker la correspondance actuelle trouvée par la regex.
    let output = []; // Tableau pour collecter le texte final extrait.
    let stack = []; // Pile pour gérer les groupes imbriqués dans le RTF.
  
    // Boucle pour analyser toutes les correspondances trouvées dans la chaîne RTF.
    while ((match = rtfRegex.exec(rtf)) !== null) {
        // Si une accolade ouvrante est trouvée, cela marque le début d'un groupe.
        if (match[0] === "{") {
            stack.push(output.length); // Ajouter la longueur actuelle de `output` à la pile.
        } 
        // Si une accolade fermante est trouvée, cela marque la fin d'un groupe.
        else if (match[0] === "}") {
            output.splice(stack.pop(), 0); // Suppression du groupe dans `output` (ici, aucun effet concret).
        } 
        // Si une commande RTF (précédée d'un backslash) est trouvée.
        else if (match[0][0] === "\\") {
            if (match[1] === "par" || match[1] === "line") {
                output.push("\n"); // Ajouter un saut de ligne pour les commandes `\par` ou `\line`.
            } else if (match[1] === "tab") {
                output.push("\t"); // Ajouter une tabulation pour la commande `\tab`.
            } else if (match[1] === "uc") {
                // Sauter un certain nombre de caractères Unicode (implémentation partielle ici).
                rtfRegex.lastIndex += Number(match[2]);
            } else if (match[1] === "'") {
                // Décoder un caractère en utilisant son code hexadécimal et l'ajouter au résultat.
                output.push(String.fromCharCode(parseInt(match[3], 16)));
            }
        } 
        // Si un texte brut est trouvé (ni commande RTF ni groupe), l'ajouter au résultat.
        else {
            output.push(match[0]);
        }
    }

    // Assembler les fragments de texte collectés en une chaîne finale et la retourner.
    return output.join("");
}