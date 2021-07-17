 
function pizika1(){
	var g = prompt("რას უდრის G  ", '');
	var m1 = prompt(" რას უდრის m1  ", '');
	var m2 = prompt(" რას უდრის m2  ", '');
	var r = prompt("რას უდრის r  ", '');
	alert (' პასუხია:' +(((m1*m2)*g)/(r*r)));
}
function pizika2(){
	var g = prompt("რას უდრის g  ", '');
	var m = prompt("რას უდრის m  ", '');
	alert ('პასუხია:'+( (m*g)));
}
function pizika3(){
	var g = prompt("რას უდრის G ", '');
	var m = prompt("რას უდრის m  ", '');
	var R = prompt("რას უდრის R  ", '')
	alert ('პასუხია:'+( (m*g)/(R*R)));
}
function pizika4(){
	var g = prompt("რას უდრის A ", '');
	var m = prompt("რას უდრის T  ", '');
	alert ('პასუხია:'+((g / m))); 
}

function pizika5(){
	var g = prompt("რას უდრის K  ", '');
	var m1 = prompt(" რას უდრის q1  ", '');
	var m2 = prompt(" რას უდრის q2  ", '');
	var r = prompt("რას უდრის r  ", '');
	alert (' პასუხია:' +(((m1*m2)*g)/(r*r)));
}
function pizika6(){
	var k = prompt("რას უდრის K  ", '');
	var x = prompt(" რას უდრის x  ", '');
	alert (' პასუხია:' +(k*(x*x))/2);
}




function samkutxedisFartobi(){
    var sFudze = document.getElementById('sFudze').value;
    var sSimagle = document.getElementById('sSimagle').value;
    var samkutxedisFartobi = (sFudze*sSimagle)/2;
    var samkutxedis_Fartobi = samkutxedisFartobi;
        
    document.getElementById('samkutxedisFartobisShedegi').innerHTML = 'სამკუთხედის ფართობია ' + samkutxedisFartobi + ' ერთეული.';
}


function trapeciisFartobi(){
    var tShuaXazi = document.getElementById('tShuaXazi').value;
    var tSimagle = document.getElementById('tSimagle').value;
    
    var trapeciis_Fartobi = tShuaXazi*tSimagle;

    document.getElementById('trapeciisFartobisShedegi').innerHTML = 'ტრაპეციის ფართობია '+trapeciis_Fartobi+' ერთეული.'
}


var measedi = 100;
function procentisGamotvla(){
    var sapRicxvi = parseInt(prompt('შემოიყვანეთ სასურველი რიცხვი'));
    var procent = parseInt(prompt('შემოიყვანეთ პროცენტის სასურველი მნიშვნელობა'));
    var daangarisheba = (sapRicxvi*procent)/measedi;
    document.getElementById('procenti').innerHTML = 'შემოყვანილი ინფორმაციის მიხედვით მიღებული პასუხია '+daangarisheba;
}


function kvadratuliFesvi(){
    var ricxvi = parseInt(prompt('შემოიყვანეთ სასურველი რიცხვი'));
    var fesvi = Math.sqrt(ricxvi);
    document.getElementById('kvadratuliFesvi').innerHTML = 'შემოყვანილი ინფორმაციის მიხედვით მიღებული პასუხია '+fesvi;
}


function kuburiFesvi(){
    var ricxvi1 = parseInt(prompt('შემოიყვანეთ სასურველი რიცხვი'));
    var fesvi1 = Math.cbrt(ricxvi1);
    document.getElementById('kuburiFesvi').innerHTML = 'შემოყვანილი ინფორმაციის მიხედვით მიღებული პასუხია '+fesvi1;
}