function isPalindrome(word) {
  // Write your algorithm here
  // checking for palindrome
  let regex = /[\W_]/g
  let newWord = word.replace(regex, '').split('').reverse().join('')
  console.log(newWord)
  console.log(word === newWord)
}

isPalindrome('i am a pussy')
