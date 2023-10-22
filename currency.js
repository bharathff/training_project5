let select=document.querySelectorAll('.currency');
let button=document.getElementById('btn');
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>currency_name(res))
function currency_name(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++)
    {
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt;
        select[1].innerHTML+=opt;
    }
}
button.addEventListener("click",()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inputval=parseFloat(document.getElementById('input').value); 
    if(curr1==curr2)
        alert("choose different currencies");
    else{
        convert(curr1,curr2,inputval)
    }
});
function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
}