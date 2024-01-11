function init(){
  let map = new ymaps.Map("map", {
    center: [77.21901219477293, 89.46303391829076],
    zoom: 8,
  });
}
ymaps.ready(init)