def FindeachWordOccurance(a):
    text=a.replace(' ','').upper()
    char_count={}
    for i in text:
        if i in char_count:
            char_count[i]+=1
        else:
            char_count[i]=1
    result= [f'{i}-{count}'for i,count in sorted(char_count.items())]
    for i in result:
        print(i)
    
    
FindeachWordOccurance('Amolya Sharma')