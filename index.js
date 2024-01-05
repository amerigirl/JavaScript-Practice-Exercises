//1. Write a javascript program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));  

console.log("1. Get the file extenstion. File example = www.google.com.  Answer = " + getFileExtension('www.google.com'))
