from collections import deque

graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]
visited = [0] * len(graph)


def dfs(start):
    if visited[start] == 1:
        return
    visited[start] = 1
    print(start, end="")
    for item in graph[start]:
        dfs(item)


def bfs(start):
    queue = deque([start])
    visited[start] = 1
    while queue:
        node = queue.popleft()
        print(node, end="")
        for i in graph[node]:
            if visited[i] == 0:
                queue.append(i)
                visited[i] = 1


bfs(1)
