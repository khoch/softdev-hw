def repeat(word):
    def wordword(x):
        return word * x
    return wordword

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat('cool')(3)