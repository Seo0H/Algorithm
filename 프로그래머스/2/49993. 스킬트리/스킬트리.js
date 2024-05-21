function solution(skill, skill_trees) {
    const skillMap = skill.split('').reduce((acc,el,idx) => {
        acc.set(el, idx)
        return acc
    }, new Map())
    
    return skill_trees.reduce((count, skill) => {
        const skillCheckMap = new Map(skillMap)
        let lastIdx = -1;
        
        for(let i = 0;i < skill.length; i++){
            const thisSkill = skill[i]
            if(skillCheckMap.has(thisSkill)){
                if(skillCheckMap.get(thisSkill) === lastIdx + 1)
                    lastIdx = skillCheckMap.get(thisSkill)
                else return count
            }
        }
        
        return count + 1
    },0);
}