///// Simple function to kick off the recursive version, with default
// values for the number of opens pending (0), the substring fragment
// we've built so far (""), and the array of complete solutions ([]).
function allValidNParens(numParens) {
    var solutions = [];
    rValidNParens(numParens, 0, "", solutions);
    return solutions;
}
///// Recursive All-Valid-Combinations-Of-N-Pairs-Parentheses func.
// Parameters: number of parens remaining, number of opens pending,
// unfinished substring fragment we're building, array of solutions
function rValidNParens(parens, opens, subStr, solutions) {
    // If no parens/opens remain, this fragment is a valid solution.
    if (!parens && !opens) {
        solutions.push(subStr);
    }
    // If opens remain, one option is to close one.
    if (opens) {
        rValidNParens(parens, opens-1, subStr + ")", solutions);
    }
    // If unused parens remain, one option is to open a new one.
    if (parens) {
        rValidNParens(parens-1, opens+1, subStr + "(", solutions);
    }
    // solutions array is a 'live' obj; we don't need to return it.
}

console.log(allValidNParens(2));