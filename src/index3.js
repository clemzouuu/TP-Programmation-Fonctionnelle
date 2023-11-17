import { render, lightBrown, grey,lightGreen } from "./color.js";
import * as drawlib from "./drawlib.js";

const tailleArbre = 70;
const tailleMouton = 20;
const tailleFeuilles = 70
/**
 * @param {CanvasRenderingContext2D} context
 * @param {number} x
 * @param {number} y
 */

function afficherTronc(context, x, y) {
  const couleurArbre = lightBrown; 
  const arbre = drawlib.rectangle(couleurArbre, tailleArbre, tailleArbre);
  drawlib.renderCentered(drawlib.move(x, y, arbre), context);
}

/**
 * @param {CanvasRenderingContext2D} context
 * @param {number} x
 * @param {number} y
 */
function afficherFeuilles(context, x, y) {
    const couleurFeuiles = lightGreen; 
    const feuilles = drawlib.rectangle(couleurFeuiles, tailleFeuilles,tailleFeuilles);
    drawlib.renderCentered(drawlib.move(x, y, feuilles), context);
  }

// Fonction pour dessiner un mouton
/**
 * @param {CanvasRenderingContext2D} context
 * @param {number} x
 * @param {number} y
 */

function afficherMouton(context, x, y) {
  const couleurMouton = grey; 
  const mouton = drawlib.circle(couleurMouton, tailleMouton);
  drawlib.renderCentered(drawlib.move(x, y, mouton), context);
}

function afficherDessin() {
  const canvas = document.getElementById("myCanvas");
  
  if (canvas) {
    const context = canvas.getContext("2d");

    if (context) {
      afficherTronc(context, -300, 100);
      afficherFeuilles(context, -300, 40)
      afficherTronc(context, -100, -100);
      afficherFeuilles(context, -100, -160)
      afficherTronc(context, 350, 150);
      afficherFeuilles(context, 350, 100)
      afficherTronc(context, 100, 100);
      afficherFeuilles(context,  100, 50)
      afficherTronc(context, 300, -100);
      afficherFeuilles(context, 300, -160)

      afficherMouton(context, 200, 200);
      afficherMouton(context, 200, 200);
      afficherMouton(context, -100, 100);
      afficherMouton(context, 0, -100);
    }
  }
}

afficherDessin();