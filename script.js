const clock=document.querySelector('#clock')


setInterval(()=>{
    const date=new Date()

    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)