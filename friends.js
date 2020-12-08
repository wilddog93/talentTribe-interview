 // Simple Friend Matching Script
// Objective: Sort the array of people according to who has the most interests in common with Sharon. The person with the most interests matching should be on top.
// Step 1: Write the getSortedList() function that sorts the lists of people - whoever has the most similar interests with the 'sharon' object (3 matching interests) should be on top
// Step 2: Note that order of interests does NOT matter. As long as Ahmad has 'cooking' somewhere in his interests array and Sharon does too, it is counted as a match
// Step 3: Open index.html and refresh the browser, checking the console to see your code's output
// Note 1: You are allowed to use Google, but you are NOT allowed to import libraries
// Note 2: const and let are ES6 variable declarations (they are identical to var for the purposes of this exercise)

const interestList = [
    "gaming",
    "driving",
    "football",
    "fishing",
    "painting",
    "cooking",
    "singing",
    "shopping",
    "running",
    "clubbing"
];

const people = [
    { name: "Ahmad", interests: ["shopping", "painting", "cooking"] },
    { name: "Betty", interests: ["running", "painting", "football"] },
    { name: "Charlie", interests: ["gaming", "football", "painting"] },
    { name: "Diana", interests: ["fishing", "singing", "driving"] },
    { name: "Ethan", interests: ["gaming", "clubbing", "cooking"] },
    { name: "Farhan", interests: ["cooking", "driving", "fishing"] },
    { name: "Gwen", interests: ["singing", "fishing", "gaming"] },
    { name: "Helen", interests: ["football", "clubbing", "shopping"] },
    { name: "Imelda", interests: ["painting", "running", "football"] },
    { name: "Josef", interests: ["shopping", "running", "cooking"] },
    { name: "Khan", interests: ["fishing", "running", "clubbing"] },
    { name: "Lionel", interests: ["gaming", "singing", "driving"] }
];

const sharon = {
    name: "Sharon",
    interests: ["football", "painting", "gaming"]
};

function getSortedList() {
    let output = people.slice();
    // write yor code here
    output.forEach((person, index) => {
        let count = 0;
        person.interests.forEach(int => {
            sharon.interests.forEach(interest => {
    
                if (int === interest) {
                    count++
                    people[index]['count'] = count;
                }
            })
        })
    })
    
    output.sort((a, b) => {
        if (a.count >= b.count) {
            return -1;
        } else {
            return 1;
        }
    })

    // a.interests == b.interests ? 0 : +(a.interests <= b.interests) || -1;
    return output;
}

function printPeople() {
    let list = getSortedList();
    list.unshift(sharon);
    list.forEach(person => {
        person.interest1 = person.interests[0];
        person.interest2 = person.interests[1];
        person.interest3 = person.interests[2];
        delete person.interests;
    });
    console.log("Friend Matching Script Output:");
    console.table(list);
}

printPeople();
