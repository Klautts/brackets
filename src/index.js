module.exports = function check(str, bracketsConfig) {
    var s = str.split(''),
        stack = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        ci,
        oi;
    for (var i = 0; i < s.length; i++) {
       oi = open.indexOf(s[i]);
       if (oi !== -1) {
           stack.push(oi);
           continue;
       }
       ci = close.indexOf(s[i]);
       if (ci !== -1) {
           oi= stack.pop();
           if (ci !== oi) {
               return false;
           }
       }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
