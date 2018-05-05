function growBox(box, perc) {
  return [
    box[0] + box[0] * perc,
    box[1] + box[1] * perc,
    box[2] - box[2] * perc,
    box[3] - box[3] * perc,
  ];
}

function containsBox(box1, box2) {
  return box2[0] < box1[0]
    && box2[1] < box1[1]
    && box2[2] > box1[2]
    && box2[3] > box1[3];
}

export { growBox, containsBox };
