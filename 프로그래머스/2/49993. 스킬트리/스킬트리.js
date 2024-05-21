function solution(skill, skill_trees) {
    return skill_trees.filter(isCorrect).length
    
    function isCorrect(skillTree){
        const skillSet = skill.split('')
        
        for(let i=0; i<skillTree.length; i++){
            if(!skillSet.includes(skillTree[i])) continue
            if(skillTree[i] === skillSet.shift()) continue
            return false
        }
        return true
    }
}