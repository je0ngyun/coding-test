def solution(student, k):
    answer = 0
    group = []
    startIndex = 0
    while startIndex < len(student):
        for i in range(startIndex, len(student)):
            for j in range(startIndex, i + 1):
                group.append(student[j])
            if group.count(1) == k:
                answer += 1
            group.clear()
        startIndex += 1
    return answer
