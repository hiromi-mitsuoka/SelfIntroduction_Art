let img;
let font;

function preload() {
    img = loadImage("factory.JPG");
    font = loadFont('./Metal_Mania/MetalMania-Regular.ttf');
}

function setup() {
    createCanvas(600, 420);
    background(0);
    imageMode(CENTER);
    textSize(50);
    textFont(font);
    noStroke();
}

// 計算と表示
function draw() {
    background(0);
    img.loadPixels();
    let cell = 2;
    let pixels = img.pixels;
    for (let y = 0; y < img.height; y += cell) {
        for (let x = 0; x < img.width; x += cell) {
            let i = (x + y * width) * 4;
            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];
            let a = pixels[i + 3];
            fill(255 - r, 255 - g, 255 - b, a + 50 * cos(random(10)));
            // fill(r, g, b, a);
            let moveX = x + 0.5 * sin(frameCount * y);
            rect(moveX, y, cell - 1, cell - 1);
        }
    }
    fill(255, 120);
    text('HIROMI', 30, 70);
}
