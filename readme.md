# task1:
-   I first tried to understand the problem well, so the problem is mainly based on string manipulation
-   A sentence is given and i am asked to come up with some analysis based on the sentence. 
-   So to get the total word count, I will try to first split the input on the spaces...
-   I then get an array of the letters present, so the length of the array will be the total word count
-   The average word count, average is the sum divided by the number of items present, and i am asked to present that answer in 2 decimals
-   So i kinda have to know the length of each word in the array add them all and then divide by the total word count
-   I can do this by declaring a var total and then loop through the array, and in each iteration add the .length of that string to the total var, when the loop ends we get a total var that really represents the total number of letters present
-   Next we divide by the word count and return...
-   Longest words, so on my previous plan i planned to loop through the split array, so we can use that to our advantage where we can store the words with its length, making an object as we iterate thorugh the splitted sentence,
-   Using that object we can iterate through the keys we can loop through that, but i just clocked that 2 keys in the same object can't exitst so a solution would be to check if that key exits, if it doesn't then just assign it the value, if it does then skip it.
-   This would help, but a better idea would be to use the lengths as the keys and then each key would have an array, so "the" and "fox" will be in the key 3:["the", "fox"]. So we check if the specific length is present if it does then just append to that value if not then assign it, so 3:["the"].
-   Here i noticed that "The" and "the" should be the same so we kinda have to do a toLowerCase conversion when checking each word
-   Back to the longest_words..., so we will have to find the biggest value in that object and if we do then just return the value which would be what we exactly need.
-  I think we can iterate through the keys in python but i really don't remember the syntax so that would be a thing to search for...
-   In the same loop i think we can also get the word_frequency, by declaring an empty object outside the loop then on each iteration we check the key exists if it does then increse the value if it don't initialize with 1
-   So this would mean i could solve the question in O(n) time...


-   Searched on how to check the existence of a key in an object

-   Search for order an object based on its keys
Figured it would better to find out while iterating, so i made a variable that gets updated when we get a smaller value that what it


-   I think this solution is good, because i don't think there is a way all of this analysis can be made with no iteration
-   So i think at the bare minimun is an o(n) the method i used for word_count and average_word, are standarda and simple, 
-   The way i have incorporated object inorder to get the correct values for smartTextAnalyzer would i think make it better with a cheap access to memory


# task 2:
-   Firt i have searched for the node documentation for the http and fetch methods, to get a refresher
-   So the problem states that to make a function that fetches something and it will have some retry limits till that limit is it will retry on every error it got, so i plan to make a function and inside it make a try catch, where the catch will either retry if limit isn't reached then retry, rethrow if limit is reached...
-   Inside the function we will have a variable representing the retries left, for example: if we init it to 5, every time a retry is made decrease and somewhere the catch make a check to see if the retry is less than or equal to 0, if so then throw the error for the wait part we can use setTimeout, and then retry a while loop would do great so if sucess then falsify the condition the while depends on, and if error and limit is greater than 0 then continue;
-   The random response generator can be created by math.random...
I was trying to catch the error when it happens but realized that no error gets thrown and the function continues to send successes responses right after sending the error response so instead of catching it, checking for the status code would be better

-   The logs showed me that set timeout logs are prinitng the waiting operation last, which directly implies that the setTimeout is queued for later after everything is finished, so maybe inserting the remaining code inside the setTimeout callback, that way it will really wait..., but i think this would be creting a new process of execution and the will loop won't continue as intended

-   Here i searched for a basic promise vs callback on geeks for geeks
-   Didn't found much about this specific case, 
-   Searched about setTimeout
-   Found it is always synchronous and impossible to be awaited, so if that then i have to find a way to await it...
-   So i will make that delay function that retuns a promise so we can await it...
-   So if i call the resolve of the promise function after some time, this way i have made the main function really pause and wait for it
-   Something like return new Promise((resolve)=>setTimeout(resolve, 1000)), I think this will work because the promise returns the value it promised when resolve is returned so if resolve is retuned after some time the delay happens
-   I think this solution is good, because the it exactly delivers what is asked in the question exactly as needed. The delay logic is implemented as required and the also a randomly response returining function is implemented, the logic for that was found right on the first page of the documentation with some edits to fit the context.

