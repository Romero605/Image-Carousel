var index = 0;


function show_image(i)
{
    index += i;

    var images = document.getElementsByClassName("image"); //creates an array of the images
    var dots = document.getElementsByClassName("dot");  //creates an array of the dots

    //this for loop blocks the images
    for (i = 0; i < images.length; i++)
    {
        images[i].style.display = "none";
    }

    //this for loop goes through each of the dots and deletes the class 
    //name
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //sends the user back to the beginning when it is at the last image
    // and hits the next button.
    if (index > images.length - 1)
    {
        index = 0;
    }

    //if user is at the first image and clicks the previous button then it 
    //sends them to the first image.
    if (index < 0)
    {
        index = images.length - 1;
    }

    //display the image that needs to be displayed on the screen.
    images[index].style.display = "block";

    //gives the dot the class name of active that corresponds to the image.
    dots[index].className += " active";
}

window.addEventListener("onload", show_image(index));