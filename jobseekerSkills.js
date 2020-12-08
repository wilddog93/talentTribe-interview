/**
TalentTribe helps jobseeker (pros) take a look into careers & companies in Asia. 
Upon registering on our site, a Jobseeker (pros) specifies which categories of skills they have. To help match Employer requirement with qualified Jobseeker (pros), TalentTribe maintains a list of Jobseeker grouped by skill categories.

Given a list of Jobseeker (pros) and their category skills, return the list of Pros for each category.

##### Example #####
For pros = ["Bill", "Steve", "Zuck"] and
skills =    [["Digital Marketing", "SEO", "UI/UX"],
            ["Accounting", "Digital Marketing", "Employer Branding"],
            ["Accounting", "UI/UX"]]

the output should be :
jobSeekerCategorization(pros, skills) = [[["Accounting"], ["Steve", "Zuck"]],
                                        [["Digital Marketing"], ["Bill", "Steve"]],
                                        [["Employer Branding"], ["Steve"]],
                                        [["SEO"], ["Bill"]],
                                        [["UI/UX"], ["Bill", "Zuck"]]]


##### Input/Output #####
[input] array.string pros
A sorted non-empty array of unique strings consisting of English letters.
Here and below we assume that strings are sorted lexicographically.
Guaranteed constraints:
1 ≤ pros.length ≤ 5,
3 ≤ pros[i].length ≤ 10.

[input] array.array.string skills
Array of the same length as pros. For each valid i skills[i] is a sorted array of unique elements, representing the categories the ith Pro provides services in.
Guaranteed constraints:
1 ≤ skills.length ≤ 5,
1 ≤ skills[i].length ≤ 10,
3 ≤ skills[i][j].length ≤ 25.

[output] array.array.array.string
Array of category descriptions sorted by category names. Each category should be listed in the following format: [[<category>], [<Pro1>, <Pro2>...]] where <category> is a category name, and <Proi> is a Pro that provides services in it.
Each category present in skills should be returned (in the right order), and Pros in each subarray should be sorted.
*/


function jobSeekerCategorization(pros, skills) {
    // write your code below
    const indexMap = {};
    const output = [];
    let index = 0;

    //create array of skills and track indexes
    skills.forEach(arr => {
        arr.forEach(skill => {
            if (!indexMap[skill]) {
                indexMap[skill] = index.toString();
                output.push([
                    [skill],
                    []
                ])
                index++;
            }
        })
    })

    //populate secondary arrays using indexmap for reference
    pros.forEach((pro, index) => {
        skills[index].forEach(skill => {
            let i = indexMap[skill];
            output[i][1].push(pro);
        })
    })

    //sort names incase not alphabetical
    output.forEach(output => {
        output[1].sort((a, b) => a[0] > b[0] ? 1 : -1);
    })


    // //sort skills incase not alphabetical
    return output.sort((a, b) => a[0] > b[0] ? 1 : -1);
}



/*
##### TEST CASE 1 #####
Given Input:
    pros: ["Bill", "Steve", "Zuck"]
    skills:
        [["Digital Marketing","SEO","UI/UX"], 
        ["Accounting","Digital Marketing","Employer Branding"], 
        ["Accounting","UI/UX"]]
Expected Output:
    [[["Accounting"],["Steve","Zuck"]], 
    [["Digital Marketing"],["Bill","Steve"]], 
    [["Employer Branding"],["Steve"]], 
    [["SEO"],["Bill"]], 
    [["UI/UX"],["Bill","Zuck"]]]
*/
const pros1 = ["Bill", "Steve", "Zuck"]
const skills1 = [["Digital Marketing", "SEO", "UI/UX"],
["Accounting", "Digital Marketing", "Employer Branding"],
["Accounting", "UI/UX"]]
const testCase1 = jobSeekerCategorization(pros1, skills1)
console.log('testCase1 Output is --> ', testCase1)

/*
##### TEST CASE 2 #####
Given Input:
    pros: ["First", "Fourth", "Second", "Third"]
    skills:
        [["One","Three","Two"], 
        ["One","One three","One two"], 
        ["One two","One two three","Two"], 
        ["One","One three","One two","One two three","Three","Two"]]
Expected Output:
    [[["One"],["First","Fourth","Third"]], 
    [["One three"],["Fourth","Third"]], 
    [["One two"],["Fourth","Second","Third"]], 
    [["One two three"],["Second","Third"]], 
    [["Three"],["First","Third"]], 
    [["Two"],["First","Second","Third"]]]
*/
const pros2 = ["First", "Fourth", "Second", "Third"]
const skills2 = [["One", "Three", "Two"],
["One", "One three", "One two"],
["One two", "One two three", "Two"],
["One", "One three", "One two", "One two three", "Three", "Two"]]
const testCase2 = jobSeekerCategorization(pros2, skills2)
console.log('testCase2 Output is --> ', testCase2)

/*
##### TEST CASE 3 #####
Given Input:
    pros: ["Man"]
    skills: [["Beer"]]
Expected Output:
    [[["Beer"],["Man"]]]
*/
const pros3 = ["Man"]
const skills3 = [["Beer"]]
const testCase3 = jobSeekerCategorization(pros3, skills3)
console.log('testCase3 Output is --> ', testCase3)