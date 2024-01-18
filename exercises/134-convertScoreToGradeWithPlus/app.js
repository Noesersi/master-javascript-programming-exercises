function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0) return "INVALID SCORE";

    let calificacion;

    if (score >= 90 && score <= 92) {
        calificacion = 'A-';
    } else if (score >= 93 && score <= 97) {
        calificacion = 'A';
    } else if (score >= 98 && score <= 100) {
        calificacion = 'A+';
    } else if (score >= 80 && score <= 82) {
        calificacion = 'B-';
    } else if (score >= 83 && score <= 87) {
        calificacion = 'B';
    } else if (score >= 88 && score <= 89) {
        calificacion = 'B+';
    } else if (score >= 70 && score <= 72) {
        calificacion = 'C-';
    } else if (score >= 73 && score <= 77) {
        calificacion = 'C';
    } else if (score >= 78 && score <= 79) {
        calificacion = 'C+';
    } else if (score >= 60 && score <= 62) {
        calificacion = 'D-';
    } else if (score >= 63 && score <= 67) {
        calificacion = 'D';
    } else if (score >= 68 && score <= 69) {
        calificacion = 'D+';
    } else {
        calificacion = 'F';
    }

    return calificacion;
}

let output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A+'
