function allPairsShortestPaths(graph) 
{
    var dist = Array(graph.length).fill().map(() => Array(graph.length).fill(Infinity))
    
    for (let u = 0; u < dist.length; u++)
    {
        dist[u][u] = 0
        for (let v = 0; v < dist.length; v++)
        {
            if (graph[u][v] != Infinity)
            {
                dist[u][v] = graph[u][v]
            }
        }
    }

    for (let k = 0; k < dist.length; k++)
    {
        for (let i = 0; i < dist.length; i++)
        {
            for (let j = 0; j < dist.length; j++)
            {
                if (dist[i][j] > dist[i][k] + dist[k][j])
                {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    return dist;
}
