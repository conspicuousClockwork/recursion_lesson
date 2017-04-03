var JohnsFamily = [{name:"John",descendants:[{name:"Hon",descendants:[{name:"Pepe",descendants:[{name:"Ryan",descendants:[{name:"Dustin",descendants:[]},{name:"Darrick",descendants:[]},{name:"Darin",descendants:[]},{name:"Darude Sandstorm",descendants:[]}]},{name:"Dude maDude",descendants:[{name:"Lenny",descendants:[]},{name:"Kenny",descendants:[]},{name:"Lonlon",descendants:[]},{name:"Link",descendants:[]}]},{name:"Zelda",descendants:[]},{name:"Forever Alone",descendants:[]}]},{name:"Paul",descendants:[{name:"Wes",descendants:[]},{name:"Elizabeth",descendants:[{name:"Felix",descendants:[]},{name:"Ras",descendants:[]},{name:"Renny",descendants:[]},{name:"Name",descendants:[]}]},{name:"Pail",descendants:[]},{name:"Insert Name",descendants:[]}]},{name:"DROP TABLE families",descendants:[{name:"Foo",descendants:[{name:"Bob",descendants:[]},{name:"Rachael",descendants:[]},{name:"Naomi",descendants:[]},{name:"Nancy",descendants:[]},{name:"Johnn",descendants:[]}]},{name:"Johnny",descendants:[{name:"JohnnyJohn",descendants:[]},{name:"JohnnyJohnJr.",descendants:[]},{name:"JohnnyJohnJr.Jr.",descendants:[]},{name:"JohnnyJohnJr.Jr.Jr.",descendants:[]},{name:"Johnathan",descendants:[]}]},{name:"Jo Star",descendants:[]},{name:"Jo Jo",descendants:[]}]},{name:"Bob",descendants:[]}]},{name:"Bobby",descendants:[{name:"Bobbilina",descendants:[]},{name:"Caleb",descendants:[]},{name:"Renzo",descendants:[]},{name:"Fairis",descendants:[]}]},{name:"Cloud",descendants:[]},{name:"Elmo",descendants:[]},]}];

//We pass in the family we want to count, the current parent of the family the last child belonged to, and
function findDescendants(family, currentParent, name){
  //Set descendants to 0
  var descendants = 0;
  //For every child we will perform another findDescendants call and add the returned value to descendants
  for (var i=0;i < family.descendants.length; i ++) {
    console.log(family.descendants[i].name);
    //Every child increases the descendants count by 1
    descendants ++;
    //If the name of this childs parent has changed, update it and console log the new parent who we are searching
    if ( currentParent !== name){
        console.log("We are searching through" + currentParent + "'s children");
        currentParent = name;
    }
    //We then add the sum of their descendants to our current descendants count as well, and pass the currentParent variable and the name of the child we are calling the function on
    descendants += findDescendants(family.descendants[i], currentParent, family.name);
  }
  //After all the recursion is done our descendants variable should have the sum of all our recursive functions combined
  return descendants;
}

//Starter function that will initiate our recursive function with Variables
function starterFunction(startFamily){
  var currentParent = JohnsFamily[0].name;

  findDescendants(startFamily, currentParent, currentParent);
}


console.log("John has " + starterFunction(JohnsFamily[0]) + " descendants!");
