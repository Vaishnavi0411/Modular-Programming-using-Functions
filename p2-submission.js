var assignmentScore = 97;
var projectScore = 82;
var quizScore = 60;
var midTermScore = 75;
var finalExamScore = 80;

function calculateTotalWeightedScore(assignmentScore, projectScore, quizScore, midTermScore, finalExamScore) {
    let assignmentWeight = 10;
    let projectWeight = 35;
    let quizWeight = 10;
    let midTermWeight = 15;
    let finalExamWeight = 30;

    // Step 2: Calculate weighted scores for every assessment
    let assignmentWeightedScore = (assignmentWeight / 100) * assignmentScore;
    let projectWeightedScore = (projectWeight / 100) * projectScore;
    let quizWeightedScore = (quizWeight / 100) * quizScore;
    let midTermWeightedScore = (midTermWeight / 100) * midTermScore;
    let finalExamWeightedScore = (finalExamWeight / 100) * finalExamScore;

    //Sum all Weighted scores
    var overallWeightedScore = assignmentWeightedScore + projectWeightedScore + quizWeightedScore + midTermWeightedScore + finalExamWeightedScore;

    // Step 4: Display individual weighted scores and the total weighted score
    console.log('Assessment Type  Weighted score');
    console.log(`Assignments      ${assignmentWeightedScore.toFixed(1)}`);
    console.log(`Project          ${projectWeightedScore}`);
    console.log(`Quizzes          ${quizWeightedScore}`);
    console.log(`Mid Term         ${midTermWeightedScore}`);
    console.log(`Final Exam       ${finalExamWeightedScore}`);
    
    return overallWeightedScore;
}

var totalWeightedScore = calculateTotalWeightedScore(assignmentScore, projectScore, quizScore, midTermScore, finalExamScore);
console.log(`The Total Weighted Score is : ${totalWeightedScore}`);