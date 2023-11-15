import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int[] arr = new int[26]; // 영문자 26개
		String s = br.readLine();
		
		//문자열 처리
		for (int i = 0; i < s.length(); i++) {
			if ('a' <= s.charAt(i) && s.charAt(i) <= 'z') {
				//소문자일 경우
				arr[s.charAt(i)-97]++;
			} else { 
				//대문자일 경우
				arr[s.charAt(i)-65]++;
			}
		}
		int max =-1; //관행적으로 쓰는 표현
		char ch = '?';
		for(int i=0; i<26; i++) {
			
			if(arr[i] > max) {
				max=arr[i];
				ch = (char) (i+65);
			}
			else if (arr[i] == max) {
				ch = '?';
			}
		}
		System.out.println(ch);
	}
}
