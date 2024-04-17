function printSelectedValue() {

    
    // Get the dropdown element by its id
    var dropdown = document.getElementById("dropdown");

    var country = document.getElementById("countrycode");
    var selectedCountry = country.options[countrycode.selectedIndex].value;

    // Get the selected value from the dropdown
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;

    // Print the selected value to the console or display it in some way
    console.log("Selected Course: " + selectedValue);
    console.log("Your Country: " + selectedCountry);

    // You can also display it on the page
    // alert("Selected Value: " + selectedValue);
    // or update a div content
    // document.getElementById("result").innerHTML = "Selected Value: " + selectedValue;
}

function passwordRequirements(){
    
}