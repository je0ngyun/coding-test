import sys
from queue import PriorityQueue

input = sys.stdin.readline
total = 0
queue = PriorityQueue()
N = int(input())

for _ in range(N):
    queue.put(int(input()))

while True:
    if queue.qsize() == 1:
        break
    else:
        temp = 0
        for i in range(2):
            temp += queue.get()
        total += temp
        queue.put(temp)

print(total)
