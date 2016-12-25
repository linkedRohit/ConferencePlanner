Design and Assumptions :
I have used javascript to propose the solution. This is an asynchronous single threaded event loop running constantly to serve as many requests as possible.

Design wise, It is a general knapsack problem. However I kept it simple by finding sum subset of array.
For each session every day, 
I am finding the possible talks that can fit into the schedule and then chosing one of the possible set.
Remove, the chosen set from the super set and again find suitable combination for evening session recursively.

I am assuming that the talk list only consists of talks for the scheduling and no more than that.
Also, I have validated the invalid timings and invalid descriptions of the talks.
I am assuming that the file with input data will be session.txt placed in root of the project.
To check for different test data, please change the requirements in session.txt.


How to run this application :

Since it is built using nodejs, please install npm on the system.
1. git clone https://github.com/linkedRohit/ConferencePlanner.git
2. cd ConferencePlanner
3. Run <npm install>
4. Run <npm start>
5. Open http://localhost:3000 and follow the urls (in blue color)


Along with the browser, it also prints output to the console so any ways the resultant schedule will be returned back.
