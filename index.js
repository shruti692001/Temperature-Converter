const calculate= () => {
    const number= document.getElementById('temp').value;

    const tempselect= document.getElementById('temperatures');

    const value= temperatures.options[tempselect.selectedIndex].value;

    const celToFah = (celsius)=>
    {
           let fahrenheit= Math.round ((celsius * 9 / 5 ) + 32) ;
           return fahrenheit;
    }


    const FahToCel = (fahrenheit)=>

    {
        let celsius= Math.round   ( (fahrenheit-32) *5 / 9) ;
        return celsius;
    }


    let result;

    if(value=='celsius')
    {
        result=celToFah(number);
        document.getElementById('resultholder').innerHTML = result+'°Fahrenheit';
    }

    else
    {
        result=FahToCel(number);
        document.getElementById('resultholder').innerHTML = result+'°Celsius';

    }

}
