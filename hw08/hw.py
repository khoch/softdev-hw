def union(a, b):
    return a + [x for x in b if x not in a]

def intersection(a, b):
    return [x for x in a if x in b]

def setdiff(a, b):
    return [x for x in a if x not in b]

def symdiff(a, b):
    return [x for x in a+b if (x in a and not x in b or x in b and not x in a)]

def cartproduct(a, b):
    return [[x,y] for x in a for y in b]

print union( [1,2,3], [2,3,4] )
print intersection( [1,2,3], [2,3,4] )
print setdiff( [1,2,3], [2,3,4] )
print symdiff( [1,2,3], [2,3,4] )
print cartproduct( [1,2,3], ['red','white','green'] )