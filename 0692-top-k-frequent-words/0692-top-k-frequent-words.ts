function topKFrequent(words: string[], k: number): string[] {
    const wordMap = new Map();

    words.forEach(word => {
        if(!wordMap.has(word)){
            wordMap.set(word, { count: 0, word });
        }

        const current = wordMap.get(word);
        current.count += 1;
        wordMap.set(word, current);

    })

    return [...wordMap.values()]
                .sort((a,b) => b.count - a.count || a.word.localeCompare(b.word))
                .map(({ word }) => word)
                .slice(0, k);
};