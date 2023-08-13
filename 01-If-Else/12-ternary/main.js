let s = prompt("Score");
let message =  (s >= 80) ? 'A' :
(s >= 70 && s<= 79) ? 'B' :
(s >= 60 && s<= 69) ? 'C' :
(s >= 50 && s<= 59) ? 'D' :
'F' ;
alert(message);