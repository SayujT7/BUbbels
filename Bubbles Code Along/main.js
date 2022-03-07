// Bubbles Code Along

// Setup Canvas 
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 700;


//Create an Array of random bubble objects
let bubbles = createBubbleArray(50);


requestAnimationFrame(draw);

function draw() {

    // Clear Canvas
    background("pink");

    // Move and Draw the Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }

    requestAnimationFrame(draw);
}

