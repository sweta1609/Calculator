var buttons = document.getElementsByClassName("button");//created variable for button class
var display = document.getElementById("display");//created variable for display
var op1 = null;//took first operand as 0
var op2 = null;//took second operand as null
var operator = null;//took operator as null


// created function for operators
function isOperator(value){
    return value =='+'||value=='*'||value=='-'||value=='/';
}
// ran a for loop for dealing with all buttons that are to be clicked
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value'); //created variable value for getting data value
        var text = display.textContent.trim(); //created variable text for displaying of text on screen
    //    dealing with all operators
        if (isOperator(value)) {
            operator =value;
           
            op1 = parseFloat(text);
            display.textContent="";
//dealing with A/c
        } else if(value=='A/C'){
            display.textContent="";
//dealing with percentage
        }else if (value =='%'){
            op1 = parseFloat(text);
            op1 = op1/100;
            display.textContent=op1;
            //if we want a negative value we can use this
        }else if (value =='sign'){
            op1 = parseFloat(text);
            op1 = -1*op1;
            display.textContent=op1;
        }
        //once equal to is pressed second operand is converted into float and result is printed on screen
        else if (value == '=') {
            op2 = parseFloat(text);
            var result = eval(op1 +' '+operator+' '+op2);
            if (result){
                display.textContent = result;
                op1 = result;
                operator = null;
                op2 =null;
            }

        } else {

//for displaying all values on screen
        display.innerText += value;
        }


    });
}