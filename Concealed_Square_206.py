'''
I have chosen Python to write the code because this is more faster looping through the numbers and getting the range between is also very Easy.
Given the Square is in the form of 1_2_3_4_5_6_7_8_9_0,
since  0 being the smallest possible integer so replacing "_" to "0" we get the smallest Possible num = 1020304050607080900
Similarly, 9 being the highest integer so replacing "_" to "9" we get the biggest possible num =  192939495969798990
This Means our range to search the number is [squareRoot of 1020304050607080900 to square root of 192939495969798990] which comes to be [1010101010, 1389026623].
This means we can reduce our Search range to get in to [squareRoot of 10203040506070809 to square root of 19293949596979899] which comes to be [101010101, 138902662]
(This is done by ignoring the numbers which are ending with zero)
This also means that the second digit at the tail of our number is either 3 or 7.
with this information we har following Sloution:
'''
import math
def isModular(number):
    for i in range(8, 0, -1):
        number = int(number / 100);
        if number % 10 != i:
            return False;
    return True;

def Solve():
    Start = int(math.sqrt(10203040506070809) / 10);
    End = int(math.sqrt(19293949596979899) / 10) + 1;

    for i in range(Start, End):
        tailNumber = i * 10 + 3;
        if isModular(tailNumber * tailNumber):
            break;

        tailNumber = i * 10 + 7;
        if isModular(tailNumber * tailNumber):
            break;

        if i % 10000 == 0:
            print((i - Start) / (End - Start) * 100, "%");

    print"Concealed Square Problem 206 finding he unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,where each '_' is a single digit is: ", tailNumber * 10;

Solve();



'''
Equivalent Code in javascript (This is taking too much of time to loop through the numbers.)
function getRange(start, stop, step) {
       if (typeof stop == 'undefined') {
           // one param defined
           stop = start;
           start = 0;
       }

       if (typeof step == 'undefined') {
           step = 1;
       }

       if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
           return [];
       }

       var result = [];
       for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
           result.push(i);
       }

       return result;
   };
   function solution (number){
       for(var i in getRange(0,8, -1)){
           number = parseInt(number/100)
           return(number%10!=i ? false :true);
       }
   }
   function solving (){
       var netResult;
       var from = parseInt(Math.sqrt(10203040506070809)/10),
           to = parseInt(Math.sqrt(19293949596979899)/10)+1;
       for (var j in getRange(from, to)){
           netResult= j*10 + 3;
           if (solution (netResult*netResult)) {
               break;
           }
           netResult = j*10 + 7;
           if (solution (netResult*netResult)) {
               break;
           }
           if (j%10000==0) {

           } else {
               console.log(netResult*10);
           }
       }

   }
'''