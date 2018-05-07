export function sortByDistance(coordRef, array, geoProj) {
  return array.map((e, i) => ({ index: i, dist: coordRef.distanceTo(geoProj(e)) }))
    .sort((a, b) => a.dist - b.dist)
    .map(e => array[e.index]);
}
