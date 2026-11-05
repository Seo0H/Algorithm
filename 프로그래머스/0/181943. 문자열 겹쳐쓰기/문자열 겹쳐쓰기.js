function solution(my_string, overwrite_string, s) {
    if(s > my_string.length) return my_string
    
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length)
}