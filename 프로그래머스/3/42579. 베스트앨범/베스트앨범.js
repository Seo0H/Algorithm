function solution(genres, plays) {
    const genreMap = new Map();
    
    genres.forEach((genre, id) => {
        if(!genreMap.has(genre)) {
            genreMap.set(genre, { total: 0 , songs: [] });
        }
        
        const current = genreMap.get(genre);
        
        current.total += plays[id];
        current.songs.push({ id, play: plays[id]});
    })
    
    
    return [...genreMap.values()]
        .sort((a,b) => b.total - a.total)
        .flatMap(({ songs }) => 
                 songs
                    .sort((a,b) => b.play - a.play || a.id - b.id)
                    .slice(0, 2))
        .map(({id}) => id)
}