function badEmptyCheck(value) {
    console.log(value.constructor===String);
    return Object.keys(value).length === 0;
  }
  
  badEmptyCheck(new String());    // true 😱
 /*  badEmptyCheck(new Number());    // true 😱
  badEmptyCheck(new Boolean());   // true 😱
  badEmptyCheck(new Array());     // true 😱
  badEmptyCheck(new RegExp());    // true 😱
  badEmptyCheck(new Function());  // true 😱
  badEmptyCheck(new Date());      // true 😱 */