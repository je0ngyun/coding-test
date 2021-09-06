graph = []

n, m = map(int, input().split())
total = 0


graph = [list(map(int, input())) for _ in range(n)]


def dfs(graph, x, y):
    if x < 0 or x > n - 1 or y < 0 or y > m - 1:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(graph, x - 1, y)
        dfs(graph, x + 1, y)
        dfs(graph, x, y + 1)
        dfs(graph, x, y - 1)
        return True
    return False


for i in range(n):
    for j in range(m):
        if dfs(graph, i, j):
            total += 1

print(total)
