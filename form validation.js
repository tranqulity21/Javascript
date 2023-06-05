function validateForm()
	{
//accessing elements in the form object,accessing element with name attribute set to fname
//.value retrieve the value of the accessed element. value=value entered in input field
		let x = document.forms["myForm"]["fname"].value;
		//x checks if "" is an empty string,if true we return false to prevent any further code execution
    if(x == "")
		{
			alert("Name must be filled out");
			return false;
		}
	}