function convertScoreToGrade(score) {
    // your code here
    if(score >100 || score < 0)return "INVALID SCORE"
    let calificacion;

    switch (true) {
        case score >= 90 && score <= 100:
            calificacion = 'A';
            break;
        case score >= 80 && score < 90:
            calificacion = 'B';
            break;
        case score >= 70 && score < 80:
            calificacion = 'C';
            break;
        case score >= 60 && score < 70:
            calificacion = 'D';
            break;    
        default:
            calificacion = 'F';
    }

    return calificacion;
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
