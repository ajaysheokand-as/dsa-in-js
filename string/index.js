// Find Longest Palindrome subString
const s1 = "sheokandad";
longestPalindromeSubString = "";
let strLength = 0;

// Function to find all Substring of a String
function getAllSubstring(str){
    let subString = [];
    for(i=0; i<= str.length-1; i++ ){
        for(j=i+1; j<=str.length; j++){
            subString.push(s1.substring(i,j));
        }
    }
    return subString;
}

// Function to check a String is Palindrome or Not
function checkPalindrome(str){
    let reverseStr = "";
    for(i=str.length-1; i>=0; i--){
        reverseStr += str[i];
    }

    if(str === reverseStr){
        return true;
    }else{
        return false;
    }
}

const substrings = getAllSubstring(s1);
substrings.map((item)=>{
    let isPalindrome=checkPalindrome(item);
    if(isPalindrome && (strLength < item.length) ){
            strLength = item.length;
            longestPalindromeSubString = item;
    };
})

console.log("longestPalindrome=>",longestPalindromeSubString)
///////////////////////////////////////////////////////////////////////////////