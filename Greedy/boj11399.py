N = int(input())
time = list(map(int, input().split()))
time.sort()
total = 0

for i in range(len(time)):
    temp = 0
    for j in range(i + 1):
        temp += time[j]
    total += temp

print(total)
