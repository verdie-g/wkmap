export function sortByDistance(coordRef, data, geoProj) {
  return data.map((e, i) => ({ index: i, dist: coordRef.distanceTo(geoProj(e)) }))
    .sort((a, b) => a.dist - b.dist)
    .map(e => data[e.index]);
}
