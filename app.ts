var n1 = document.getElementById('n1') as HTMLInputElement;
var n2 = document.getElementById('n2') as HTMLInputElement;

var btn = document.getElementById('btn')



function soma(n1:number,n2:number){
    return n1+n2;
}


if(btn){
    btn.addEventListener('click', ()=>{
        console.log(soma(Number(n1.value),Number(n2.value)))
    })

}


