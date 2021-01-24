function calculateSI(){
    //code to access value for number field having id 'pa'
    var par_amt = document.getElementById("pa").value;

    //code to access value for number field having id 'ir'
    var par_int = document.getElementById("ir").value; 

    //code to access value for number field having id 't'
    var par_t =  document.getElementById("t"). value;

    var si = (par_amt * par_int * par_t )/100 ;
    

    alert("Simple Interest is : "+ si);
}

