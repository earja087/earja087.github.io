// Pris de w3schools et du code de Pr. Barrière
// Fonction qui ajoute les produits en se basant de la séléction
function personalizedProducts(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById('fruitsAndVeggies');
  var s3 = document.getElementById('diary');
  var s4 = document.getElementById('meat');
  var s5 = document.getElementById('grains');
  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";
  s3.innerHTML = "";
  s4.innerHTML = "";
  s5.innerHTML = "";
  // obtain a reduced list of products based on restrictions
  var optionArray = restrictionProduits(produits, s1.value);
  s2.appendChild(document.createElement("br"));
  s3.appendChild(document.createElement("br"));
  s4.appendChild(document.createElement("br"));
  s5.appendChild(document.createElement("br"));
  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>
  for (i = 0; i < optionArray.length; i++) {
    var productName = optionArray[i];
    // Vars for labels & checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName.name;
    var category = productName.category;

    // Vars for images
    var imgSourceA = "images/";
    var imgSourceB = productName.name.concat(".jpg");
    var imgSource = imgSourceA.concat(imgSourceB);
    var imgWidth = "138px";
    var imgHeight = "100px";
    var imgAlt = "Image non disponible";

    switch (category) {
      case "fruitsAndVeggies":
        s2.appendChild(checkbox);
        var label = document.createElement('label')
        label.htmlFor = productName.name;
        label.appendChild(document.createTextNode(productName.name + " " + productName.price +" $"));
        s2.appendChild(label);
        s2.appendChild(document.createElement("br"));
        // Adding image
        var imageProd = document.createElement('img');
        imageProd.setAttribute('src', imgSource);
        imageProd.setAttribute('alt', imgAlt);
        imageProd.setAttribute('width', imgWidth);
        imageProd.setAttribute('height', imgHeight);
        s2.appendChild(imageProd);
        s2.appendChild(document.createElement("br"));
        break;
      case "diary":
        s3.appendChild(checkbox);
        var label = document.createElement('label')
        label.htmlFor = productName.name;
        label.appendChild(document.createTextNode(productName.name + " " + productName.price +" $"));
        s3.appendChild(label);
        s3.appendChild(document.createElement("br"));
        // Adding image
        var imageProd = document.createElement('img');
        imageProd.setAttribute('src', imgSource);
        imageProd.setAttribute('alt', imgAlt);
        imageProd.setAttribute('width', imgWidth);
        imageProd.setAttribute('height', imgHeight);
        s3.appendChild(imageProd);
        s3.appendChild(document.createElement("br"));
        break;
      case "meat":
        s4.appendChild(checkbox);
        var label = document.createElement('label')
        label.htmlFor = productName.name;
        label.appendChild(document.createTextNode(productName.name + " " + productName.price +" $"));
        s4.appendChild(label);
        s4.appendChild(document.createElement("br"));
        // Adding image
        var imageProd = document.createElement('img');
        imageProd.setAttribute('src', imgSource);
        imageProd.setAttribute('alt', imgAlt);
        imageProd.setAttribute('width', imgWidth);
        imageProd.setAttribute('height', imgHeight);
        s4.appendChild(imageProd);
        s4.appendChild(document.createElement("br"));
        break;
      case "grains":
        s5.appendChild(checkbox);
        var label = document.createElement('label')
        label.htmlFor = productName.name;
        label.appendChild(document.createTextNode(productName.name + " " + productName.price +" $"));
        s5.appendChild(label);
        s5.appendChild(document.createElement("br"));
        // Adding image
        var imageProd = document.createElement('img');
        imageProd.setAttribute('src', imgSource);
        imageProd.setAttribute('alt', imgAlt);
        imageProd.setAttribute('width', imgWidth);
        imageProd.setAttribute('height', imgHeight);
        s5.appendChild(imageProd);
        s5.appendChild(document.createElement("br"));
        break;
      default:
    }
  }
  s2.appendChild(document.createElement("br"));
  s3.appendChild(document.createElement("br"));
  s4.appendChild(document.createElement("br"));
  s5.appendChild(document.createElement("br"));
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
