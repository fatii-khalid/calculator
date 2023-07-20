document.addEventListener("DOMContentLoaded", function() {
    /*const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.onclick = () => {
            const content_bar = document.querySelector('.bar').textContent = button.textContent
        }
    })*/
    let content_bar = document.querySelector('.bar')
    document.querySelector('.minus').onclick = ()=>{
        content_bar.textContent += '-'
    }
    document.querySelector('.plus').onclick = ()=>{
        content_bar.textContent += `+`
    }
    document.querySelector('.multiply').onclick = ()=>{
        content_bar.textContent += 'x'
    }
    document.querySelector('.divide').onclick = ()=>{
        content_bar.textContent += '/'
    }
    document.querySelector('.zero').onclick = ()=>{
        content_bar.textContent += '0'
    }
    document.querySelector('.one').onclick = ()=>{
        content_bar.textContent += '1'
    }
    document.querySelector('.two').onclick = ()=>{
        content_bar.textContent += '2'
    }
    document.querySelector('.three').onclick = ()=>{
        content_bar.textContent += '3'
    }
    document.querySelector('.four').onclick = ()=>{
        content_bar.textContent += '4'
    }
    document.querySelector('.five').onclick = ()=>{
        content_bar.textContent += '5'
    }
    document.querySelector('.six').onclick = ()=>{
        content_bar.textContent += '6'
    }
    document.querySelector('.seven').onclick = ()=>{
        content_bar.textContent += '7'
    }
    document.querySelector('.eight').onclick = ()=>{
        content_bar.textContent += '8'
    }
    document.querySelector('.nine').onclick = ()=>{
        content_bar.textContent += '9'
    }
    document.querySelector('.decimal').onclick = ()=>{
        content_bar.textContent += '.'
    }
    document.querySelector('.clr').onclick = ()=>{
        content_bar.textContent = ''
    }
    document.querySelector('.equal').onclick = ()=>{
        let calculate = content_bar.textContent
        content_bar.textContent = `${calculation(calculate)}`
        console.log(calculation(calculate))
        
    }
    function calculation(calculate){
        const operators = {
            '+':(a,b)=>a+b,
            '-':(a,b)=>a-b,
            'x':(a,b)=>a*b,
            '/':(a,b)=>a/b,
        }
        const sep_op = calculate.split(/(\+|\-|\x|\/)/)
        let result = parseFloat(sep_op[0])
        for(i=1;i<sep_op.length;i=i+2){
            const operand = sep_op[i]
            const num = parseFloat(sep_op[i+1])
            result = operators[operand](result,num)
        }
        return result
    }


})

//match(/\d+|\+|\-|\x|\//g)
/*for(i=1;i<sep_op.length;i=i+2){
    const operand = sep_op[i]
    const num = parseInt(sep_op[i+1])
    result = operators[operand](result,num)
}*/