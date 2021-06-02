
//Random number generátor 
let number = Math.floor(Math.random()* 10);
console.log(number);

//Button submit

function submit() {
    const odpoved = document.getElementById('odpoved').value;
    let list = document.getElementById('list');

    if(odpoved == number) {
       list.innerHTML = 'Vyhráls'
       let winer = win();
    }else if(odpoved > number){
        list.innerHTML = 'Myslím si menší'
    }else {
        list.innerHTML = 'Myslím si větší'
    };
    
};


//Replay to start why is win

function win () {
    if(odpoved == number) {
        let number = Math.floor(Math.random()* 10);
        console.log(number);

        return win()
    }
}