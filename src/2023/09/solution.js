/// Inspired by @CondeReggi
function adjustLights(lights) {
    let green = 0, red = 0;
    const RED = "🔴", GREEN = "🟢";

    for (let i in lights) {
        const light = lights[i];
        const isEven = i % 2 === 0;

        if (light === RED && isEven) red++;
        else if (light === RED && !isEven) green++;

        if (light === GREEN && isEven) green++;
        else if (light === GREEN && !isEven) red++;
    }

    return Math.min(red, green);
}