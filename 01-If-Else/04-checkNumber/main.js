let input = prompt('Number');
// input can be null, '', '   ', "dkfdsls", "12"
// null === null [ok]
// '', '     ' => str.trim() == ''
// "dkfdsls" => isNaN

if (input > 0) {
    alert("Positive number")
    console.log("Positive number")
}
else if (input == 0) {
    alert("Zero")
    console.log("Zero")
}
else if (input < 0) {
    alert("Negative Number")
    console.log("Negative Number")
}
else {
    alert("Invalid Number")
    console.log("Invalid Number")
}

///////////////////////////////////////
// called: Guard-Clause => ข้อมูลที่ไม่ถูกกับโปรแกรมจะถูกดักไว้ก่อน //
// null || '    ' || "dkfdsls"
// มีเฉพาะ string เท่านั้นที่สามารถเรียกใช้ .trim() ได้

//p'vee solution
// if (num === null || num.trim() === '' || isNaN(num)) {
//     alert('Invalid Number');
// } else if (+num > 0) {
//     alert('Positive Number');
// } else if (+num == 0) {
//     alert('Zero');
// } else if (+num < 0) {
//     alert('Negative Number');
// }
