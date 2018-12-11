 // TensorFlow.js

 // Define a model for linear regression.
 const model = tf.sequential();
 model.add(tf.layers.dense({
     units: 1,
     inputShape: [1]
 }));

 // Prepare the model for training: Specify the loss and the optimizer.
 model.compile({
     loss: 'meanSquaredError',
     optimizer: 'sgd'
 });

 // Generate some synthetic data for training.
 const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
 const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

 // Train the model using the data.
 model.fit(xs, ys, {
     epochs: 10
 }).then(() => {
     // Use the model to do inference on a data point the model hasn't seen before:
     // Open the browser devtools to see the output
     model.predict(tf.tensor2d([5], [1, 1])).print();
 });



 // on the canvas
 const cvs = document.getElementById('canvas')
 const ctx = cvs.getContext('2d')

 // create the unit
 const box = 32;

 // load audio files

 let dead = new Audio();
 let eat = new Audio();
 let up = new Audio();
 let right = new Audio();
 let left = new Audio();
 let down = new Audio();

 dead.src = "audio/dead.mp3";
 eat.src = "audio/eat.mp3";
 up.src = "audio/up.mp3";
 right.src = "audio/right.mp3";
 left.src = "audio/left.mp3";
 down.src = "audio/down.mp3";

 // load image
 const ground = new Image();
 ground.src = "images/ground.png";

 const mouseImg = new Image();
 mouseImg.src = "images/mouse.png";

 const mouseWin = new Image();
 mouseWin.src = "images/mousewin.png";

 let mouse1 = {
     x: Math.floor(Math.random() * 17 + 1) * box,
     y: Math.floor(Math.random() * 15 + 3) * box
 }

 const catImg = new Image();
 catImg.src = "images/cat.png";

 const catWin = new Image();
 catWin.src = "images/catwin.png";

 let cat1 = {
     x: Math.floor(Math.random() * 17 + 1) * box,
     y: Math.floor(Math.random() * 15 + 3) * box
 }

 // listen to what key is pressed or released
 let downKeys = new Set();
 document.addEventListener('keydown', event => {
     downKeys.add(event.key);
 })
 document.addEventListener('keyup', event => {
     downKeys.delete(event.key);
 })

 // draw everything to the canvas
 function draw() {
     ctx.drawImage(ground, 0, 0)
     ctx.drawImage(mouseImg, mouse1.x, mouse1.y);
     ctx.drawImage(catImg, cat1.x, cat1.y);

     //move
     if (downKeys.has('s') && cat1.y < 17 * box) {
         cat1.y += box;
         down.play();
     }
     if (downKeys.has('w') && cat1.y > 3 * box) {
         cat1.y -= box;
         up.play();
     }
     if (downKeys.has('d') && cat1.x < 17 * box) {
         cat1.x += box;
         right.play();
     }
     if (downKeys.has('a') && cat1.x > box) {
         cat1.x -= box;
         left.play();
     }

     if (downKeys.has('k') && mouse1.y < 17 * box) {
         mouse1.y += box;
         down.play();
     }
     if (downKeys.has('i') && mouse1.y > 3 * box) {
         mouse1.y -= box;
         up.play();
     }
     if (downKeys.has('l') && mouse1.x < 17 * box) {
         mouse1.x += box;
         right.play();
     }
     if (downKeys.has('j') && mouse1.x > box) {
         mouse1.x -= box;
         left.play();
     }

     function catAlert() {
         alert('Cat win!');
     }

     if (cat1.x == mouse1.x && cat1.y == mouse1.y) {
         eat.play();
         ctx.drawImage(catWin, 0, 0);
         setTimeout(catAlert, 500);
         clearInterval(game);
     }


 }

 // if mouse win
 function mouseAlert() {
     alert('Mouse win!');
 }

 function mousewin() {
     if (cat1.x != mouse1.x) {
         ctx.drawImage(mouseWin, 0, 0);
         setTimeout(mouseAlert, 500);
         clearInterval(game);
     }
 }
 setTimeout(mousewin, 30000);

 // call draw function every 100 ms

 let game = setInterval(draw, 100);