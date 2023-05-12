var display = document.querySelector('.display');
var buttons = document.querySelectorAll("button");
var string = "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        if(e.target.innerHTML == 'AC'){
            string ='';
            display.value = string;
        }

        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else if(e.target.innerHTML=='Del'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else{
            string= string+e.target.innerHTML;
            display.value = string;
        }
    })
})