N = int(input())
total = 0
temp = 0

if N % 5 == 0:
    total += N // 5
else:  # 5로 나뉘지 않을경우엔 최대한 3의 배수를 적게 남겨야함
    for i in range(N // 5, 0, -1):
        temp = N - (i * 5)
        if temp % 3 == 0:
            total += i
            break

if total == 0:  # 3의 배수로 남기지 못했을 경우
    if N % 3 == 0:
        total += N // 3
    else:
        total = -1
else:  # 3의 배수로 남았을 경우
    total += temp // 3

print(total)
