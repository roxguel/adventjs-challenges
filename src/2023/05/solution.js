function cyberReindeer(road, time) {
  const result = [road];
  let originalRoad = road.replace("S", ".");

  let sledIndex = 0;
  for (let t = 1; t < time; t++) {
    if (t === 5) {
      originalRoad = originalRoad.replaceAll("|", "*");
      road = originalRoad;
    }

    const roadArr = road.split("");
    if (originalRoad[sledIndex + 1] !== "|") {
      roadArr[sledIndex] = originalRoad[sledIndex];
      sledIndex++;
      roadArr[sledIndex] = "S";
    }

    road = roadArr.join("");
    result.push(road);
  }

  return result;
}