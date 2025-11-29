def smartTextAnalyzer(input:str):
    sentenceArr=input.strip().split(" ")
    letterSum=0
    longestWord={}
    letterFrequency={}
    longestWordLength=float('-inf')
    for i in sentenceArr:
        iLength=len(i)
        if iLength>longestWordLength:
            longestWordLength=iLength
        letterSum+=iLength
        j=i.lower()
        if iLength in longestWord:
            longestWord[iLength].append(j)
        else:
            longestWord[iLength]=[j]
       
        if j in letterFrequency:
            letterFrequency[j]+=1
        else:
            letterFrequency[j]=1

    return {
        "word_count":len(sentenceArr),
        "average_word":round(letterSum/len(sentenceArr),2),
        "longest_words":longestWord[longestWordLength],
        "word_frequency":letterFrequency
    }

print(smartTextAnalyzer("The quick brown fox jumps over the lazy dog the fox"))







