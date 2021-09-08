import sys

T = int(input())

for i in range(0, T):
    Cnt = 1
    people = []

    N = int(input())
    for i in range(N):
        Paper, Interview = map(int, sys.stdin.readline().split())
        people.append([Paper, Interview])

    people.sort()
    Max = people[0][1]

    for i in range(1, N):
        if Max > people[i][1]:
            Cnt += 1
            Max = people[i][1]

    print(Cnt)
