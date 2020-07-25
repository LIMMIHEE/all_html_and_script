var id = "armygo";
var pw1 = "1q2w3e4r!!";
var pw2 = "1q2w3e4r!!";


var Isid=false;
var IsPwd = false;


function LowerCaseTest(params) {
    return /[a-z0-9]/.test(params);
}
function PwdTest(params,params2) {
	if(!(params==params2)){
		return false;
	}
	
	var _num = /[0-9]/;
	var _string = /[a-zA-Z]/;
	var _specialCr = /[!@#$]/;
	if(_num.test(params) &&_string.test(params) && _specialCr(params)){
		    return  true;	
	}else{
		 return  false;
	}
	
}
function funalCk() {
  if(id.length >= 3 && id.length <= 20){
			if(LowerCaseTest(id)){
					Isid=true;
			}
			if(pw1.length >=8 && pw1.length <= 20){
					IsPwd = PwdTest(pw1,pw2);
			}
	}
	
	if( Isid && IsPwd){
		console.log('pass')	
	}else{
		console.log('fail')
	}
}

funalCk();