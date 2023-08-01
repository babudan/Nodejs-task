# Nodejs-task

# Asignment

Task 1: Basic Node.js Server
Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

Task 2: Data Manipulation
Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

Task 3: Asynchronous File Handling
Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.

Task1 running steps:
step1 ==> start the server ==> npm start or nodemon src/index.js
step2 ==> hit the route endpoint with 300 server ==> http://localhost:3000/test
            response formate ==> {
                       "status":true,
                       "message":"Hello ,World!"
                                }    

Task2 running steps:
step1 ==> start the server ==> npm start or nodemon src/index.js
step2 ==> use postman and put some input in POST mehode in the json formate amd hit ==> localhost:3000/datamanipulate
           data input formate ==> {
             "arr" : [100 ,"505" ,200]
                                 }

           response formate ==> {
                       "status": true,
                        "data": 805
                                }                       

Task3 running steps:
   step1 ==> go inside the src ==> cd src
   step2 ==> go inside the Controller ==> cd Controller
   step3 ==> run the script ==> node task3.js