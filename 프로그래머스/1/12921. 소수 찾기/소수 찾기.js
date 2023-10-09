function solution(n){
    const primes = Array.from({length:n+1}, _ => true);
    let count = n-1;
   
    for(let i=2; i < Math.sqrt(n) ; i++){
        if(primes[i]) {
            for(let j=i**2; j<=n; j+=i){
                if(primes[j]){
                    count--;
                    primes[j] = false;
                }
            }
         }
    }
    return count;
}
