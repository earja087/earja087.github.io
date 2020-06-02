// Pris de w3schools et du code de Pr. Barrière
// Fonction qui ajoute les produits en se basant de la séléction
function personalizedProducts(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);
  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";
  // obtain a reduced list of products based on restrictions
  var optionArray = restrictionProduits(produits, s1.value);
  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>
  for (i = 0; i < optionArray.length; i++) {
    var productName = optionArray[i];
    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName.name;
    s2.appendChild(checkbox);
    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement('label')
    label.htmlFor = productName.name;
    label.appendChild(document.createTextNode(productName.name + " " + productName.price +" $"));
    s2.appendChild(label);
    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement("br"));
  }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price
function produitsChoisis(){
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var c = document.getElementById('montrerPanier');
	c.innerHTML = "";
	// build list of selected item
	var para = document.createElement("P");
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Le montant total est de " + getTotalPrice(chosenProducts) + " $."));
}

// Used for accordion effect
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
