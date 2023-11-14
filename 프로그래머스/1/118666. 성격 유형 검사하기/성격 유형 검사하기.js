function solution(survey, choices) {
    const check = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.forEach(el => el.split('').forEach(el => check[el]=0));
    
    choices.forEach((choice,idx) => check[survey[idx][choice < 4 ? 0 : 1]] += Math.abs(choice-4));
    
    return types.map(([a, b]) => check[b] > check[a] ? b : a).join("");
}