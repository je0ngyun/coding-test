list = list(map(int, input().split(" ")))

# resurt = ""
# def swab(num):
#     global resurt
#     x = str(num)
#     if int(resurt + x) > int(x + resurt):
#         resurt = resurt + x
#     else:
#         resurt = x + resurt


# while list:
#     swab(list.pop())
# print(resurt)


class Predicate(str):
    def __lt__(self, other):
        return self + other < other + self


res = "".join(sorted(map(str, list), key=Predicate, reverse=True))
