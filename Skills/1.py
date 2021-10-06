list = [0, 1, 3, 4]

# Gauss's Addition Formula
def gauss():
    exceptSum = len(list) * (len(list) + 1) // 2
    actureSum = sum(list)
    print(exceptSum - actureSum)


# Bit Operation
def bitOp():
    missing = len(list)
    for i in range(len(list)):
        missing ^= i ^ list[i]
    print(missing)


gauss()
bitOp()
