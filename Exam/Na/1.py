def solution(cards):
    v = [True] * len(cards)
    for card in cards:
        if card[0] == card[1] == card[2]:
            v[cards.index(card)] = False
    for i in range(len(cards)):
        ds1 = min(cards[i])
        i1 = cards[i].index(ds1)
        for j in range(i + 1, len(cards)):
            if not v[i] or not v[j]:
                continue
            ds2 = min(cards[j])
            i2 = cards[j].index(ds2)
            # index 가 다를때만 카드 교체시도
            if i1 != i2:
                nc1 = cards[i].copy()
                nc2 = cards[j].copy()
                nc1[i1] += 1
                nc1[i2] -= 1
                nc2[i2] += 1
                nc2[i1] -= 1
                # 원래보다 이득이 될 경우에만 교체
                if ds1 < min(nc1) and ds2 < min(nc2):
                    cards[i] = nc1
                    cards[j] = nc2
                    v[i] = False
                    v[j] = False
    return cards


print(solution([[6, 9, 10], [8, 7, 10], [10, 10, 10]]))
print(solution([[3, 6, 9], [9, 8, 7], [10, 5, 1]]))
