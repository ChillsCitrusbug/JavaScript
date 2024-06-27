// JS DOM manipulation - changing CSS

// go live index.html ->right click and inspect -> go on console  -> try this commands


// .style property - can get/set style of element - but only one inline style at a time
let paraElement = document.getElementById('spara');  // html element with id spara accessed with name paraElement
paraElement; // printed paraElement
console.log(paraElement.style); // accessed style of that element
paraElement.style.backgroundColor = 'blue'; // changed style of that element with .style method
paraElement.style.color = 'white'; // .style method has one problem that you can only change one inline style at a time
// dom_css\Screenshot (6).png


// .cssText property - can get/set style of element - - can multiple inline style at a time
let secondElement = document.getElementById('sdiv');
secondElement;
secondElement.style.cssText;
secondElement.style.cssText = "background-color: black; color: white; padding: 0.5rem";
// dom_css\Screenshot (7).png


// .setAttribute property - can set attribute like id, class, style, etc
// set class name for div and update with another one also
let firstElement = document.querySelector('#fdiv');
firstElement;
firstElement.setAttribute('class', 'divClass');
firstElement
firstElement.setAttribute('class', 'secondDivClass'); // update classname with most recent means old class name= divClass , new class name = secondDivClass
firstElement
// dom_css\Screenshot (8).png

// set style with setAttribute - it will remove all its purani style html inline style also, jad se ukhad dega and nayi set ki hui style add kar dega
let firstElement = document.querySelector('#fdiv');
firstElement;
firstElement.setAttribute('style', 'padding: 0.1rem');
firstElement;
// dom_css\Screenshot (9).png


// .className property - can get and set multiple classes of element
let fpara = $0; // by selecting element on browser ui then we can access that element by $0
fpara;
fpara.className; // can get classes of element
fpara.className = "gohan bulbul"; // can update with new multiple classes (old will be removed)
fpara.className;
// dom_css\Screenshot (10).png


// .classList property - can get class names in array,list format and can add class, remove class, toggle class, contains
let fpara = document.querySelector('#fpara');
fpara;
fpara.classList; // get
fpara.classList.add('thirdClass'); // add class , keep old classes as well
fpara.classList;
fpara.classList.remove('firstClass'); // remove class
fpara.classList;
fpara.classList.toggle('secondClass'); // toggle class - means if exist then remove
fpara.classList;
fpara.classList.toggle('secondClass'); // if not exist then add
fpara.classList;
fpara.classList.contains('firstClass'); // contains - checks if class is present there and give output in boolean true or false
fpara.classList.contains('secondClass');
// dom_css\Screenshot (11).png
// dom_css\Screenshot (12).png



// dom_html
// accessing parent of a child element by using only child element
// do this by using .parentNode property
let childElement = document.querySelector(".firstClass");
childElement;
let parentElement = childElement.parentNode;
parentElement;
// dom_css\Screenshot (13).png
