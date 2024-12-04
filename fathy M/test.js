

let idd = document.querySelector('.idd')
let onn = 'x'


function end(and1 , and2 , and3) {
idd.innerHTML = `${nama[1]} winner`
document.getElementById('on' +and1).style.backgroundColor = '#111'
document.getElementById('on' +and2).style.backgroundColor = '#111'
document.getElementById('on' +and3).style.backgroundColor = '#111'
setInterval(function(){idd.innerHTML += '.'},1000)
setTimeout(function(){location.reload()},4000)
}




let nama = []
function fathy() {
 for(let i = 1; i<10; i++) {
  nama[i] = document.getElementById('on' +i).innerHTML
   
    } 
    if(nama[1] == nama[2] && nama[2] == nama[3] && nama[1] !='') {
        end(1,2,3)
    }
    if(nama[4] == nama[5] && nama[5] == nama[6] && nama[6] !='') {
        end(4,5,6)
    }

    if(nama[7] == nama[8] && nama[8] == nama[9] && nama[9] !='') {
        end(7,8,9)
    }


    if(nama[1] == nama[4] && nama[4] == nama[7] && nama[7] !='') {
        end(1,4,7)
    }
    if(nama[2] == nama[5] && nama[5] == nama[8] && nama[8] !='') {
        end()
    }

    if(nama[3] == nama[6] && nama[6] == nama[9] && nama[9] !='') {
        end(3,6,9)
    }



    if(nama[1] == nama[5] && nama[5] == nama[9] && nama[9] !='') {
        end(1,5,9)
    }
    if(nama[3] == nama[5] && nama[5] == nama[7] && nama[7] !='') {
        end(3,5,7)
    }


}


function Holle(id) {
let iid = document.getElementById(id)
if(onn === 'x' && iid.innerHTML == '') {
    iid.innerHTML = 'x'
   onn = 'o'
idd.innerHTML = 'o'
}
else if(onn === 'o' && iid.innerHTML == '') {
    iid.innerHTML = 'o'
    onn = 'x'
    idd.innerHTML = 'x'
}

fathy()
}
