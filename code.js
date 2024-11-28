function convertToAdjList(adjMatrix) {
    var list = [];

    for (n = 0; n < adjMatrix.length; n++) {
        var array = [];

        for (i = 0; i < adjMatrix.length; i++) {
            if (adjMatrix[n][i] == 1) {
                array.push(i);
            }
        }
        list[n] = array;
    }
    return list;
}

function convertToAdjMatrix(adjList) {
    var adjMatrix = [];

    for (n = 0; n < adjList.Length; n++) {
        var array = adjList[n];
        var pos = 0;
        var tmp = [];

        for (i = 0; i < adjList.length; i++) {
            if (i == array[pos]) {
                tmp.push(1);
            } 
            else {
                tmp.push(0);
            }
            arraypos++;
        }
        adjMatrix.push(tmp);
    }
    return adjMatrix;
}
