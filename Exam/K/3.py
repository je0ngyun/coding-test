import math


def solution(fees, records):
    answer = []
    car_num = []
    # 차량 인덱스 만들기
    for item in records:
        car_num.append(item.split()[1])
    car_num = list(dict.fromkeys(car_num))
    car_num.sort()

    # 미 출차 차량 처리
    temp = []
    for item in records:
        temp.append(item.split())
    temp.sort(key=lambda x: x[1])
    records = temp

    rcnt = [0] * len(car_num)
    for item in records:
        index = car_num.index(item[1])
        rcnt[index] += 1  ###

    for i in range(len(rcnt)):
        if rcnt[i] % 2 == 1:
            rcnt[i] += 1
            records.append(["23:59", car_num[i], "OUT"])
    records.sort(key=lambda x: x[1])
    answer = [0] * len(car_num)

    # 총 시간 계산하기
    for i in range(0, len(records), 2):
        intime = list(map(int, (records[i][0].split(":"))))
        outtime = list(map(int, (records[i + 1][0].split(":"))))
        time = (outtime[0] * 60 + outtime[1]) - (intime[0] * 60 + intime[1])
        answer[car_num.index(records[i][1])] += time

    print(answer)

    # 최종계산
    ret = []
    for item in answer:
        if item <= fees[0]:
            ret.append(fees[1])
        else:
            w = (item - fees[0]) / fees[2]
            w = math.ceil(w)
            ret.append(fees[1] + w * fees[3])

    return ret


test_fees = [180, 5000, 10, 600]
test_records = [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
]

solution(test_fees, test_records)
