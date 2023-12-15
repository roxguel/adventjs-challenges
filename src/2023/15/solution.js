function autonomousDrive(store, movements) {
    let [yInit, xInit] = [0, -1]
    while (yInit < store.length && xInit == -1) {
        xInit = store[yInit++].indexOf("!");
    }
    
    store[--yInit] = store[yInit].replace('!', '.')
  
    let [y, x] = [yInit, xInit];
    for (let movement of movements) {
        let [xMove, yMove] = [0, 1]; // Default movement: Down
        
        if (movement === "R") [xMove, yMove] = [1, 0];
        else if (movement === "L") [xMove, yMove] = [-1, 0];
        else if (movement === "U") [xMove, yMove] = [0, -1];
  
        if (store[y + yMove]?.[x + xMove] === ".") {
          y += yMove;
          x += xMove;
        }
    }
  
    store[y] = `${store[y].slice(0, x)}!${store[y].slice(x + 1)}`;
    return store;
}