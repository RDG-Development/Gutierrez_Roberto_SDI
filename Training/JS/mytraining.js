/**
 * Created by NicaDevelopment on 5/17/15.
 */
//alert("Testing Connection")

    alert("The following prompts will inform you if you are allowed to ride this roller coaster, or not.")

var minHeightFeet = 4.5 ;

var yourHeightInches = Number(prompt("What is your Height? Write your height as follows: Five foot, eleven inches would be written as (5.11)"));

if(yourHeightInches >= minHeightFeet){alert( "You are allowed to ride this coaster.")
    } else{alert("You are not allowed to ride this coaster.")}
 