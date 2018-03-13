function createEdges(element, index, array){
  if()
}

function createNodesAndEdges(element, index, array){
  var nodes = {id: element.id, name: element.name, img: element.images[2].url, url: element.external_urls.spotify, genres: element.genres};
  console.log(nodes);
  var edges = nodes.map(createEdges);
  //Transforma em JSON
}

$.getJSON("raw_data_spotify.json", function(json){
  console.log(json.items);
  var artistas = json.items;
  artistas.map(createNodesAndEdges);
});
