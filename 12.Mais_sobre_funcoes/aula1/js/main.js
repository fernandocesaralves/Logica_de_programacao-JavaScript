function dizBla(n) {
    /*
    var msg = '';
    while(n--) {
        msg += ' bla';
    }
    return msg;
    */

    /*
   if(n > 1) {
       return dizBla(--n) + ' bla';
   } else{
        return ' bla';
   }
   */
  return (n > 1) ? dizBla(--n) + ' bla' : 'bla';

   
}


console.log(dizBla(2)); // bla bla
console.log(dizBla(5)); // bla bla bla bla bla

// Fibonacci
// 1 1 2 3 5 8 13
fibonacci(3) // 2
fibonacci(5) // 6
