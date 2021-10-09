import sys

input = sys.stdin.readline


def solution(id_list, report, k):
    answer = [0] * len(id_list)
    cntmap = {}
    for id in id_list:
        cntmap[id] = 0
    # 신고 리포트에서 중복값 제거
    temp_set = set(report)
    report = list(temp_set)

    # 카운트 세기
    for rep in report:
        cntmap[rep.split()[1]] += 1

    # 결과 도출
    for rep in report:
        id_index = id_list.index(rep.split()[0])
        if cntmap[rep.split()[1]] >= k:
            answer[id_index] += 1

    return answer


test_id = ["muzi", "frodo", "apeach", "neo"]
test_report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
test_k = 2

print(solution(test_id, test_report, test_k))
