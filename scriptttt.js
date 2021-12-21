function winner(w){
   if((w[0]+w[3]+w[6])=="###"||(w[1]+w[4]+w[7])=="###"||(w[2]+w[5]+w[8])=="###"||(w[2]+w[4]+w[6])=="###"||(w[0]+w[4]+w[8])=="###"||(w[0]+w[1]+w[2])=="###"||(w[3]+w[4]+w[5])=="###"||(w[6]+w[7]+w[8])=="###")
      {window.alert('Player 1 Wins');
       return 1;}
       if((w[0]+w[3]+w[6])=="$$$"||(w[1]+w[4]+w[7])=="$$$"||(w[2]+w[5]+w[8])=="$$$"||(w[2]+w[4]+w[6])=="$$$"||(w[0]+w[4]+w[8])=="$$$"||(w[0]+w[1]+w[2])=="$$$"||(w[3]+w[4]+w[5])=="$$$"||(w[6]+w[7]+w[8])=="$$$")
       {window.alert('Player 0 Wins');
        return 0;}
}
function resetBoard(){
    location.reload();
}
function f1(v1,index){
    const pp=document.createElement("img");
    const ptr=document.getElementById(v1);
    ptr.innerHTML=turn;
    if(turn!=0)
    w[index]="#";
    else
    w[index]="$";
    turn=(turn+1)%2;
    if(turn==1)
    {   pp.src="sharvesh.github.io/spi.png";
        pp.alt="picture 1";
    }
    else{
        pp.src="sharvesh.github.io/gob.jpg";
        pp.alt="picture2";
        pp.width=300;
        pp.height=300;
    }
    winner(w);
    ptr.appendChild(pp);
}
const v=[];
const w=[0,0,0,0,0,0,0,0,0]
const labels=["one","two","three","four","five","six","seven","eight","nine"];
var turn;
const y=document.getElementById("dude");
y.addEventListener('click',()=>{turn=0;console.log(turn);});
const z=document.getElementById("dude1");
z.addEventListener('click',()=>{turn=1;console.log(turn);});
const x=document.getElementById("reset");
x.addEventListener('click',()=>{resetBoard();});
for(let i=0;i<9;i++)
{
    v[i]=document.querySelector("#"+labels[i]);  
}
for(let i=0;i<9;i++)
{v[i].addEventListener('click',()=>f1(labels[i],i));

}
