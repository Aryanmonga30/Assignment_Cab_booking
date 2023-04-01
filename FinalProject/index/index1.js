var graph = {
  'A': {'B': 5, 'D': 10},
  'B': {'C': 5, 'E': 10 , 'A': 5 },
  'C': {'F': 5, 'B': 5},
  'D': {'E': 5, 'A': 10},
  'E': {'F': 20, 'B':10, 'D' : 5},
  'F': {'C': 5, 'E': 20 }
};

var cabs = [
  {name: 'Cab1', price: 2},
  {name: 'Cab2', price: 3},
  {name: 'Cab3', price: 4},
  {name: 'Cab4', price: 5},
  {name: 'Cab5', price: 6}
];

function shortestPath(graph, source, destination) {
        
const distances = {};
const visited = {};
const previousNodes = {};
let unvisited = new Set();
for (const node in graph) {
distances[node] = Infinity;
visited[node] = false;
previousNodes[node] = null;
unvisited.add(node);
}
distances[source] = 0;
while (unvisited.size > 0) {
let currentNode = null;
for (const node of unvisited) {
  if (currentNode === null || distances[node] < distances[currentNode]) {
    currentNode = node;
  }
}
if (currentNode === destination) {
  let path = [];
  while (previousNodes[currentNode]) {
    path.push(currentNode);
    currentNode = previousNodes[currentNode];
  }
  path.push(source);
  return {
    distance: distances[destination],
    path: path.reverse()
  };
}
for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
  const newDistance = distances[currentNode] + weight;
  if (newDistance < distances[neighbor]) {
    distances[neighbor] = newDistance;
    previousNodes[neighbor] = currentNode;
  }
}
visited[currentNode] = true;
unvisited.delete(currentNode);
}
return null;
}


    function estimateCost() {
        var email = document.getElementById("email").value;
        var source = document.getElementById("source").value;
        var destination = document.getElementById("destination").value;
        var cab = document.getElementById("cab").value;
        var result = shortestPath(graph, source, destination);

        if(result === null) {
            alert("No path found");
            return;
        }
        console.log(result.path);

    
        var timeTaken =result.distance;
console.log(timeTaken);
console.log(cab);

        var cabIndex = cab;
        var cabPricePerMinute = cabs[cabIndex].price;

        var estimatedCost = timeTaken * cabPricePerMinute;

        // alert("Estimated cost is " + estimatedCost);
        document.getElementById("cabbook").innerHTML = "Estimated cost is " + estimatedCost;
    }


    function bookCab() {
        var email = document.getElementById("email").value;
        var source = document.getElementById("source").value;
        var destination = document.getElementById("destination").value;
        var cab = document.getElementById("cab").value;
        var result = (Number)(cab) +1;

        // alert("Estimated cost is " + estimatedCost);
        document.getElementById("cabbook").innerHTML = "Your Cab" + result +" is booked from "+ source + " to "+ destination;
    }



    function shortpath() {
        var email = document.getElementById("email").value;
        var source = document.getElementById("source").value;
        var destination = document.getElementById("destination").value;
        var cab = document.getElementById("cab").value;
        var result = shortestPath(graph, source, destination);

        if(result === null) {
            alert("No path found");
            return;
        }
        console.log(result.path);

        // alert("Estimated cost is " + estimatedCost);
        document.getElementById("cabbook").innerHTML = "The Shortest path is " + result.path;
    }



