import math

n = int(input())
list = list(range(1, n + 1))


def list_chunk(n):
    return [[] for i in range(n)]


def is_prime_number(x):
    if x == 1:
        return False
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True


def solution(list):
    if len(list) == 1:
        return list

    # p찾기
    p = 0
    for i in range(2, len(list) + 1):
        if is_prime_number(i) and len(list) % i == 0:
            p = i
            break

    # p로 배열을 분할
    chunked = list_chunk(p)

    # p에따라 숫자를 나눠넣기
    point = 0
    for item in list:
        if point >= p:
            point = 0
        chunked[point].append(item)
        point += 1

    # 배열 붙혀서 리턴
    ret = []
    for item in chunked:
        ret += solution(item)

    return ret


print(solution(list))
