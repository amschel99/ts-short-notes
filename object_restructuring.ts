// the code below won't work coz type annotation cannot be used in destructured objects as js has another meaning
//Note that there is currently no way to place type annotations within destructuring patterns.
//This is because the following syntax already means something different in JavaScript. 
//The code below won't work

function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
  render(shape);
Cannot find name 'shape'. Did you mean 'Shape'?
  render(xPos);
Cannot find name 'xPos'.
}

//In an object destructuring pattern, shape: 
//Shape means “grab the property shape and redefine it locally as a variable named Shape.
//  Likewise xPos: number creates a variable named number whose value is based on the parameter’s xPos.
