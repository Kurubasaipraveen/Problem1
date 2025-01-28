def FindeachWordOccurance(a):
    a.replace(' ','').lower()
    seen=set()
    result=[]
    for i in a:
        if i not in seen:
            count=a.count(i)
            result.append(f"{i.upper()}-{count}")
            seen.add(i)
    return result
    
print(FindeachWordOccurance('Amolya Sharma'))