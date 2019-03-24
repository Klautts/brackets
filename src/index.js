module.exports = function check(str, bracketsConfig) {
    var s = str.split(''),
        stack = [],
        open = ['{', '(', '[','1','3','5'],
        close = ['}', ')', ']','2','4','6'],
		netral = ['|','7','8'],
        ci,
        oi,
		kol=0,
		net,
		f=0;
    for (var i = 0; i < s.length; i++) {
		net = netral.indexOf(s[i]);
		if (net !== -1) {
		   if(f===0)
		   {
			   stack.push(net);
			   f=1;
		   }
		   else
		   {
				f=0;
				stack.pop(net);
		   }
        continue;
       }
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
    if (stack.length !== 0 || f===1) {
        return false;
    }
    return true;
}
