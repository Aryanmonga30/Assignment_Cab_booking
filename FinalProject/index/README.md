
# Cab Booking System

This project 'Cab Booking System' is a web application which provides us the shortest path to travel from a source to destination and provides us the estimated costs.



## Features

- Finds the shortest path.
- Enter user email, source and destination to book the cab.
- Estimation cost is provided for the destination.
- It uses Dijkstra's algorithm to find the shortest path.
- It is a SPA(single page application).



## Dijkstra's Algorithm
It uses Dijkstra algorithm to find out the shortest path between source and destination.
For a given source node in the graph, the algorithm finds the shortest path between that node and every other.It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. For example, if the nodes of the graph represent cities and costs of edge paths represent driving distances between pairs of cities connected by a direct road (for simplicity, ignore red lights, stop signs, toll roads and other obstructions), then Dijkstra's algorithm can be used to find the shortest route between one city and all other cities. 
## Code
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

  if (currentNode === null || distances[node] < distances[currentNode])
   {

    currentNode = node;

  }

}

if (currentNode === destination) {

  let path = [];

  while (previousNodes[currentNode])
   {

    path.push(currentNode);

    currentNode = previousNodes[currentNode];

  }

  path.push(source);

  return {

    distance: distances[destination],

    path: path.reverse()

  };

}
for (const [neighbor, weight] of Object.entries(graph[currentNode])) 
{

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


## Screenshots

![Graph of destinations](https://drive.google.com/file/d/1GQC85-m634RxaZuLBFdEAeQNbwBnHTYC/view?usp=drivesdk)

