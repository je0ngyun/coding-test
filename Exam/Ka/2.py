import string
import math

tmp = string.digits + string.ascii_lowercase


def convert(num, base):
    q, r = divmod(num, base)
    if q == 0:
        return tmp[r]
    else:
        return convert(q, base) + tmp[r]


def is_prime_number(x):
    if x == 1:
        return False
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True


def solution(n, k):
    answer = 0
    al = []
    n = convert(n, k)
    temp = str(n).split("0")
    for item in temp:
        if item != "":
            al.append(int(item))
    print(al)
    for num in al:
        if is_prime_number(num):
            answer += 1
    return answer


test_n = 437674
test_k = 3

print(solution(test_n, test_k))
