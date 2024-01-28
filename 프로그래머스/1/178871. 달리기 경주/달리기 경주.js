function solution(players, callings) {
    const playerRankHash = players.reduce((playerRankHash, curPlayerName, rank) => {
        playerRankHash.set(curPlayerName, rank) 
        return playerRankHash
    }, new Map());
    
    
    callings.forEach(calledPlayer => {
        const outpacePlayerRank = playerRankHash.get(calledPlayer); // player idx
        const outpacedPlayer = players[outpacePlayerRank-1];

        playerRankHash.set(outpacedPlayer, outpacePlayerRank);
        playerRankHash.set(calledPlayer, outpacePlayerRank-1);
        
        [players[outpacePlayerRank-1], players[outpacePlayerRank]] = [players[outpacePlayerRank],players[outpacePlayerRank-1]];
        
    })
    

    return players
}

