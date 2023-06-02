//access the button elemnet by its Id in html file
var highlightButton = document.getElementById("highlightButton");

//so you add an event listener which in this case is click,when this even happens whatever is in the function will run
highlightButton.addEventListener("click",function()
//inside the function we look for elements with classname highlighted
{
  var highlighted = document.getElementsByClassName("highlighted")
//since there are three we loop through them 
  for (var i = 0;i < highlighted.length; i++)
    {
       // so for each element we store it in variable article for it to be styled
      var article = highlighted[i];
      article.style.backgroundColor = "yellow";
    }
}
                                );