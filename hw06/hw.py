UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
DIGITS="1234567890"

def isValid(password):
    u = [1 for x in password if x in UC_LETTERS]
    l = [1 for x in password if x in LC_LETTERS]
    d = [1 for x in password if x in DIGITS]
    if (u and l and d):
        return True
    else:
        return False
	
print isValid("MyNoobPass1234")
print isValid("a2")
print isValid("passworD1234")

NONALPH = ".?!&#,;:-_*"

def howStrong(password):
    u = [1 for x in password if x in UC_LETTERS]
    l = [1 for x in password if x in LC_LETTERS]
    d = [1 for x in password if x in DIGITS]
    n = [1 for x in password if x in NONALPH]
    str = 0
    if len(u) >= 9:
        str += 3
    else:
        str += int(len(u)/3)
    if len(l) >= 6:
        str += 3
    else:
        str += int(len(l)/2)
    if len(d) >= 2:
        str += 2
    else:
        str += len(d)
    if len(n) >= 2:
        str += 2
    else:
        str += len(n)
    return str

print howStrong("MyNoobPass1234")
print howStrong("a3")
print howStrong("ThisIsMyNoobPassItsAsNoobAsItGets1234567!?!!?!!")
