let keywords = 'shon pan lada hynrei badlada lehhaba haba naduh haduh dak kyntien num';


function Token(input){
	let cur =0;
	stringTok = input.split(" ");
	token = []
	stringTok.forEach(function(stringTok){
		if(keywords.indexOf(" "+ stringTok + " ") >=0){
			token.push({
				type: "keywords",
				value : stringTok
			})
		} else if(/[0-9]/i.test(stringTok)){
			token.push({
				type: "Number",
				value : stringTok
			})
		} else if(/[a-z]/i.test(stringTok) || /[A-Z]/i.test(stringTok)){
			token.push({
				type: "Character",
				value : stringTok
			})
		} 
	})
	return token;
}
let a = JSON.stringify(Token(" num A ,num B + 245"))
document.write(a);