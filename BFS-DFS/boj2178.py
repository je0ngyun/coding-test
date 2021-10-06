import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().strip())) for _ in range(n)]

move = ((-1, 0), (0, +1), (+1, 0), (0, -1))

queue = deque()
queue.append([0, 0])

while queue:
    p = queue.popleft()
    w = graph[p[0]][p[1]]
    for mv in move:
        nx = p[0] + mv[0]
        ny = p[1] + mv[1]
        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue
        if graph[nx][ny] == 0:
            continue
        else:
            if graph[nx][ny] == 1:
                queue.append([nx, ny])
                graph[nx][ny] = w + 1

print(graph[n - 1][m - 1])
