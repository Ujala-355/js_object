a="My name is kumar, and my friends name is Dhamu"
m=a.split()
i=0
c=0
while i<len(m):
    if m[i]=="is":
        c+=1
    i+=1
print(c)