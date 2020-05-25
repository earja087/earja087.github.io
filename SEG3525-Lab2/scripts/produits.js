var produits = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.95
	},
	{
		name: "Pain",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "Saumon",
		vegetarian: false,
		glutenFree: true,
		price: 20.25
	},
  {
    name: "Poulet",
    vegetarian: false,
    glutenFree: true,
    price: 15.50
  },
  {
    name: "Champignons",
    vegetarian: true,
    glutenFree: false,
    price: 5.05
  },
  {
    name: "Boeuf Frais",
    vegetarian: false,
    glutenFree: true,
    price: 17.85
  },
  {
    name: "Bananes",
    vegetarian: true,
    glutenFree: true,
    price: 3.75
  },
  {
    name: "Quinoa",
    vegetarian: true,
    glutenFree: true,
    price: 5.45
  },
  {
    name: "Lentilles",
    vegetarian: true,
    glutenFree: false,
    price: 6.50
  },
  {
    name: "Lait 2%",
    vegetarian: false,
    glutenFree: true,
    price: 4.25
  }
];

function restrictionProduits(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "vegan") && (prods[i].vegetarian == true) && (prods[i].glutenFree == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "gluten") && (prods[i].glutenFree == true) && (prods[i].vegetarian == false)){
			product_names.push(prods[i]);
		}
    else if ((restriction == "both") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
      product_names.push(prods[i]);
    }
		else if (restriction == "none"){
			product_names.push(prods[i]);
		}
	}

  // Sorting function taken from https://www.w3schools.com/js/js_array_sort.asp
  product_names.sort(function(a, b)
  {
    return a.price - b.price
  });

	return product_names;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<produits.length; i+=1) {
		if (chosenProducts.indexOf(produits[i].name) > -1){
			totalPrice += produits[i].price;
		}
	}
	return totalPrice;
}
