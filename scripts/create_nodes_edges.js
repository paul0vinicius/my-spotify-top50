function createEdges(element, index, array){
  var edges = [];
  for(var i = 0; i < array.length; i++){
    if(array[i].id != element.id){
      for(var j = 0; j < element.genres.length; j++){
        for(var k = 0; k < array[i].genres.length; k++){
          if(element.genres[j] === array[i].genres[k]){
            edges.push({source: element.id, target: array[i].id, type: element.genres[j]});
          }
        }
      }
    }
  }
  return edges;
}

function createNodesAndEdges(element, index, array){
  return {id: element.id, name: element.name, img: element.images[2].url, url: element.external_urls.spotify, genres: element.genres};
}

// Eu acho que as arestas estão duplicadas.
var dataArtists = $.getJSON("raw_data_spotify.json", function(json){
  console.log(json.items);
  var artistas = json.items;
  var nodes = artistas.map(createNodesAndEdges);
  var edges = artistas.map(createEdges);
  var d = [];

  // Deixa os edges concatenados, tira dos arrays
  for(var i = 0; i < edges.length; i++){
    for(var j = 0; j < edges[i].length; j++){
      d.push(edges[i][j]);
    }
  }

  return {nodes: nodes, edges: d};
});

//console.log(dataArtists);
