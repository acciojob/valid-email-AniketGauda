function validEmail(str) {
  //your JS code here.
	if(str==null || !str.includes('@') )
        return false;
    else{
        let a = str.split('@');
        if(a.length!=2)
            return false;
        else{
            if(a[0].includes(".") || a[0].length==0)
                return false;
            else{
                let b = a[1].split(".");
                if(b.length<2)
                    return false;
                else{
                    if(b[0]==null || b[1]==null)
                        return false;
                    else
                        return true;
                }
            }
        }
    }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
