/// It does not works, did not pass a secret test :'(
// function adjustLights(lights) {
//     let result = 0;
//     let resultAlt = 0;
// 
//     const [even] = lights;
// 
//     countLight = (color) => lights.reduce((acc, cur) => acc + (cur === color ? 1 : 0), 0);
// 
//     resultAlt = Math.abs(countLight("🔴") - countLight("🟢"));
// 
//     for (let i in lights) {
//         const light = lights[i];
//         const isEven = i % 2 === 0;
//         if (isEven && light !== even) result++;
//         if (!isEven && light === even) result++;
//     }
//     return Math.min(result, resultAlt);
// }