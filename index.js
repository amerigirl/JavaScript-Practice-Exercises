//1. Write a javascript program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));  

console.log("1. Get the file extenstion. File example = www.google.com.  Answer = " + getFileExtension('www.google.com'))

//2. Write a javascript program to replace every character in a given string with the character following it in the alphabet

const moveCharsForward = (str) => str

  .split('')
  .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
  .join('');  

console.log("\n" + "2. Move characters forward one char in the alphabet. Chars to move: abcd. Answer = " + moveCharsForward("abcd"));