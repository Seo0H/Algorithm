function solution(n) {
    const dp = [1, 2]
    for (let i=2; i < n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1_000_000_007
    }
    return dp[n-1];
}

