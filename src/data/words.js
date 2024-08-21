const words = [
  {
    word: "dashi",
    clue: "A Japanese cooking stock used as a base for soups and other dishes.",
    length: 5,
  },
  {
    word: "miso",
    clue: "A Japanese seasoning made from fermented soybeans and barley or rice malt, used in soups and sauces.",
    length: 4,
  },
  {
    word: "tofu",
    clue: "A soft, white, cheeselike food made from soybeans.",
    length: 4,
  },
  {
    word: "tempura",
    clue: "A Japanese dish of seafood or vegetables that have been battered and deep-fried.",
    length: 7,
  },
  {
    word: "ramen",
    clue: "A Japanese noodle soup dish.",
    length: 5,
  },
  {
    word: "sake",
    clue: "A Japanese alcoholic beverage made from fermented rice.",
    length: 4,
  },
  {
    word: "soba",
    clue: "A type of Japanese noodle made from buckwheat flour.",
    length: 4,
  },
  {
    word: "umami",
    clue: "A category of taste in food, corresponding to the flavor of glutamates, especially monosodium glutamate.",
    length: 5,
  },
  {
    word: "wasabi",
    clue: "A pungent green Japanese condiment made from the root of the wasabi plant.",
    length: 6,
  },
  {
    word: "bento",
    clue: "A Japanese meal served in a box, typically containing rice, fish or meat, and pickled or cooked vegetables.",
    length: 5,
  },
  {
    word: "nori",
    clue: "A type of edible seaweed used in Japanese cuisine, especially for wrapping sushi.",
    length: 4,
  },
  {
    word: "dango",
    clue: "A Japanese dumpling made from rice flour, often served on a skewer.",
    length: 5,
  },
  {
    word: "swede",
    clue: "A root vegetable similar to a turnip, often used in stews and soups.",
    length: 5,
  },
  {
    word: "cocoa",
    clue: "A powder made from roasted and ground cacao seeds, used in making chocolate and for flavoring.",
    length: 5,
  },
  {
    word: "yeast",
    clue: "A microscopic fungus consisting of single oval cells that reproduce by budding, and are capable of converting sugar into alcohol and carbon dioxide.",
    length: 5,
  },
  {
    word: "herbs",
    clue: "Any plant with leaves, seeds, or flowers used for flavoring, food, medicine, or perfume.",
    length: 5,
  },
  {
    word: "flavor",
    clue: "The distinctive taste of a food or drink.",
    length: 6,
  },
  {
    word: "bitter",
    clue: "Having a sharp, pungent taste or smell.",
    length: 6,
  },
  {
    word: "icing",
    clue: "A sweet mixture used to cover or fill cakes, cookies, and pastries.",
    length: 5,
  },
  {
    word: "grain",
    clue: "The edible seed of cereals, used as a staple food.",
    length: 5,
  },
  {
    word: "bread",
    clue: "A staple food made from flour, water, and yeast or another leavening agent, mixed together and baked.",
    length: 5,
  },
  {
    word: "yucca",
    clue: "A starchy root vegetable native to South America, often used in cooking.",
    length: 5,
  },
  {
    word: "syrup",
    clue: "A thick, sweet liquid made by dissolving sugar in boiling water, often used as a topping or sweetener.",
    length: 5,
  },
  {
    word: "pasta",
    clue: "Italian-style noodles made from wheat flour and water, often served with sauce.",
    length: 5,
  },
  {
    word: "nashi",
    clue: "An Asian pear with crisp, juicy flesh, often eaten fresh or used in salads.",
    length: 5,
  },
  {
    word: "tabil",
    clue: "A Tunisian spice blend often used to flavor meats and stews.",
    length: 5,
  },
  {
    word: "pisco",
    clue: "A type of grape brandy produced in Peru and Chile.",
    length: 5,
  },
  {
    word: "cepes",
    clue: "Edible mushrooms with a nutty flavor, also known as porcini mushrooms.",
    length: 5,
  },
  {
    word: "shoyu",
    clue: "A type of Japanese soy sauce.",
    length: 5,
  },
  {
    word: "tripe",
    clue: "The edible lining of the stomach of various animals, often used in cooking.",
    length: 5,
  },
  {
    word: "agave",
    clue: "A succulent plant native to the Americas, used to make tequila and sweeteners.",
    length: 5,
  },
  {
    word: "kaong",
    clue: "The edible palm fruit of the sugar palm tree, often used in desserts.",
    length: 5,
  },
  {
    word: "koshi",
    clue: "A type of short-grain rice popular in Japan, known for its sticky texture.",
    length: 5,
  },
  {
    word: "baste",
    clue: "To moisten food while cooking with drippings, butter, or a sauce to add flavor and prevent drying.",
    length: 5,
  },
  {
    word: "horno",
    clue: "A traditional adobe oven used in Southwestern cuisine, especially for baking bread.",
    length: 5,
  },
  {
    word: "cacao",
    clue: "The beanlike seeds from which cocoa, cocoa butter, and chocolate are made.",
    length: 5,
  },
  {
    word: "tasso",
    clue: "A spicy, smoked Cajun-style ham.",
    length: 5,
  },
  {
    word: "aioli",
    clue: "A garlic-flavored mayonnaise-like sauce from the Provence region of France.",
    length: 5,
  },
  {
    word: "speck",
    clue: "A type of cured, smoked ham, typically served thinly sliced.",
    length: 5,
  },
  {
    word: "pulse",
    clue: "The edible seeds of leguminous plants, such as lentils, chickpeas, and beans, used as food.",
    length: 5,
  },
  {
    word: "ajvar",
    clue: "A type of relish made principally from red bell peppers, eggplants, and oil.",
    length: 5,
  },
  {
    word: "pitia",
    clue: "A traditional Greek dish made with meat, rice, and spices, often cooked in a clay pot.",
    length: 5,
  },
  {
    word: "comal",
    clue: "A smooth, flat griddle used in Mexican cuisine to cook tortillas and other flatbreads.",
    length: 5,
  },
  {
    word: "snail",
    clue: "A mollusk with a coiled shell, often eaten as a delicacy.",
    length: 5,
  },
  {
    word: "crust",
    clue: "The outer layer of bread or pastry, often crisp or firm.",
    length: 5,
  },
  {
    word: "mound",
    clue: "A heap or pile of food, often used for serving mashed potatoes or salad greens.",
    length: 5,
  },
  {
    word: "liner",
    clue: "A material used to line the interior of baking pans to prevent sticking and facilitate removal of baked goods.",
    length: 5,
  },
  {
    word: "searing",
    clue: "Cooking food quickly at a high temperature until it browns and seals in the juices.",
    length: 7,
  },

  {
    word: "terrine",
    clue: "Cold dish made of meat, fish, or vegetables, usually served in slices",
    length: 7,
  },
  {
    word: "drizzle",
    clue: "To pour a thin stream of liquid over food in a fine shower.",
    length: 7,
  },

  {
    word: "spinach",
    clue: "A green, leafy vegetable rich in iron and vitamins.",
    length: 7,
  },
  {
    word: "apricot",
    clue: "A small, orange-colored fruit with a velvety surface.",
    length: 7,
  },
  {
    word: "avocado",
    clue: "A pear-shaped fruit with a rough, dark green or black skin and a large seed.",
    length: 7,
  },
  {
    word: "coconut",
    clue: "A large, oval, brown seed of a tropical palm, consisting of a hard shell lined with edible white flesh and containing a clear liquid.",
    length: 7,
  },
  {
    word: "chicken",
    clue: "The flesh of a domestic fowl used as food.",
    length: 7,
  },
  {
    word: "poultry",
    clue: "Domestic birds kept for their eggs or meat, such as chickens, turkeys, ducks, or geese.",
    length: 7,
  },
  {
    word: "sausage",
    clue: "A cylindrical length of minced and seasoned meat encased in a skin, typically sold raw to be grilled, boiled, or fried before eating.",
    length: 7,
  },
  {
    word: "lobster",
    clue: "A large marine crustacean with a cylindrical body and stalked eyes, most of which is edible and is widely considered a delicacy.",
    length: 7,
  },
  {
    word: "octopus",
    clue: "A cephalopod mollusk with eight sucker-bearing arms, a soft, bag-shaped body, strong beaklike jaws, and no internal shell.",
    length: 7,
  },
  {
    word: "scallop",
    clue: "A marine bivalve mollusk with a ribbed fan-shaped shell.",
    length: 7,
  },
  {
    word: "spatula",
    clue: "A broad, flat, blunt implement used especially for spreading or mixing soft substances.",
    length: 7,
  },
  {
    word: "toaster",
    clue: "A kitchen appliance for toasting bread.",
    length: 7,
  },
  {
    word: "blender",
    clue: "A kitchen appliance with rotating blades used for liquefying, chopping, or pureeing food.",
    length: 7,
  },
  {
    word: "dessert",
    clue: "The sweet course eaten at the end of a meal.",
    length: 7,
  },

  {
    word: "beating",
    clue: "Mixing vigorously to incorporate air into food.",
    length: 7,
  },
  {
    word: "cuisine",
    clue: "A style or method of cooking, especially as characteristic of a particular country, region, or establishment.",
    length: 7,
  },
  {
    word: "garnish",
    clue: "A decorative embellishment or accompaniment added to a dish.",
    length: 7,
  },
  {
    word: "goulash",
    clue: "A stew of meat, usually seasoned with paprika and other spices.",
    length: 7,
  },
  {
    word: "griddle",
    clue: "A flat cooking surface, typically made of metal and heated from below.",
    length: 7,
  },
  {
    word: "souffle",
    clue: "A light, fluffy dish made from beaten egg whites and various other ingredients.",
    length: 7,
  },
  {
    word: "cutlery",
    clue: "Utensils, such as knives, forks, and spoons, used for eating or serving food.",
    length: 7,
  },
  {
    word: "harvest",
    clue: "The process or period of gathering crops.",
    length: 7,
  },
  {
    word: "peeling",
    clue: "The removal of the outer skin or rind of a fruit or vegetable.",
    length: 7,
  },
  {
    word: "brewery",
    clue: "A place where beer is produced commercially.",
    length: 7,
  },
  {
    word: "popcorn",
    clue: "Corn kernels that have been heated and burst open to form a puffy, white snack.",
    length: 7,
  },
  {
    word: "epicure",
    clue: "A person who takes particular pleasure in fine food and drink.",
    length: 7,
  },
  {
    word: "lettuce",
    clue: "A leafy green vegetable used in salads and sandwiches.",
    length: 7,
  },
  {
    word: "sausage",
    clue: "A cylindrical length of minced and seasoned meat encased in a skin, typically sold raw to be grilled, boiled, or fried before eating.",
    length: 7,
  },
  {
    word: "brioche",
    clue: "A type of bread of French origin, typically sweet and high in egg and butter content.",
    length: 7,
  },
  {
    word: "pudding",
    clue: "A sweet dish, typically containing flour or a similar starch, milk, eggs, and sugar, and baked or boiled.",
    length: 7,
  },
  {
    word: "organic",
    clue: "Produced or involving production without the use of chemical fertilizers, pesticides, or other artificial chemicals.",
    length: 7,
  },
  {
    word: "sampler",
    clue: "A small sample or collection of something.",
    length: 7,
  },
  {
    word: "pumpkin",
    clue: "A large rounded orange-yellow fruit with a thick rind, edible flesh, and many seeds.",
    length: 7,
  },

  {
    word: "banquet",
    clue: "A large formal meal or feast, typically one in celebration of something.",
    length: 7,
  },
  {
    word: "granary",
    clue: "A storehouse for threshed grain.",
    length: 7,
  },
  {
    word: "vintner",
    clue: "A wine merchant or producer.",
    length: 7,
  },
  {
    word: "calorie",
    clue: "A unit of heat used to indicate the amount of energy that foods will produce in the human body.",
    length: 7,
  },
  {
    word: "pancake",
    clue: "A flat cake made from batter and fried on both sides, typically eaten with syrup or jam.",
    length: 7,
  },
  {
    word: "parboil",
    clue: "To partially cook food by boiling it briefly.",
    length: 7,
  },
  {
    word: "burrito",
    clue: "A Mexican dish consisting of a flour tortilla wrapped around a filling.",
    length: 7,
  },
  {
    word: "ravioli",
    clue: "Small pasta envelopes containing ground meat, cheese, or vegetables.",
    length: 7,
  },
  {
    word: "coconut",
    clue: "A large, oval, brown seed of a tropical palm, consisting of a hard shell lined with edible white flesh and containing a clear liquid.",
    length: 7,
  },
  {
    word: "deviled",
    clue: "Prepared with hot or savory seasoning.",
    length: 7,
  },
  {
    word: "lobster",
    clue: "A large marine crustacean with a cylindrical body and stalked eyes, most of which is edible and is widely considered a delicacy.",
    length: 7,
  },
  {
    word: "cabbage",
    clue: "A leafy green or purple biennial plant.",
    length: 7,
  },
  {
    word: "rhubarb",
    clue: "A cultivated plant of the dock family, with large leaves and long green or reddish acidic leafstalks.",
    length: 7,
  },
  {
    word: "potluck",
    clue: "A meal or party to which each of the guests contributes a dish.",
    length: 7,
  },
  {
    word: "gourmet",
    clue: "A person who is knowledgeable about fine food and drink.",
    length: 7,
  },
  {
    word: "starter",
    clue: "A small dish served as the first course of a meal.",
    length: 7,
  },
  {
    word: "curried",
    clue: "Cooked or flavored with curry powder or a similar mixture of spices.",
    length: 7,
  },
  {
    word: "brisket",
    clue: "A cut of meat from the breast or lower chest, typically beef or veal.",
    length: 7,
  },
  {
    word: "aquavit",
    clue: "A Scandinavian spirit flavored with caraway seeds.",
    length: 7,
  },
  {
    word: "trotter",
    clue: "A pig's foot, especially when used as food.",
    length: 7,
  },
  {
    word: "parsnip",
    clue: "A tapering cream-colored root eaten as a vegetable.",
    length: 7,
  },
  {
    word: "creamer",
    clue: "A small container of milk or cream for adding to tea or coffee.",
    length: 7,
  },
  {
    word: "hickory",
    clue: "A type of tree or its wood, nuts, or bacon-flavored meat.",
    length: 7,
  },
  {
    word: "chutney",
    clue: "A spicy condiment of Indian origin, made of fruits or vegetables with vinegar, spices, and sugar.",
    length: 7,
  },
  {
    word: "vitamin",
    clue: "Any of a group of organic compounds that are essential for normal growth and nutrition and are required in small quantities in the diet.",
    length: 7,
  },
  {
    word: "sherbet",
    clue: "A frozen dessert made primarily of fruit juice, sugar, and water.",
    length: 7,
  },
  {
    word: "gourmet",
    clue: "A person who is knowledgeable about fine food and drink.",
    length: 7,
  },
  {
    word: "broiler",
    clue: "An appliance or part of an oven used for broiling food.",
    length: 7,
  },
  {
    word: "truffle",
    clue: "An edible subterranean fungus, typically of the genus Tuber.",
    length: 7,
  },
  {
    word: "parsley",
    clue: "A biennial plant with white flowers and aromatic leaves that are either crinkly or flat and used as a culinary herb and garnish.",
    length: 7,
  },
  {
    word: "whipped",
    clue: "Beaten or stirred rapidly to incorporate air and produce a light, frothy texture.",
    length: 7,
  },
  {
    word: "cabbage",
    clue: "A leafy green or purple biennial plant.",
    length: 7,
  },
  {
    word: "jasmine",
    clue: "A shrub or climbing plant in the olive family, with fragrant flowers.",
    length: 7,
  },
  {
    word: "buttery",
    clue: "Resembling or containing butter.",
    length: 7,
  },
  {
    word: "boiling",
    clue: "The process of cooking food in boiling water or other liquid.",
    length: 7,
  },
  {
    word: "vinegar",
    clue: "A sour-tasting liquid containing acetic acid, obtained by fermenting dilute alcoholic liquids, typically wine, cider, or beer.",
    length: 7,
  },
  {
    word: "refined",
    clue: "Elegant and cultured in appearance, manner, or taste.",
    length: 7,
  },
  {
    word: "shallot",
    clue: "A type of onion with a shallower bulb and milder flavor than a common onion.",
    length: 7,
  },
  {
    word: "bourbon",
    clue: "A whiskey distilled from a mash containing at least 51% corn and aged in new charred oak barrels.",
    length: 7,
  },
  {
    word: "grilled",
    clue: "Cooked by exposure to direct heat on a grill or barbecue.",
    length: 7,
  },
  {
    word: "cupcake",
    clue: "A small cake baked in a cup-shaped container and typically iced.",
    length: 7,
  },
  {
    word: "saffron",
    clue: "An orange-yellow flavoring, food coloring, and dye made from the dried stigmas of a crocus.",
    length: 7,
  },
  {
    word: "compote",
    clue: "A dessert originating from 17th-century France made of whole or pieces of fruit in sugar syrup.",
    length: 7,
  },
  {
    word: "chowder",
    clue: "A thick soup typically containing fish, seafood, or corn with potatoes and onions.",
    length: 7,
  },

  {
    word: "custard",
    clue: "A dessert or sweet sauce made with milk, eggs, and sugar.",
    length: 7,
  },
  {
    word: "crumble",
    clue: "A dessert of British origin containing stewed fruit topped with a crumbly mixture of fat, flour, and sugar.",
    length: 7,
  },
  {
    word: "frosted",
    clue: "Covered or decorated with frosting or ice.",
    length: 7,
  },
  {
    word: "jellied",
    clue: "Turned into jelly, typically by cooling or being mixed with gelatin.",
    length: 7,
  },
  {
    word: "piquant",
    clue: "Having a pleasantly sharp taste or appetizing flavor.",
    length: 7,
  },
  {
    word: "mache",
    clue: "A tender salad green with small, dark green leaves.",
    length: 5,
  },
  {
    word: "baking",
    clue: "The process of cooking food by dry heat in an oven, typically using flour, eggs, and other ingredients to produce bread, cakes, pastries, and similar items.",
    length: 6,
  },
  {
    word: "batter",
    clue: "A mixture of flour, eggs, and liquid used in cooking, typically to make cakes and pancakes.",
    length: 6,
  },
  {
    word: "dredging",
    clue: "Coating food, typically fish or meat, in flour or breadcrumbs before cooking.",
    length: 8,
  },
  {
    word: "kedgeree",
    clue: "A dish of rice, cooked fish, and hard-boiled eggs, often flavored with curry powder.",
    length: 8,
  },
  {
    word: "mandolin",
    clue: "A kitchen utensil with a blade for slicing, typically used for slicing vegetables.",
    length: 8,
  },
  {
    word: "emulsify",
    clue: "To combine two liquids that don't normally mix, such as oil and vinegar, into a stable emulsion.",
    length: 8,
  },
  {
    word: "infusion",
    clue: "The process of extracting chemical compounds or flavors from plant material in a solvent such as water, oil, or alcohol, by allowing the material to remain suspended in the solvent over time.",
    length: 8,
  },
  {
    word: "julienne",
    clue: "To cut food into thin, matchstick-like strips.",
    length: 8,
  },
  {
    word: "macerate",
    clue: "To soften or break down food by soaking it in a liquid.",
    length: 8,
  },
  {
    word: "crayfish",
    clue: "A freshwater crustacean resembling a small lobster, often used for food.",
    length: 8,
  },
  {
    word: "whisking",
    clue: "Mixing ingredients rapidly with a whisk or fork to incorporate air and create a smooth mixture.",
    length: 8,
  },
  {
    word: "saucepan",
    clue: "A deep cooking pan with a handle used for stewing or boiling.",
    length: 8,
  },
  {
    word: "barbecue",
    clue: "A meal or gathering at which meat, fish, or other food is cooked out of doors on a rack over an open fire or on a portable grill.",
    length: 8,
  },
  {
    word: "colander",
    clue: "A perforated bowl used to strain liquids or wash food.",
    length: 8,
  },
  {
    word: "nutrient",
    clue: "A substance that provides nourishment essential for growth and the maintenance of life.",
    length: 8,
  },
  {
    word: "delicacy",
    clue: "A choice or expensive food, typically one that is rare or difficult to obtain.",
    length: 8,
  },
  {
    word: "marinade",
    clue: "A sauce, typically made of oil, vinegar, spices, and herbs, in which meat, fish, or other food is soaked before cooking in order to flavor or soften it.",
    length: 8,
  },
  {
    word: "stinking",
    clue: "Having a strong and unpleasant smell.",
    length: 8,
  },
  {
    word: "dumpling",
    clue: "A small mass of dough cooked by boiling or steaming, typically served with meat or in soup.",
    length: 8,
  },
  {
    word: "broccoli",
    clue: "A cultivated variety of cabbage bearing heads of green or purplish flower buds.",
    length: 8,
  },
  {
    word: "macaroni",
    clue: "A variety of pasta in the form of narrow tubes.",
    length: 8,
  },
  {
    word: "luscious",
    clue: "Having a pleasingly rich, sweet taste.",
    length: 8,
  },
  {
    word: "zucchini",
    clue: "A variety of summer squash with a thin, dark green skin.",
    length: 8,
  },
  {
    word: "tasteful",
    clue: "Having or showing good taste.",
    length: 8,
  },
  {
    word: "gourmand",
    clue: "A person who enjoys eating and often eats too much.",
    length: 8,
  },
  {
    word: "pizzeria",
    clue: "A restaurant or establishment where pizzas are made and sold.",
    length: 8,
  },
  {
    word: "stirring",
    clue: "Moving a spoon or other implement around in (a liquid or other substance) to mix it thoroughly.",
    length: 8,
  },
  {
    word: "couscous",
    clue: "A North African dish of steamed semolina.",
    length: 8,
  },
  {
    word: "waitress",
    clue: "A woman who serves food and drinks to customers in a restaurant.",
    length: 8,
  },

  {
    word: "broiling",
    clue: "Cooking food by exposing it to direct heat.",
    length: 8,
  },

  {
    word: "bakeshop",
    clue: "A shop where bread and cakes are baked and sold.",
    length: 8,
  },
  {
    word: "overcook",
    clue: "Cook (food) for too long or at too high a temperature.",
    length: 8,
  },
  {
    word: "potbelly",
    clue: "A prominent or protruding belly.",
    length: 8,
  },
  {
    word: "mealtime",
    clue: "The usual time for a meal or meals.",
    length: 8,
  },
  {
    word: "chopping",
    clue: "Cutting food into small, irregular pieces using a knife or other cutting tool.",
    length: 8,
  },
  {
    word: "marinate",
    clue: "To soak food in a marinade to add flavor or tenderize it before cooking.",
    length: 8,
  },
  {
    word: "cookbook",
    clue: "A book containing recipes and instructions for cooking.",
    length: 8,
  },
  {
    word: "leftover",
    clue: "Remaining or unused after the greater part or quantity has gone.",
    length: 8,
  },
  {
    word: "culinary",
    clue: "Relating to cooking or the kitchen.",
    length: 8,
  },
  {
    word: "espalier",
    clue: "A plant trained to grow flat against a wall, often in a symmetrical pattern.",
    length: 8,
  },
  {
    word: "clambake",
    clue: "An outdoor party or picnic at which clams and other seafood are baked, typically on heated stones covered with seaweed.",
    length: 8,
  },
  {
    word: "plateful",
    clue: "The quantity of food that a plate can or does hold.",
    length: 8,
  },
  {
    word: "sizzling",
    clue: "Making a hissing sound when frying or cooking.",
    length: 8,
  },
  {
    word: "caffeine",
    clue: "A bitter compound found in coffee, tea, and some other plant-based beverages.",
    length: 8,
  },
  {
    word: "broccoli",
    clue: "A cultivated variety of cabbage bearing heads of green or purplish flower buds.",
    length: 8,
  },
  {
    word: "hazelnut",
    clue: "The nut of the hazel, typically small, round, and light brown, with a smooth shell.",
    length: 8,
  },
  {
    word: "lavender",
    clue: "A small aromatic evergreen shrub of the mint family, with narrow leaves and bluish-purple flowers.",
    length: 8,
  },

  {
    word: "allspice",
    clue: "The dried, unripe berry of Pimenta dioica, a Caribbean tree.",
    length: 8,
  },
  {
    word: "honeydew",
    clue: "The sweet, juicy fruit of a cultivated variety of melon.",
    length: 8,
  },
  {
    word: "beetroot",
    clue: "The swollen root of a beet plant, typically dark red and eaten as a vegetable.",
    length: 8,
  },
  {
    word: "frosting",
    clue: "A sweet mixture, cooked or uncooked, for coating or filling cakes or pastries.",
    length: 8,
  },
  {
    word: "meringue",
    clue: "A sweet foodstuff made from a mixture of well-beaten egg whites and sugar, baked until stiff.",
    length: 8,
  },
  {
    word: "charcoal",
    clue: "A porous black solid, consisting of an amorphous form of carbon, obtained as a residue when wood, bone, or other organic matter is heated in the absence of air.",
    length: 8,
  },
  {
    word: "escarole",
    clue: "A variety of endive with broad leaves that are pale green with white ribs.",
    length: 8,
  },
  {
    word: "capsicum",
    clue: "A mild-flavored green or red pepper.",
    length: 8,
  },
  {
    word: "dressing",
    clue: "A sauce for salads, typically one consisting of oil and vinegar mixed together with herbs or other flavorings.",
    length: 8,
  },
  {
    word: "glycerin",
    clue: "A sweet, syrupy liquid obtained from animal fats and oils or by the fermentation of glucose.",
    length: 8,
  },
  {
    word: "wishbone",
    clue: "A forked bone located between the neck and breast of a bird.",
    length: 8,
  },
  {
    word: "pimiento",
    clue: "A mild-flavored red pepper.",
    length: 8,
  },
  {
    word: "plantain",
    clue: "A tropical plant of the banana family, with broad leaves that are used for cooking.",
    length: 8,
  },
  {
    word: "cultured",
    clue: "Characterized by refined taste and manners and good education.",
    length: 8,
  },
  {
    word: "bouillon",
    clue: "A clear soup made from meat, vegetables, and bones.",
    length: 8,
  },
  {
    word: "dripping",
    clue: "Fat that is rendered or exuded during cooking, typically from meat.",
    length: 8,
  },
  {
    word: "crayfish",
    clue: "A freshwater crustacean that resembles a small lobster and inhabits rivers and streams.",
    length: 8,
  },
  {
    word: "duckling",
    clue: "A young duck.",
    length: 8,
  },
  {
    word: "drinking",
    clue: "The consumption of liquid, typically water or alcohol.",
    length: 8,
  },
  {
    word: "porridge",
    clue: "A dish consisting of oatmeal or another meal or cereal boiled in water or milk.",
    length: 8,
  },
  {
    word: "macaroni",
    clue: "A variety of pasta in the form of narrow tubes.",
    length: 8,
  },
  {
    word: "enhancer",
    clue: "A substance or object that improves the quality, flavor, or attractiveness of something.",
    length: 8,
  },
  {
    word: "browning",
    clue: "The process of becoming brown, typically by cooking.",
    length: 8,
  },
  {
    word: "unsifted",
    clue: "Not sifted; not having been put through a sieve or similar device.",
    length: 8,
  },
  {
    word: "cinnamon",
    clue: "A spice obtained from the inner bark of several trees from the genus Cinnamomum.",
    length: 8,
  },
  {
    word: "mushroom",
    clue: "A fungal growth that typically takes the form of a domed cap on a stalk, often with gills on the underside of the cap.",
    length: 8,
  },
  {
    word: "kohlrabi",
    clue: "A cabbage of a variety that does not develop a heart, with a swollen stem just above ground level that is eaten as a vegetable.",
    length: 8,
  },
  {
    word: "turmeric",
    clue: "A bright yellow aromatic powder obtained from the rhizome of a plant of the ginger family, used for flavoring and coloring in Asian cooking and formerly as a fabric dye.",
    length: 8,
  },
  {
    word: "molasses",
    clue: "A thick, dark brown syrup obtained from raw sugar during the refining process.",
    length: 8,
  },
  {
    word: "chestnut",
    clue: "A glossy brown nut that may be roasted and eaten.",
    length: 8,
  },
  {
    word: "boneless",
    clue: "Having had the bones removed.",
    length: 8,
  },
  {
    word: "softener",
    clue: "A substance added to another to make it less hard.",
    length: 8,
  },
  {
    word: "homemade",
    clue: "Made at home, rather than in a store or factory.",
    length: 8,
  },
  {
    word: "rapeseed",
    clue: "The seed of the rape plant, which is widely cultivated for its oil-rich seed.",
    length: 8,
  },
  {
    word: "zwieback",
    clue: "A usually sweetened bread enriched with eggs that is baked and then sliced and toasted until dry and crisp.",
    length: 8,
  },
  {
    word: "angelica",
    clue: "A European plant of the parsley family, cultivated for its fragrant stem and roots, which are candied and used in flavoring liqueurs such as Chartreuse.",
    length: 8,
  },
  {
    word: "marigold",
    clue: "A plant of the daisy family, typically with yellow, orange, or copper-brown flowers.",
    length: 8,
  },
  {
    word: "mandarin",
    clue: "A small, loose-skinned citrus fruit with sweet, juicy flesh and a thin, shiny orange or green skin.",
    length: 8,
  },
  {
    word: "stuffing",
    clue: "A mixture used to stuff poultry or meat before cooking.",
    length: 8,
  },
  {
    word: "cardamom",
    clue: "The aromatic seeds of a plant of the ginger family, used as a spice and also medicinally.",
    length: 8,
  },
  {
    word: "flavored",
    clue: "Altered or enhanced in taste with a particular ingredient, especially a sweet one.",
    length: 8,
  },
  {
    word: "anisette",
    clue: "A colorless liqueur flavored with aniseed.",
    length: 8,
  },
  {
    word: "schnapps",
    clue: "A strong, colorless alcoholic drink, especially one distilled from fermented fruit.",
    length: 8,
  },
  {
    word: "doughnut",
    clue: "A small fried cake of sweetened dough, typically in the shape of a ball or ring.",
    length: 8,
  },
  {
    word: "eggplant",
    clue: "A plant of the nightshade family, which bears egg-shaped fruit.",
    length: 8,
  },
  {
    word: "consomme",
    clue: "A clear soup made from concentrated stock.",
    length: 8,
  },
  {
    word: "sprinkle",
    clue: "Cover (an object or surface) with small drops or particles of a substance.",
    length: 8,
  },
  {
    word: "sandwich",
    clue: "An item of food consisting of two pieces of bread with a filling between them, eaten as a light meal.",
    length: 8,
  },
  {
    word: "meatless",
    clue: "Containing no meat.",
    length: 8,
  },
  {
    word: "licorice",
    clue: "The sweet root of a European plant of the pea family, used as a flavoring in confectionery and medicine.",
    length: 8,
  },
  {
    word: "marinade",
    clue: "A liquid typically made of oil, vinegar, spices, and herbs, in which meat, fish, or other food is soaked before cooking in order to flavor or soften it.",
    length: 8,
  },
  {
    word: "lecithin",
    clue: "A substance found in egg yolk and animal brains, used as an emulsifier in cooking.",
    length: 8,
  },
  {
    word: "unpeeled",
    clue: "Not having had the skin removed.",
    length: 8,
  },
  {
    word: "prepared",
    clue: "Made ready for use.",
    length: 8,
  },
  {
    word: "rosemary",
    clue: "An aromatic evergreen shrub of the mint family, native to southern Europe.",
    length: 8,
  },
  {
    word: "whipping",
    clue: "Beat (a substance, especially cream or eggs) with a light, rapid movement.",
    length: 8,
  },
  {
    word: "brandied",
    clue: "Containing brandy or flavored with it.",
    length: 8,
  },
  {
    word: "albacore",
    clue: "A tuna with long pectoral fins and a relatively long body, extensively fished commercially.",
    length: 8,
  },
  {
    word: "semolina",
    clue: "Wheat flour or meal that has been partly refined and has a coarse texture.",
    length: 8,
  },
  {
    word: "cocktail",
    clue: "An alcoholic drink consisting of a spirit or spirits mixed with other ingredients, such as fruit juice or cream.",
    length: 8,
  },
  {
    word: "roasting",
    clue: "Cooking (food, especially meat) by prolonged exposure to heat in an oven or over a fire.",
    length: 8,
  },
  {
    word: "fructose",
    clue: "A hexose sugar found especially in honey and fruit.",
    length: 8,
  },
  {
    word: "macaroon",
    clue: "A small cake or biscuit, typically made from ground almonds, coconut, and/or other nuts, with sugar and sometimes flavorings, bound with egg.",
    length: 8,
  },
  {
    word: "buttered",
    clue: "Spread or smeared with butter.",
    length: 8,
  },
  {
    word: "seedless",
    clue: "Containing no seeds.",
    length: 8,
  },
  {
    word: "rutabaga",
    clue: "A large yellow-fleshed root vegetable that is a cross between the turnip and the cabbage.",
    length: 8,
  },
  {
    word: "baguette",
    clue: "A long, narrow loaf of French bread.",
    length: 8,
  },
  {
    word: "tarragon",
    clue: "A Eurasian plant of the daisy family, with aromatic leaves.",
    length: 8,
  },
  {
    word: "mesquite",
    clue: "A spiny tree or shrub of the pea family, native to arid regions of southwestern US and Mexico, which bears long seed pods containing a sweet pulp that can be used in fodder and cooking.",
    length: 8,
  },
  {
    word: "spoonful",
    clue: "The quantity that a spoon can hold.",
    length: 8,
  },
  {
    word: "absinthe",
    clue: "A potent green aniseed-flavored alcoholic drink.",
    length: 8,
  },
  {
    word: "amaranth",
    clue: "A synthetic red food dye.",
    length: 8,
  },
  {
    word: "uncooked",
    clue: "Not cooked.",
    length: 8,
  },
  {
    word: "lemonade",
    clue: "A drink made from lemon juice, sugar, and water.",
    length: 8,
  },
  {
    word: "beverage",
    clue: "A drink, especially one other than water.",
    length: 8,
  },
  {
    word: "scallion",
    clue: "An onion-like plant with a small bulb and long, dark green leaves.",
    length: 8,
  },
  {
    word: "coleslaw",
    clue: "A salad consisting primarily of finely shredded raw cabbage and dressed most commonly with a vinaigrette salad dressing.",
    length: 8,
  },
  {
    word: "skinless",
    clue: "Having had the skin removed.",
    length: 8,
  },
  {
    word: "aromatic",
    clue: "Having a pleasant and distinctive smell.",
    length: 8,
  },
  {
    word: "mackerel",
    clue: "A fast-swimming pelagic fish found in temperate and tropical seas and valued commercially as a food fish.",
    length: 8,
  },
  {
    word: "powdered",
    clue: "Reduced to a powder by crushing, grinding, or erosion.",
    length: 8,
  },
  {
    word: "pastrami",
    clue: "Highly seasoned smoked beef.",
    length: 8,
  },
  {
    word: "emulsion",
    clue: "A fine dispersion of minute droplets of one liquid in another in which it is not soluble or miscible.",
    length: 8,
  },
  {
    word: "tamarind",
    clue: "The tropical African evergreen tree that produces tamarind pods.",
    length: 8,
  },
  {
    word: "celeriac",
    clue: "A variety of celery cultivated for its large, knobby edible root.",
    length: 8,
  },
  {
    word: "moisture",
    clue: "Water or other liquid diffused in a small quantity as vapor, within a solid, or condensed on a surface.",
    length: 8,
  },
  {
    word: "geranium",
    clue: "A herbaceous plant or small shrub of a genus that comprises the cranesbills and their relatives.",
    length: 8,
  },
  {
    word: "lollipop",
    clue: "A piece of boiled sugar candy mounted on a stick and often fruit-flavored.",
    length: 8,
  },
  {
    word: "dumpling",
    clue: "A small savory ball of dough (usually made with suet) that may be boiled, fried, or baked in a casserole.",
    length: 8,
  },
  {
    word: "tortilla",
    clue: "A thin, flat pancake of cornmeal or flour, eaten hot or cold, typically with a savory filling.",
    length: 8,
  },
  {
    word: "elegance",
    clue: "The quality of being graceful and stylish in appearance or manner.",
    length: 8,
  },
  {
    word: "cucumber",
    clue: "A long, green-skinned fruit with watery flesh, usually eaten raw in salads or pickled.",
    length: 8,
  },
  {
    word: "balsamic",
    clue: "Relating to or denoting vinegar in which the flavor has been enhanced by aging in wooden barrels.",
    length: 8,
  },
  {
    word: "muscatel",
    clue: "A strong sweet wine from Muscat grapes.",
    length: 8,
  },
  {
    word: "unsalted",
    clue: "Not containing any added salt.",
    length: 8,
  },
  {
    word: "schmaltz",
    clue: "Chicken fat.",
    length: 8,
  },
  {
    word: "marjoram",
    clue: "Aromatic Mediterranean plant of the mint family, the leaves of which are used as a herb, especially in dried form.",
    length: 8,
  },
  {
    word: "tartaric",
    clue: "Relating to or obtained from tartar.",
    length: 8,
  },
  {
    word: "oriental",
    clue: "Of, from, or characteristic of East Asia.",
    length: 8,
  },
  {
    word: "vermouth",
    clue: "A fortified wine flavored with aromatic herbs and spices, typically served as an ape\u0301ritif or in cocktails.",
    length: 8,
  },
  {
    word: "marzipan",
    clue: "A sweet, yellowish paste of ground almonds, sugar, and egg whites, often colored and used to make small cakes or confections or as an icing for larger cakes.",
    length: 8,
  },
  {
    word: "blanching",
    clue: "A cooking process in which food, usually a vegetable or fruit, is scalded in boiling water, removed after a brief, timed interval, and finally plunged into iced water or placed under cold running water to halt the cooking process.",
    length: 9,
  },
  {
    word: "crackling",
    clue: "The crisp skin of roasted pork.",
    length: 9,
  },
  {
    word: "fricassee",
    clue: "A stew made with pieces of meat, typically chicken or veal, that have been browned in butter and then braised.",
    length: 9,
  },
  {
    word: "grenadine",
    clue: "A red syrup made from pomegranate juice.",
    length: 9,
  },
  {
    word: "isinglass",
    clue: "A substance obtained from the dried swim bladders of fish, used mainly for the clarification of wine and beer.",
    length: 9,
  },
  {
    word: "pistachio",
    clue: "An edible green nut.",
    length: 9,
  },
  {
    word: "slaughter",
    clue: "The killing of animals for food.",
    length: 9,
  },
  {
    word: "margarine",
    clue: "A substitute for butter, prepared from vegetable oils or fats by emulsifying them with water and adding small amounts of milk, salt, coloring matter, flavoring agents, etc.",
    length: 9,
  },
  {
    word: "margarita",
    clue: "A cocktail consisting of tequila, orange liqueur, and lime juice, often served with salt on the rim of the glass.",
    length: 9,
  },
  {
    word: "casserole",
    clue: "A dish made by cooking ingredients, typically vegetables and meat, slowly in an oven.",
    length: 9,
  },
  {
    word: "banquette",
    clue: "A long upholstered bench, especially one along a wall in a restaurant.",
    length: 9,
  },
  {
    word: "sparkling",
    clue: "Emitting or reflecting flashes of light; glittering.",
    length: 9,
  },
  {
    word: "bartender",
    clue: "A person who serves drinks at a bar.",
    length: 9,
  },
  {
    word: "champagne",
    clue: "A sparkling wine produced from grapes grown in the Champagne region of France.",
    length: 9,
  },
  {
    word: "appetizer",
    clue: "A small dish of food or a drink taken before a meal to stimulate one's appetite.",
    length: 9,
  },
  {
    word: "filleting",
    clue: "The process of cutting a fish or meat into boneless pieces.",
    length: 9,
  },
  {
    word: "candlelit",
    clue: "Lit by the light of a candle or candles.",
    length: 9,
  },
  {
    word: "consuming",
    clue: "Eating or drinking (something).",
    length: 9,
  },
  {
    word: "tableware",
    clue: "The dishes, utensils, and glassware used for serving and eating meals.",
    length: 9,
  },
  {
    word: "healthful",
    clue: "Conducive to or suggestive of good health and physical well-being.",
    length: 9,
  },
  {
    word: "flavoring",
    clue: "A substance used to give a particular taste to food or drink.",
    length: 9,
  },
  {
    word: "preheated",
    clue: "Heated beforehand to a specified temperature.",
    length: 9,
  },
  {
    word: "chophouse",
    clue: "A restaurant specializing in the cooking and serving of chops.",
    length: 9,
  },
  {
    word: "raspberry",
    clue: "An edible soft fruit related to the blackberry, consisting of a cluster of reddish-pink drupelets.",
    length: 9,
  },
  {
    word: "flavorful",
    clue: "Full of flavor; tasting especially good.",
    length: 9,
  },
  {
    word: "nutrition",
    clue: "The process of providing or obtaining the food necessary for health and growth.",
    length: 9,
  },
  {
    word: "jambalaya",
    clue: "A spicy Creole dish of rice and meat, or seafood.",
    length: 9,
  },
  {
    word: "shortcake",
    clue: "A cake or biscuit with a rich, sweet, biscuit-like texture, made with or served with strawberries or other fruit.",
    length: 9,
  },
  {
    word: "succulent",
    clue: "Tender, juicy, and tasty.",
    length: 9,
  },
  {
    word: "artichoke",
    clue: "A variety of a cultivated thistle grown for its edible leaves and flower buds.",
    length: 9,
  },
  {
    word: "butternut",
    clue: "A type of squash with sweet, orange-yellow flesh.",
    length: 9,
  },
  {
    word: "schnitzel",
    clue: "A dish consisting of thin slices of meat that are breaded and fried.",
    length: 9,
  },

  {
    word: "breakfast",
    clue: "A meal eaten in the morning, the first of the day.",
    length: 9,
  },
  {
    word: "shellfish",
    clue: "An aquatic shelled mollusk or crustacean, typically eaten as seafood.",
    length: 9,
  },
  {
    word: "delicious",
    clue: "Highly pleasant to the taste.",
    length: 9,
  },
  {
    word: "unrefined",
    clue: "Not refined, processed, or treated with chemicals.",
    length: 9,
  },
  {
    word: "beefsteak",
    clue: "A slice of beef, typically cut thick and suitable for grilling or frying.",
    length: 9,
  },
  {
    word: "drumstick",
    clue: "Popular fried chicken part that's a favorite for many diners.",
    length: 9,
  },
  {
    word: "saltpeter",
    clue: "Potassium nitrate, used in preserving meat and making explosives.",
    length: 9,
  },
  {
    word: "jellyfish",
    clue: "A free-swimming marine coelenterate with a jellylike bell- or saucer-shaped body that is typically transparent and has stinging tentacles around the edge.",
    length: 9,
  },
  {
    word: "chocolate",
    clue: "A food in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened and eaten as confectionery.",
    length: 9,
  },
  {
    word: "pineapple",
    clue: "A tropical fruit with a tough, spiky skin and sweet, juicy, yellow flesh.",
    length: 9,
  },
  {
    word: "artichoke",
    clue: "A variety of a cultivated thistle grown for its edible leaves and flower buds.",
    length: 9,
  },
  {
    word: "horehound",
    clue: "A plant of the mint family, typically with hairy leaves and small white flowers, used in herbal medicine and formerly in brewing and confectionery.",
    length: 9,
  },
  {
    word: "measuring",
    clue: "Determining the size, amount, or degree of (something) by comparison with a standard unit.",
    length: 9,
  },
  {
    word: "enchilada",
    clue: "A rolled tortilla with a filling typically of meat and served with a chili sauce.",
    length: 9,
  },
  {
    word: "nutcracker",
    clue: "A device for cracking the shells of nuts.",
    length: 10,
  },
  {
    word: "dishwasher",
    clue: "A machine for washing dishes automatically.",
    length: 10,
  },
  {
    word: "dinnertime",
    clue: "The usual time of the evening meal.",
    length: 10,
  },
  {
    word: "dinnerware",
    clue: "Tableware used for serving and eating dinner.",
    length: 10,
  },
  {
    word: "overweight",
    clue: "Above a weight considered normal or desirable.",
    length: 10,
  },
  {
    word: "nourishing",
    clue: "Containing substances necessary for growth, health, and good condition.",
    length: 10,
  },
  {
    word: "nutritious",
    clue: "Providing nourishment; nutritious.",
    length: 10,
  },
  {
    word: "perishable",
    clue: "Likely to decay or go bad quickly.",
    length: 10,
  },
  {
    word: "caramelize",
    clue: "To heat sugar until it becomes a caramelized syrup.",
    length: 10,
  },
  {
    word: "jardiniere",
    clue: "A dish of cooked vegetables, especially French-style.",
    length: 10,
  },
  {
    word: "mayonnaise",
    clue: "A thick, creamy sauce used especially in salads and sandwiches.",
    length: 10,
  },
  {
    word: "restaurant",
    clue: "A place where people pay to sit and eat meals that are cooked and served on the premises.",
    length: 10,
  },
  {
    word: "wellington",
    clue: "A beef fillet cooked in pastry.",
    length: 10,
  },
  {
    word: "vegetarian",
    clue: "A person who does not eat meat or fish.",
    length: 10,
  },
  {
    word: "cheesecake",
    clue: "A sweet dessert consisting of one or more layers.",
    length: 10,
  },
  {
    word: "gastronome",
    clue: "A person who is knowledgeable about good food and drink; a gourmet.",
    length: 10,
  },
  {
    word: "shortbread",
    clue: "A rich buttery biscuit.",
    length: 10,
  },
  {
    word: "unflavored",
    clue: "Having no added flavor.",
    length: 10,
  },
  {
    word: "tablecloth",
    clue: "A cloth spread over a table, especially during meals.",
    length: 10,
  },
  {
    word: "ingredient",
    clue: "A component part or element of something.",
    length: 10,
  },
  {
    word: "sweetening",
    clue: "Substance used to sweeten food or drinks.",
    length: 10,
  },
  {
    word: "gastronomy",
    clue: "The practice or art of choosing, cooking, and eating good food.",
    length: 10,
  },
  {
    word: "spirituous",
    clue: "Containing or having the nature of alcohol.",
    length: 10,
  },
  {
    word: "jardiniere",
    clue: "A garnish or salad made of mixed vegetables.",
    length: 10,
  },
  {
    word: "patisserie",
    clue: "A shop where pastry, especially French pastry, is made and sold.",
    length: 10,
  },
  {
    word: "delectable",
    clue: "Delicious; delightful.",
    length: 10,
  },
  {
    word: "chartreuse",
    clue: "A pale green or yellow liqueur made from brandy.",
    length: 10,
  },
  {
    word: "vermicelli",
    clue: "Pasta in the form of long, slender threads.",
    length: 10,
  },
  {
    word: "tenderloin",
    clue: "The tenderest part of a loin of beef, pork, or other meat.",
    length: 10,
  },
  {
    word: "applesauce",
    clue: "A sauce made from cooked apples.",
    length: 10,
  },
  {
    word: "peppermint",
    clue: "A strong, sharp scent or flavor.",
    length: 10,
  },
  {
    word: "fingerling",
    clue: "A small, thin potato, typically harvested early for use as a new potato.",
    length: 10,
  },
  {
    word: "gingersnap",
    clue: "A thin, crisp ginger-flavored cookie.",
    length: 10,
  },
  {
    word: "gooseberry",
    clue: "The sour, usually green berry of certain species of Ribes.",
    length: 10,
  },
  {
    word: "smokehouse",
    clue: "A building where meat or fish is cured by exposure to smoke.",
    length: 10,
  },
  {
    word: "strawberry",
    clue: "A sweet soft red fruit with a seed-studded surface.",
    length: 10,
  },
  {
    word: "breadfruit",
    clue: "A large tropical fruit with a rough green rind.",
    length: 10,
  },
  {
    word: "granulated",
    clue: "Having been granulated; in the form of grains or granules.",
    length: 10,
  },
  {
    word: "shortening",
    clue: "A solid fat made from vegetable oils, used in cooking.",
    length: 10,
  },
  {
    word: "dissolving",
    clue: "Becoming or causing to become incorporated into a liquid.",
    length: 10,
  },
  {
    word: "artificial",
    clue: "Made or produced by human beings rather than occurring naturally.",
    length: 10,
  },
  {
    word: "cantaloupe",
    clue: "A type of melon with sweet orange flesh.",
    length: 10,
  },
  {
    word: "blackberry",
    clue: "A dark purple or blackish fruit.",
    length: 10,
  },
  {
    word: "ladyfinger",
    clue: "A small, delicate, sweet sponge cake biscuit.",
    length: 10,
  },
  {
    word: "grapefruit",
    clue: "A large, round citrus fruit with a bitter, juicy pulp.",
    length: 10,
  },
  {
    word: "cornstarch",
    clue: "A powdered starch obtained from the endosperm of the corn kernel.",
    length: 10,
  },
  {
    word: "unseasoned",
    clue: "Food not seasoned with added flavorings or spices.",
    length: 10,
  },
  {
    word: "liverwurst",
    clue: "A type of sausage made from liver, often spreadable.",
    length: 10,
  },
  {
    word: "disposable",
    clue: "Intended to be thrown away after use, like plates or utensils.",
    length: 10,
  },
  {
    word: "cuttlefish",
    clue: "A marine mollusk used in seafood dishes, with broad body and fins.",
    length: 10,
  },
  {
    word: "coffeecake",
    clue: "A cake with a crumb topping, perfect for serving with coffee.",
    length: 10,
  },
  {
    word: "compressed",
    clue: "Flattened or pressed together, often used in food storage.",
    length: 10,
  },
  {
    word: "buttermilk",
    clue: "Liquid left after churning butter, used in baking.",
    length: 10,
  },
  {
    word: "elderberry",
    clue: "Dark purple berry used in making wine and jelly.",
    length: 10,
  },
  {
    word: "shortbread",
    clue: "Rich, crumbly cookie made with butter, sugar, and flour.",
    length: 10,
  },
  {
    word: "sauerkraut",
    clue: "Finely cut fermented cabbage, often served as a condiment.",
    length: 10,
  },
  {
    word: "watermelon",
    clue: "Large fruit with juicy red flesh and a green rind.",
    length: 10,
  },
  {
    word: "nasturtium",
    clue: "Edible garden plant with round leaves and bright flowers.",
    length: 10,
  },
  {
    word: "supplement",
    clue: "Something added to enhance or complete a diet.",
    length: 10,
  },
  {
    word: "peppercorn",
    clue: "Whole dried berry of the pepper plant, used as a spice.",
    length: 10,
  },
  {
    word: "vegetarian",
    clue: "A person who does not eat meat.",
    length: 10,
  },
  {
    word: "maraschino",
    clue: "Sweet liqueur made from cherries.",
    length: 10,
  },
  {
    word: "rotisserie",
    clue: "Cooking appliance with a rotating spit for roasting meat.",
    length: 10,
  },
  {
    word: "honeycomb",
    clue: "Structure of hexagonal cells made by bees to store honey.",
    length: 9,
  },
  {
    word: "cochineal",
    clue: "Red dye from dried bodies of female cochineal insects, used in food.",
    length: 9,
  },
  {
    word: "butterfly",
    clue: "Nectar-feeding insect, also refers to a cut of meat or fish.",
    length: 9,
  },
  {
    word: "digestive",
    clue: "Relating to digestion or a type of biscuit.",
    length: 9,
  },
  {
    word: "vegetable",
    clue: "Edible plant or part of a plant, such as carrots or beans.",
    length: 9,
  },
  {
    word: "distilled",
    clue: "Purified by heating and cooling, often used for spirits.",
    length: 9,
  },
  {
    word: "swordfish",
    clue: "Large marine fish with a long bill, used in seafood dishes.",
    length: 9,
  },
  {
    word: "casserole",
    clue: "Dish made by cooking ingredients slowly in an oven.",
    length: 9,
  },
  {
    word: "safflower",
    clue: "Plant cultivated for its oil-rich seeds, used in cooking.",
    length: 9,
  },
  {
    word: "asparagus",
    clue: "Green vegetable with long spears, often considered a delicacy.",
    length: 9,
  },
  {
    word: "persimmon",
    clue: "Sweet, edible fruit resembling a large tomato.",
    length: 9,
  },
  {
    word: "seasoning",
    clue: "Substance added to food to enhance flavor, like salt or spices.",
    length: 9,
  },
  {
    word: "wholesome",
    clue: "Conducive to good health, often used to describe food.",
    length: 9,
  },
  {
    word: "appliance",
    clue: "Device designed for specific tasks, such as a blender or oven.",
    length: 9,
  },
  {
    word: "pepperoni",
    clue: "Seasoned sausage often used as a pizza topping.",
    length: 9,
  },
  {
    word: "spaghetti",
    clue: "Long, thin pasta, often served with sauce.",
    length: 9,
  },
  {
    word: "enchilada",
    clue: "Rolled tortilla with filling, typically meat, and chili sauce.",
    length: 9,
  },
  {
    word: "refresher",
    clue: "A drink or light snack that revives energy.",
    length: 9,
  },
  {
    word: "chopstick",
    clue: "One of a pair of thin sticks used as eating utensils.",
    length: 9,
  },
  {
    word: "toothpick",
    clue: "Small stick used to remove food from between teeth.",
    length: 9,
  },
  {
    word: "hamburger",
    clue: "Ground beef patty, often served in a bun.",
    length: 9,
  },
  {
    word: "sunflower",
    clue: "Plant with large yellow flowers, seeds used for oil and snacks.",
    length: 9,
  },
  {
    word: "buckwheat",
    clue: "Grain-like seeds used to make flour or as a food ingredient.",
    length: 9,
  },
  {
    word: "exquisite",
    clue: "Extremely beautiful or delicate, often used to describe food presentation.",
    length: 9,
  },
  {
    word: "cranberry",
    clue: "Tart red berry used in cooking and for juice.",
    length: 9,
  },
  {
    word: "cafeteria",
    clue: "Self-service restaurant with a variety of dishes.",
    length: 9,
  },
  {
    word: "luncheon",
    clue: "Formal midday meal.",
    length: 8,
  },
  {
    word: "buffet",
    clue: "Meal with various dishes where guests serve themselves.",
    length: 6,
  },
  {
    word: "canape",
    clue: "Small piece of bread or pastry with a savory topping, served as an appetizer.",
    length: 6,
  },
  {
    word: "frappe",
    clue: "Iced drink, often coffee or fruit-flavored.",
    length: 6,
  },
  {
    word: "giblet",
    clue: "Edible internal organs of poultry, used in cooking.",
    length: 6,
  },
  {
    word: "gluten",
    clue: "Protein in cereal grains, gives dough its elasticity.",
    length: 6,
  },
  {
    word: "junket",
    clue: "Dessert made with flavored milk set to a creamy consistency.",
    length: 6,
  },
  {
    word: "kosher",
    clue: "Food prepared according to Jewish dietary laws.",
    length: 6,
  },
  {
    word: "napper",
    clue: "Shallow dish used for serving soup or stew.",
    length: 6,
  },
  {
    word: "ragout",
    clue: "Rich, savory stew of meat or vegetables.",
    length: 6,
  },
  {
    word: "shrimp",
    clue: "Small crustacean used in various dishes.",
    length: 6,
  },
  {
    word: "strudel",
    clue: "Layered pastry with a sweet filling, often apple.",
    length: 7,
  },
  {
    word: "wiener",
    clue: "Type of sausage also known as a frankfurter.",
    length: 6,
  },
  {
    word: "zaatar",
    clue: "Middle Eastern spice mix of thyme, sesame seeds, and sumac.",
    length: 6,
  },
  {
    word: "zabaglione",
    clue: "Italian dessert of whipped eggs, sugar, and Marsala wine.",
    length: 10,
  },
  {
    word: "grater",
    clue: "A kitchen utensil with sharp-edged holes used for shredding cheese, vegetables, or other foods.",
    length: 6,
  },
  {
    word: "kettle",
    clue: "A container with a handle and spout, used for boiling water or cooking liquids.",
    length: 6,
  },
  {
    word: "course",
    clue: "A single part of a meal, served sequentially, typically including appetizers, main dishes, and desserts.",
    length: 6,
  },
  {
    word: "haggis",
    clue: "A Scottish dish made from sheep's offal mixed with suet, oatmeal, and seasoning, traditionally boiled in a sheep's stomach.",
    length: 6,
  },
  {
    word: "bisque",
    clue: "A creamy soup, often made with shellfish like lobster or crab, typically smooth and velvety in texture.",
    length: 6,
  },
  {
    word: "bistro",
    clue: "A small, casual restaurant serving simple meals, often French-inspired, in an unpretentious setting.",
    length: 6,
  },
  {
    word: "mousse",
    clue: "A light, airy dessert made with whipped cream or egg whites, flavored with chocolate, fruit, or other ingredients.",
    length: 6,
  },
  {
    word: "garlic",
    clue: "A pungent bulb used as a seasoning in various dishes, known for its strong flavor and health benefits.",
    length: 6,
  },
  {
    word: "muffin",
    clue: "A small, baked quick bread or cake, typically round and eaten as a breakfast or snack food.",
    length: 6,
  },
  {
    word: "dinner",
    clue: "The main meal of the day, usually served in the evening and often consisting of multiple courses.",
    length: 6,
  },
  {
    word: "brandy",
    clue: "A strong alcoholic spirit distilled from wine or fermented fruit juice, often aged in barrels.",
    length: 6,
  },
  {
    word: "tamale",
    clue: "A Mexican dish of seasoned meat wrapped in cornmeal dough and steamed or baked in corn husks.",
    length: 6,
  },
  {
    word: "imbibe",
    clue: "To consume alcoholic beverages, especially in a social setting.",
    length: 6,
  },
  {
    word: "shandy",
    clue: "A drink made by mixing beer with lemonade or a similar non-alcoholic beverage.",
    length: 6,
  },
  {
    word: "liquor",
    clue: "An alcoholic drink, especially distilled spirits like whiskey, vodka, or rum.",
    length: 6,
  },
  {
    word: "eatery",
    clue: "A restaurant or other place where people can eat meals.",
    length: 6,
  },
  {
    word: "butter",
    clue: "A dairy product made by churning cream or milk, commonly used as a spread and in cooking.",
    length: 6,
  },
  {
    word: "peanut",
    clue: "A leguminous plant whose seeds are edible and often roasted or used in cooking.",
    length: 6,
  },
  {
    word: "masher",
    clue: "A utensil used for mashing or crushing food, typically vegetables like potatoes.",
    length: 6,
  },
  {
    word: "grouse",
    clue: "A type of game bird, or to complain or grumble about something.",
    length: 6,
  },
  {
    word: "peeler",
    clue: "A tool used to remove the skin from fruits and vegetables.",
    length: 6,
  },
  {
    word: "tomato",
    clue: "A red or yellow pulpy fruit eaten as a vegetable in salads or cooked dishes.",
    length: 6,
  },
  {
    word: "trifle",
    clue: "A dessert made with layers of sponge cake, custard, fruit, jelly, and whipped cream.",
    length: 6,
  },
  {
    word: "brunch",
    clue: "A late morning meal combining breakfast and lunch, often served on weekends.",
    length: 6,
  },
  {
    word: "waffle",
    clue: "A battercake with a patterned grid surface, cooked in a waffle iron.",
    length: 6,
  },
  {
    word: "potato",
    clue: "A starchy tuber widely used as a vegetable in cooking, known for its versatility.",
    length: 6,
  },
  {
    word: "salmon",
    clue: "A prized fish species with pink flesh, popular for its flavor and nutritional value.",
    length: 6,
  },
  {
    word: "sorrel",
    clue: "A leafy herb with tart, lemony flavor used in salads and cooking for its acidity.",
    length: 6,
  },
  {
    word: "gourd",
    clue: "The hard-shelled fruit of plants like pumpkin and cucumber, often used decoratively or as utensils.",
    length: 5,
  },
  {
    word: "quail",
    clue: "A small game bird with plump body and spotted plumage, prized for its delicate meat.",
    length: 5,
  },
  {
    word: "pimms",
    clue: "A British cocktail made with fruit, lemonade, mint, and Pimm's No. 1 Cup.",
    length: 5,
  },
  {
    word: "pecan",
    clue: "A nut with a rich, buttery flavor, often used in baking and desserts.",
    length: 5,
  },
  {
    word: "dough",
    clue: "A mixture of flour and water used as the basis for bread, cakes, and pastry.",
    length: 5,
  },
  {
    word: "pilaf",
    clue: "A dish of rice cooked in seasoned broth, often with meat or vegetables.",
    length: 5,
  },
  {
    word: "cream",
    clue: "The fatty part of milk used in cooking and desserts, obtained by skimming.",
    length: 5,
  },
  {
    word: "trout",
    clue: "A freshwater fish known for its delicate flavor and belonging to the salmon family.",
    length: 5,
  },
  {
    word: "chili",
    clue: "A spicy stew made with chili peppers, meat, tomatoes, and beans.",
    length: 5,
  },
  {
    word: "ackee",
    clue: "A tropical fruit used in Caribbean cuisine, especially in dishes like ackee and saltfish.",
    length: 5,
  },
  {
    word: "olive",
    clue: "A small fruit with bitter flesh, cured and used in cooking or eaten as a snack.",
    length: 5,
  },
  {
    word: "penne",
    clue: "A type of pasta with short tubes and diagonally cut ends.",
    length: 5,
  },
  {
    word: "salsa",
    clue: "A spicy sauce made with tomatoes, onions, peppers, and herbs, served with Mexican dishes.",
    length: 5,
  },
  {
    word: "candy",
    clue: "Sweet food made from sugar or syrup combined with fruit, nuts, or chocolate.",
    length: 5,
  },
  {
    word: "chard",
    clue: "A leafy green vegetable with colorful stems, used in salads and cooked dishes.",
    length: 5,
  },
  {
    word: "fudge",
    clue: "A soft candy made from sugar, butter, and milk or cream, often flavored with chocolate.",
    length: 5,
  },
  {
    word: "capon",
    clue: "A castrated rooster known for its tender meat, used in culinary dishes.",
    length: 5,
  },
  {
    word: "wheat",
    clue: "A cereal grain used to make flour for bread, pasta, and other foods.",
    length: 5,
  },
  {
    word: "kefir",
    clue: "A fermented milk drink similar to yogurt, originating in the Caucasus region.",
    length: 5,
  },
  {
    word: "mango",
    clue: "A tropical fruit with sweet, juicy flesh and a distinct flavor.",
    length: 5,
  },
  {
    word: "crepe",
    clue: "A thin pancake served with sweet or savory fillings.",
    length: 5,
  },
  {
    word: "basil",
    clue: "An aromatic herb used in Italian cooking for its strong, sweet scent.",
    length: 5,
  },
  {
    word: "panko",
    clue: "Japanese-style breadcrumbs used as a coating for fried foods.",
    length: 5,
  },
  {
    word: "torta",
    clue: "A Mexican sandwich made with a crusty roll and various fillings.",
    length: 5,
  },
  {
    word: "glaze",
    clue: "A glossy coating applied to food for flavor and shine, sweet or savory.",
    length: 5,
  },
  {
    word: "crumb",
    clue: "A small fragment of bread, cake, or biscuit used as a topping or filler.",
    length: 5,
  },
  {
    word: "squid",
    clue: "A mollusk with a soft body and tentacles, often served in dishes like calamari.",
    length: 5,
  },
  {
    word: "chive",
    clue: "An herb with long, thin leaves and a mild onion flavor, used fresh as a garnish or in cooking.",
    length: 5,
  },
  {
    word: "quark",
    clue: "A fresh dairy product made by curdling soured milk and straining the curds.",
    length: 5,
  },
  {
    word: "curry",
    clue: "A dish with meat, fish, or vegetables cooked in a sauce flavored with spices, originating from South Asian cuisine.",
    length: 5,
  },
  {
    word: "juice",
    clue: "The liquid obtained by pressing or squeezing fruits or vegetables, often consumed as a beverage.",
    length: 5,
  },
  {
    word: "puree",
    clue: "A smooth, creamy substance made by crushing or blending food until it reaches a uniform consistency.",
    length: 5,
  },
  {
    word: "sugar",
    clue: "A sweet crystalline substance derived from plants, used as a sweetener in food and drinks.",
    length: 5,
  },
  {
    word: "broth",
    clue: "A savory liquid made by simmering meat, bones, or vegetables in water, used as a base for soups.",
    length: 5,
  },
  {
    word: "cider",
    clue: "An alcoholic beverage made from fermented apple juice.",
    length: 5,
  },
  {
    word: "poppy",
    clue: "A plant with seeds used in baking and cooking, known for its nutty flavor.",
    length: 5,
  },
  {
    word: "grape",
    clue: "A small, sweet fruit used in winemaking and eaten fresh or dried.",
    length: 5,
  },
  {
    word: "clove",
    clue: "The dried flower bud of a tropical tree, used as a pungent spice.",
    length: 5,
  },
  {
    word: "moose",
    clue: "A large deer with broad antlers, not typically used in culinary contexts.",
    length: 5,
  },
  {
    word: "petal",
    clue: "Each segment of a flower's corolla, often colorful and used for decorative purposes.",
    length: 5,
  },
  {
    word: "melon",
    clue: "A juicy fruit with a thick rind and many seeds, such as cantaloupe or watermelon.",
    length: 5,
  },
  {
    word: "wraps",
    clue: "Thin, flatbread used to enclose fillings, often eaten as an alternative to sandwiches.",
    length: 5,
  },
  {
    word: "morel",
    clue: "An edible mushroom with a distinct honeycomb-like cap, prized for its flavor.",
    length: 5,
  },
  {
    word: "jelly",
    clue: "A sweet, semisolid food made by boiling fruit juice with sugar and pectin.",
    length: 5,
  },
  {
    word: "broil",
    clue: "To cook food by exposing it to direct radiant heat, typically from above.",
    length: 5,
  },
  {
    word: "farro",
    clue: "An ancient grain with a nutty flavor and chewy texture, used in salads and soups.",
    length: 5,
  },
  {
    word: "lemon",
    clue: "A citrus fruit known for its acidic flavor, used in cooking and beverages.",
    length: 5,
  },
  {
    word: "sushi",
    clue: "Japanese dish of cold-cooked rice served with raw fish or other ingredients.",
    length: 5,
  },
  {
    word: "pizza",
    clue: "An Italian dish of dough topped with tomatoes, cheese, and various toppings.",
    length: 5,
  },
  {
    word: "ladle",
    clue: "A long-handled spoon with a cup-shaped bowl, used for serving soups and sauces.",
    length: 5,
  },
  {
    word: "prawn",
    clue: "A large shrimp, particularly one suitable for eating.",
    length: 5,
  },
  {
    word: "matzo",
    clue: "An unleavened flatbread eaten during Passover in Jewish tradition.",
    length: 5,
  },
  {
    word: "gravy",
    clue: "A sauce made by thickening and seasoning the juices from cooked meat.",
    length: 5,
  },
  {
    word: "roast",
    clue: "To cook food by exposing it to dry heat in an oven or over a fire.",
    length: 5,
  },
  {
    word: "blend",
    clue: "To mix different substances together thoroughly to create a unified mixture.",
    length: 5,
  },
  {
    word: "flour",
    clue: "Powder made by grinding raw grains or roots, used in baking.",
    length: 5,
  },
  {
    word: "peach",
    clue: "A round fruit with juicy flesh and downy skin, often eaten fresh or preserved.",
    length: 5,
  },
  {
    word: "stove",
    clue: "A device used for cooking, typically with a heated surface.",
    length: 5,
  },
  {
    word: "sumaq",
    clue: "A Middle Eastern spice made from dried ground berries, used as a seasoning.",
    length: 5,
  },
  {
    word: "brine",
    clue: "Water saturated with salt, used for pickling and preserving food.",
    length: 5,
  },
  {
    word: "steak",
    clue: "A slice of meat, especially beef, cooked by grilling, frying, or broiling.",
    length: 5,
  },
  {
    word: "kombu",
    clue: "An edible kelp often used to flavor Japanese stocks and soups.",
    length: 5,
  },
  {
    word: "cumin",
    clue: "An aromatic spice with a warm, earthy flavor, commonly used in curry powders and Mexican dishes like chili.",
    length: 5,
  },
  {
    word: "thyme",
    clue: "A fragrant herb with small, pale green leaves, prized for its use in soups, stews, and roasts.",
    length: 5,
  },
  {
    word: "sopes",
    clue: "A traditional Mexican dish consisting of thick corn tortillas topped with refried beans, meat, salsa, and cheese.",
    length: 5,
  },
  {
    word: "slice",
    clue: "A thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion for serving.",
    length: 5,
  },
  {
    word: "latik",
    clue: "A Filipino dessert topping made from coconut milk and sugar, often used on rice cakes or desserts like bibingka.",
    length: 5,
  },
  {
    word: "acorn",
    clue: "The fruit of the oak tree, known for its nutty flavor when roasted and used in various dishes.",
    length: 5,
  },
  {
    word: "corer",
    clue: "A tool designed to remove the core from fruits such as apples and pears quickly and efficiently.",
    length: 5,
  },
  {
    word: "colby",
    clue: "A semi-hard cheese made from cow's milk, similar to cheddar but with a milder taste, often used in sandwiches and casseroles.",
    length: 5,
  },
  {
    word: "creme",
    clue: "A rich, creamy dessert made with sugar, eggs, and flavorings, served chilled as a luxurious treat.",
    length: 5,
  },
  {
    word: "anise",
    clue: "An aromatic spice with a licorice-like flavor, used to enhance the taste of baked goods, liqueurs, and savory dishes.",
    length: 5,
  },
  {
    word: "pesto",
    clue: "A sauce originating from Genoa, Italy, made with crushed basil leaves, garlic, pine nuts, Parmesan cheese, and olive oil.",
    length: 5,
  },
  {
    word: "grate",
    clue: "To shred food into small pieces by rubbing it against a serrated surface, commonly used for cheese and vegetables.",
    length: 5,
  },
  {
    word: "honey",
    clue: "A natural sweetener produced by bees from flower nectar, widely used in cooking, baking, and as a spread.",
    length: 5,
  },
  {
    word: "crema",
    clue: "A thick, velvety layer of foam that forms on top of a well-made espresso, adding richness and flavor.",
    length: 5,
  },
  {
    word: "spice",
    clue: "A pungent or aromatic substance used to flavor food, typically ground from seeds, bark, or roots.",
    length: 5,
  },
  {
    word: "bacon",
    clue: "Cured and smoked meat from the back or sides of a pig, prized for its salty, savory flavor in breakfasts and sandwiches.",
    length: 5,
  },
  {
    word: "khubz",
    clue: "A type of flatbread widely used in Middle Eastern cuisine, perfect for wrapping grilled meats and vegetables.",
    length: 5,
  },
  {
    word: "roqaq",
    clue: "A thin, crispy bread popular in Middle Eastern cuisine, similar to lavash and often served with dips and spreads.",
    length: 5,
  },
  {
    word: "konbu",
    clue: "An edible kelp used to add umami flavor to Japanese soups, stocks, and broths, known for its rich nutrients.",
    length: 5,
  },
  {
    word: "apple",
    clue: "The fruit of the apple tree, appreciated for its crisp texture and sweet-tart flavor in desserts and savory dishes.",
    length: 5,
  },
  {
    word: "fryer",
    clue: "A kitchen appliance or device used for frying food, featuring a basket or tray for easy cooking and draining.",
    length: 5,
  },
  {
    word: "kasha",
    clue: "A nutritious porridge made from buckwheat groats, enjoyed as a hearty breakfast or savory side dish.",
    length: 5,
  },
  {
    word: "gyoza",
    clue: "Japanese dumplings filled with ground meat and vegetables, typically pan-fried or steamed and served with dipping sauce.",
    length: 5,
  },
  {
    word: "berry",
    clue: "A small, juicy fruit with seeds, often used in pies, jams, and desserts for its vibrant color and sweet-tart flavor.",
    length: 5,
  },
  {
    word: "stock",
    clue: "A flavorful liquid made by simmering bones, meat, vegetables, and herbs, used as a base for soups, stews, and sauces.",
    length: 5,
  },
  {
    word: "recao",
    clue: "A Caribbean herb resembling cilantro, valued for its distinctive flavor and used to season various dishes.",
    length: 5,
  },
  {
    word: "crimp",
    clue: "To pinch and press together the edges of pastry or dough to seal or create a decorative edge, ensuring filling stays inside.",
    length: 5,
  },
  {
    word: "ranch",
    clue: "A creamy dressing or sauce made with buttermilk, mayonnaise, and herbs, popular as a dip for vegetables or dressing for salads.",
    length: 5,
  },
  {
    word: "onion",
    clue: "A pungent bulb used in cooking for its strong flavor, versatile in dishes from soups to stir-fries.",
    length: 5,
  },
  {
    word: "sauce",
    clue: "A liquid or semi-liquid mixture served with food to enhance its flavor, texture, or moisture content.",
    length: 5,
  },
  {
    word: "bagel",
    clue: "A ring-shaped bread roll with a dense, chewy interior and crisp crust, typically boiled and then baked.",
    length: 5,
  },
  {
    word: "fruit",
    clue: "The sweet and juicy product of plants that contains seeds, enjoyed fresh, dried, or cooked in a variety of culinary applications.",
    length: 5,
  },
  {
    word: "scoop",
    clue: "A utensil with a deep bowl-shaped end, used for digging, serving, or portioning food like ice cream or cookie dough.",
    length: 5,
  },
  {
    word: "fries",
    clue: "Potatoes cut into strips and deep-fried until golden and crispy, often served as a side dish or snack.",
    length: 5,
  },
  {
    word: "scone",
    clue: "A small, round cake made from flour, fat, and milk, often served with tea and enjoyed plain or with butter and jam.",
    length: 5,
  },
  {
    word: "punch",
    clue: "A fruity beverage made with fruit juice, often spiked with alcohol for festive occasions, served cold over ice.",
    length: 5,
  },
  {
    word: "smash",
    clue: "To crush or break ingredients forcefully into pieces, often used in reference to making mashed potatoes or guacamole.",
    length: 5,
  },
  {
    word: "moist",
    clue: "Slightly wet or damp, often used to describe the desirable texture of cakes or bread.",
    length: 5,
  },
  {
    word: "whisk",
    clue: "A kitchen utensil with a handle and wire loops, used for beating or stirring ingredients to incorporate air.",
    length: 5,
  },
  {
    word: "cajun",
    clue: "Relating to Cajun cuisine, characterized by spicy flavors and dishes like jambalaya or gumbo.",
    length: 5,
  },
  {
    word: "mince",
    clue: "To cut or chop food, especially meat, into very small, fine pieces, often used in recipes for sauces or fillings.",
    length: 5,
  },
  {
    word: "chuck",
    clue: "A cut of beef from the shoulder area, often used for making stews or ground beef.",
    length: 5,
  },
  {
    word: "mirin",
    clue: "A sweet rice wine used in Japanese cooking to add a mild sweetness and gloss to dishes.",
    length: 5,
  },
  {
    word: "caper",
    clue: "The pickled flower bud of a Mediterranean shrub, used as a pungent flavoring in dishes like chicken piccata.",
    length: 5,
  },
  {
    word: "lardo",
    clue: "Cured pork fatback, sliced thinly and used as a flavorful addition to charcuterie boards or as a cooking fat.",
    length: 5,
  },
  {
    word: "dulse",
    clue: "A type of edible red seaweed, used in salads, soups, and as a seasoning in various dishes.",
    length: 5,
  },
  {
    word: "toast",
    clue: "Sliced bread that has been browned by exposure to radiant heat, often served with butter or spreads.",
    length: 5,
  },
  {
    word: "conch",
    clue: "A large marine mollusk with a spiral shell, known for its firm, sweet meat used in Caribbean cuisine.",
    length: 5,
  },
  {
    word: "guava",
    clue: "A tropical fruit with fragrant, sweet flesh, often used in juices, desserts, and jams.",
    length: 5,
  },
  {
    word: "coppa",
    clue: "An Italian cured meat made from the pork shoulder or neck, known for its rich flavor and marbled texture.",
    length: 5,
  },
  {
    word: "dukka",
    clue: "A Middle Eastern blend of nuts, seeds, and spices, used as a seasoning or dip, often paired with bread and olive oil.",
    length: 5,
  },
  {
    word: "liver",
    clue: "A large organ used in cooking, known for its rich, iron-heavy flavor, often made into pâtés or fried dishes.",
    length: 5,
  },
  {
    word: "pipis",
    clue: "A type of shellfish native to Australia and New Zealand, used in seafood dishes like stews or pastas.",
    length: 5,
  },
  {
    word: "melds",
    clue: "To blend or merge flavors together harmoniously, often used in the context of creating complex dishes.",
    length: 5,
  },
  {
    word: "tongs",
    clue: "A kitchen tool with two arms for gripping and lifting food, essential for tasks like flipping meat or serving salads.",
    length: 5,
  },
  {
    word: "discs",
    clue: "Flat, thin, circular slices of ingredients, often used to describe vegetable or fruit preparations.",
    length: 5,
  },
  {
    word: "slits",
    clue: "Narrow cuts made in food, often in meat or pastry, to allow flavors to penetrate or steam to escape.",
    length: 5,
  },
  {
    word: "melts",
    clue: "To change from a solid to a liquid state through heat, often used in cooking for cheese or chocolate.",
    length: 5,
  },
  {
    word: "foams",
    clue: "A mass of small bubbles formed on or in liquid, used in cooking for frothy beverages or culinary techniques like espuma.",
    length: 5,
  },
  {
    word: "peels",
    clue: "To remove the outer covering from fruits or vegetables, a common preparatory step in cooking.",
    length: 5,
  },
  {
    word: "wilts",
    clue: "To become limp through heat or lack of water, often used in cooking to describe the softening of leafy greens.",
    length: 5,
  },
  {
    word: "boils",
    clue: "To heat a liquid until it bubbles vigorously, a basic cooking technique for preparing many dishes.",
    length: 5,
  },
  {
    word: "burns",
    clue: "To damage food by overcooking, resulting in a charred or scorched surface, often considered undesirable.",
    length: 5,
  },
  {
    word: "folds",
    clue: "To gently combine ingredients by repeatedly turning one part over another, used in delicate mixing like with whipped cream.",
    length: 5,
  },
  {
    word: "thaws",
    clue: "To warm frozen food until it becomes soft or liquid, often the first step in preparing frozen ingredients.",
    length: 5,
  },
  {
    word: "mixes",
    clue: "To combine ingredients thoroughly, ensuring even distribution, commonly done with a spoon or mixer.",
    length: 5,
  },
  {
    word: "trays",
    clue: "Flat, shallow containers used to hold or carry food items, essential in baking and serving.",
    length: 5,
  },
  {
    word: "dries",
    clue: "To remove moisture from food, often through methods like baking or using a dehydrator.",
    length: 5,
  },
  {
    word: "ovens",
    clue: "Enclosed compartments used for baking, roasting, and other forms of cooking, an essential kitchen appliance.",
    length: 5,
  },
  {
    word: "packs",
    clue: "To fill containers with food for storage or transport, often used in meal prep and food preservation.",
    length: 5,
  },
  {
    word: "beats",
    clue: "To stir vigorously, often to incorporate air into ingredients like eggs or cream.",
    length: 5,
  },
  {
    word: "wipes",
    clue: "To clean or dry surfaces by rubbing with a cloth or paper towel, essential for kitchen hygiene.",
    length: 5,
  },
  {
    word: "cooks",
    clue: "To prepare food by applying heat, encompassing a wide range of methods and techniques.",
    length: 5,
  },
  {
    word: "chars",
    clue: "To cook the surface of food until it is blackened, used to add a smoky flavor and texture.",
    length: 5,
  },
  {
    word: "tucks",
    clue: "To push or fold ingredients into a neat arrangement, often used in pastry making.",
    length: 5,
  },
  {
    word: "chops",
    clue: "To cut food, especially meat, into small pieces using a knife.",
    length: 5,
  },
  {
    word: "coats",
    clue: "To cover food with a layer of sauce or batter before cooking.",
    length: 5,
  },
  {
    word: "skins",
    clue: "To remove the outer layer of a fruit or vegetable before cooking.",
    length: 5,
  },
  {
    word: "heats",
    clue: "To raise the temperature of food during cooking.",
    length: 5,
  },
  {
    word: "bowls",
    clue: "Round, deep dishes used for serving or mixing food.",
    length: 5,
  },
  {
    word: "stirs",
    clue: "To mix ingredients with a circular motion.",
    length: 5,
  },
  {
    word: "stews",
    clue: "To cook food slowly in liquid over low heat, often to tenderize meat.",
    length: 5,
  },
  {
    word: "soaks",
    clue: "To immerse food in liquid to soften or add flavor.",
    length: 5,
  },
  {
    word: "roti",
    clue: "A type of flatbread made from wholemeal flour, common in South Asia.",
    length: 4,
  },
  {
    word: "korma",
    clue: "A mild, creamy curry dish from South Asia, typically made with meat or vegetables.",
    length: 5,
  },
  {
    word: "pista",
    clue: "A type of nut (pistachio) often used in Indian desserts.",
    length: 5,
  },
  {
    word: "saunf",
    clue: "Fennel seeds used in Indian cooking for flavor and as a digestive aid.",
    length: 5,
  },
  {
    word: "lauki",
    clue: "Bottle gourd, a vegetable commonly used in Indian cooking.",
    length: 5,
  },
  {
    word: "achar",
    clue: "An Indian pickle made from vegetables or fruits and flavored with spices.",
    length: 5,
  },
  {
    word: "palak",
    clue: "Spinach, used in Indian cuisine in dishes like palak paneer.",
    length: 5,
  },
  {
    word: "halwa",
    clue: "A dense, sweet confection made from flour or nuts, flavored with spices.",
    length: 5,
  },
  {
    word: "raita",
    clue: "A yogurt-based condiment with herbs and spices, served as a side dish in Indian cuisine.",
    length: 5,
  },
  {
    word: "chana",
    clue: "Chickpeas, used in Indian cooking for dishes like chana masala.",
    length: 5,
  },
  {
    word: "bundi",
    clue: "Small balls made from chickpea flour, used in Indian sweets.",
    length: 5,
  },
  {
    word: "jeera",
    clue: "Cumin seeds, used in Indian cooking for flavoring dishes.",
    length: 5,
  },
  {
    word: "heeng",
    clue: "Asafoetida, a pungent spice used in Indian cooking to enhance flavor.",
    length: 5,
  },
  {
    word: "paneer",
    clue: "A fresh cheese common in Indian cuisine, used in dishes like palak paneer.",
    length: 6,
  },
  {
    word: "maida",
    clue: "A refined wheat flour used in Indian cooking for breads and pastries.",
    length: 5,
  },
  {
    word: "khoya",
    clue: "A dairy product made by reducing milk, used in Indian sweets.",
    length: 5,
  },
  {
    word: "nadru",
    clue: "Lotus root, used in Kashmiri cuisine.",
    length: 5,
  },
  {
    word: "besan",
    clue: "Gram flour made from ground chickpeas, used in Indian cooking.",
    length: 5,
  },
  {
    word: "tarka",
    clue: "A technique in Indian cooking where spices are fried in oil or ghee and added to a dish.",
    length: 5,
  },
  {
    word: "rajma",
    clue: "Red kidney beans, used in North Indian cuisine for curries.",
    length: 5,
  },
  {
    word: "grana",
    clue: "A type of hard Italian cheese similar to Parmesan, grated over pasta.",
    length: 5,
  },
  {
    word: "bisto",
    clue: "A brand of gravy powder used in British cooking.",
    length: 5,
  },
  {
    word: "quorn",
    clue: "A meat substitute made from mycoprotein, used by vegetarians.",
    length: 5,
  },
  {
    word: "certo",
    clue: "A brand of liquid pectin used in making jams and jellies.",
    length: 5,
  },
  {
    word: "gumbo",
    clue: "A stew from Louisiana made with meat, vegetables, and okra or filé powder.",
    length: 5,
  },
  {
    word: "diner",
    clue: "A small, informal restaurant serving classic American comfort food.",
    length: 5,
  },
  {
    word: "sweet",
    clue: "Having the taste of sugar or honey, used to describe desserts.",
    length: 5,
  },
  {
    word: "salty",
    clue: "Having the taste of salt, used to describe savory dishes.",
    length: 5,
  },
  {
    word: "fiber",
    clue: "Threadlike structure found in foods important for digestion.",
    length: 5,
  },
  {
    word: "leafy",
    clue: "Containing or covered with leaves, used to describe vegetables or salads.",
    length: 5,
  },
  {
    word: "flaky",
    clue: "Having a light, airy texture with layers, used to describe pastries.",
    length: 5,
  },
  {
    word: "pekoe",
    clue: "A grade of black tea made from young leaves, used in blends.",
    length: 5,
  },
  {
    word: "cored",
    clue: "Having the central part removed, used for fruits or vegetables.",
    length: 5,
  },
  {
    word: "kebab",
    clue: "Pieces of meat or vegetables grilled on a skewer.",
    length: 5,
  },
  {
    word: "pinto",
    clue: "A type of bean used in Mexican cuisine.",
    length: 5,
  },
  {
    word: "souse",
    clue: "To soak food in a liquid, often for marinating or pickling.",
    length: 5,
  },
  {
    word: "asados",
    clue: "A traditional dish of barbecued meats, popular in Argentina.",
    length: 6,
  },
  {
    word: "plov",
    clue: "A rice dish with meat, vegetables, and spices, often enjoyed in Azerbaijan.",
    length: 4,
  },
  {
    word: "machboos",
    clue: "A spiced rice dish with meat, often chicken or lamb, commonly served in Bahrain.",
    length: 8,
  },
  {
    word: "feijoada",
    clue: "A hearty stew of black beans and pork, considered the national dish of Brazil.",
    length: 8,
  },
  {
    word: "shopska",
    clue: "A traditional Bulgarian salad made with tomatoes, cucumbers, onions, and feta cheese.",
    length: 7,
  },
  {
    word: "poutine",
    clue: "A Canadian dish of fries topped with cheese curds and gravy.",
    length: 7,
  },
  {
    word: "curanto",
    clue: "A traditional Chilean method of cooking seafood, meat, and vegetables in a pit oven.",
    length: 7,
  },
  {
    word: "peka",
    clue: "A Croatian dish of meat and vegetables slow-cooked under a bell-like dome.",
    length: 4,
  },
  {
    word: "koupepia",
    clue: "Stuffed grape leaves with a mixture of meat and rice, a Cypriot specialty.",
    length: 8,
  },
  {
    word: "pupusa",
    clue: "A thick corn tortilla stuffed with cheese, beans, or meat, popular in El Salvador.",
    length: 6,
  },
  {
    word: "verivorst",
    clue: "A traditional Estonian blood sausage.",
    length: 9,
  },
  {
    word: "succotash",
    clue: "A dish of corn and lima beans mixed with other vegetables, popular in Equatorial Guinea.",
    length: 9,
  },
  {
    word: "kokoda",
    clue: "A Fijian dish of raw fish marinated in citrus juice and coconut milk.",
    length: 6,
  },
  {
    word: "domoda",
    clue: "A peanut stew with meat and vegetables, a Gambian favorite.",
    length: 6,
  },
  {
    word: "khachapuri",
    clue: "A Georgian cheese-filled bread, often shaped like a boat.",
    length: 10,
  },
  {
    word: "sauerbraten",
    clue: "A German pot roast, typically marinated before cooking.",
    length: 11,
  },
  {
    word: "pepperpot",
    clue: "A spicy stew made with meat, often beef, and cassareep, a traditional dish from Guyana.",
    length: 9,
  },
  {
    word: "goulash",
    clue: "A Hungarian stew or soup, made with meat and seasoned with paprika.",
    length: 7,
  },
  {
    word: "hakarl",
    clue: "A traditional Icelandic dish of fermented shark.",
    length: 6,
  },
  {
    word: "mansaf",
    clue: "A Jordanian dish of lamb cooked in a sauce of fermented dried yogurt and served with rice.",
    length: 6,
  },
  {
    word: "beshbarmak",
    clue: "A Kazakh dish of boiled meat, typically served with flat noodles and onion sauce.",
    length: 10,
  },
  {
    word: "kimchi",
    clue: "A Korean dish of fermented vegetables, often cabbage and radishes.",
    length: 6,
  },
  {
    word: "kibbeh",
    clue: "A Lebanese dish of spiced ground meat, often shaped into balls or patties.",
    length: 6,
  },
  {
    word: "romazava",
    clue: "A traditional Madagascar stew made with meat and leafy greens.",
    length: 8,
  },
  {
    word: "mole",
    clue: "A rich Mexican sauce made with chocolate and various spices, often served with meat.",
    length: 4,
  },
  {
    word: "buuz",
    clue: "A type of Mongolian steamed dumpling filled with meat.",
    length: 4,
  },
  {
    word: "barbgiuan",
    clue: "A Monegasque pastry filled with Swiss chard and ricotta.",
    length: 9,
  },
  {
    word: "stamppot",
    clue: "A Dutch dish of mashed potatoes mixed with vegetables, often served with sausage.",
    length: 9,
  },
  {
    word: "mumu",
    clue: "A traditional Papua New Guinea method of cooking food in an earth oven.",
    length: 4,
  },
  {
    word: "bacalhau",
    clue: "A Portuguese dish made with salted cod fish.",
    length: 8,
  },
  {
    word: "pelmeni",
    clue: "Russian dumplings typically filled with minced meat.",
    length: 7,
  },
  {
    word: "haggis",
    clue: "A Scottish dish made from sheep's offal mixed with oatmeal and spices, cooked in a sheep's stomach.",
    length: 6,
  },
  {
    word: "bobotie",
    clue: "A South African dish of spiced minced meat baked with an egg-based topping.",
    length: 7,
  },
  {
    word: "paella",
    clue: "A Spanish rice dish originally from Valencia, often containing seafood, meat, and vegetables.",
    length: 6,
  },
  {
    word: "matooke",
    clue: "A Ugandan dish of steamed and mashed green bananas.",
    length: 7,
  },
  {
    word: "saltah",
    clue: "A Yemeni stew made with meat, vegetables, and fenugreek, often served with bread.",
    length: 6,
  },
  {
    word: "scissors",
    clue: "A cutting instrument with two blades used for various kitchen tasks.",
    length: 8,
  },
  {
    word: "whisk",
    clue: "A utensil used to beat or stir ingredients.",
    length: 5,
  },
  {
    word: "strainer",
    clue: "A device used to separate solids from liquids.",
    length: 8,
  },
  {
    word: "timer",
    clue: "A device used to measure time intervals, especially in cooking.",
    length: 5,
  },
  {
    word: "thermometer",
    clue: "An instrument used to measure temperature, often of food.",
    length: 11,
  },
  {
    word: "mixer",
    clue: "A kitchen appliance used for mixing ingredients.",
    length: 5,
  },
  {
    word: "microwave",
    clue: "An appliance used to heat food quickly using microwave radiation.",
    length: 9,
  },
  {
    word: "corkscrew",
    clue: "A tool used to remove corks from wine bottles.",
    length: 9,
  },
  {
    word: "funnel",
    clue: "A tube used to channel liquid or powder into a small opening.",
    length: 6,
  },
  {
    word: "mallet",
    clue: "A tool with a large head used for pounding or hammering.",
    length: 6,
  },
  {
    word: "scaler",
    clue: "A tool used to remove scales from fish.",
    length: 6,
  },
  {
    word: "slicer",
    clue: "A tool used to slice food into thin pieces.",
    length: 6,
  },
  {
    word: "shears",
    clue: "A large pair of scissors used for cutting meat or poultry.",
    length: 6,
  },
  {
    word: "spinner",
    clue: "A tool used to remove excess water from washed salad greens.",
    length: 7,
  },
  {
    word: "grinder",
    clue: "A tool used to grind food into smaller pieces.",
    length: 7,
  },
  {
    word: "stuffer",
    clue: "A tool used to stuff sausages.",
    length: 7,
  },
  {
    word: "syringe",
    clue: "A tool used for icing or injecting fillings.",
    length: 7,
  },
  {
    word: "leveler",
    clue: "A tool used to level the surface of a cake.",
    length: 7,
  },
  {
    word: "wheel",
    clue: "A tool used to cut pastry dough.",
    length: 5,
  },
  {
    word: "scraper",
    clue: "A tool used to scrape dough or clean surfaces.",
    length: 7,
  },
  {
    word: "frother",
    clue: "A tool used to froth milk for coffee.",
    length: 7,
  },
  {
    word: "grill",
    clue: "A device used for cooking food over direct heat.",
    length: 5,
  },
  {
    word: "skillet",
    clue: "A frying pan used for cooking.",
    length: 7,
  },
  {
    word: "cooker",
    clue: "A device used for cooking food using pressure.",
    length: 6,
  },
  {
    word: "roaster",
    clue: "A device used for roasting food.",
    length: 7,
  },
  {
    word: "wok",
    clue: "A round-bottomed cooking pot used in Chinese cuisine.",
    length: 3,
  },
  {
    word: "plate",
    clue: "A flat dish used for serving food.",
    length: 5,
  },
  {
    word: "tandoor",
    clue: "A cylindrical clay oven used in Indian cooking.",
    length: 7,
  },
  {
    word: "aguadito",
    clue: "A Peruvian chicken soup with cilantro, vegetables, and rice.",
    length: 8,
  },
  {
    word: "ajiaco",
    clue: "A traditional Colombian soup made with chicken, potatoes, and corn.",
    length: 6,
  },
  {
    word: "açorda",
    clue: "A Portuguese bread soup often flavored with garlic and cilantro.",
    length: 6,
  },
  {
    word: "acquacotta",
    clue: "An Italian vegetable soup made with bread, traditionally from Tuscany.",
    length: 10,
  },
  {
    word: "avgolemono",
    clue: "A Greek soup made with chicken, egg, lemon, and rice.",
    length: 10,
  },
  {
    word: "bakso",
    clue: "An Indonesian meatball soup.",
    length: 5,
  },
  {
    word: "batchoy",
    clue: "A Filipino noodle soup made with pork, liver, and vegetables.",
    length: 7,
  },
  {
    word: "binakol",
    clue: "A Filipino chicken soup cooked with coconut water and meat.",
    length: 7,
  },
  {
    word: "binignit",
    clue: "A Filipino sweet soup made with coconut milk, fruits, and root vegetables.",
    length: 8,
  },
  {
    word: "borshch",
    clue: "A beet-based soup from Eastern Europe, often served with sour cream.",
    length: 7,
  },
  {
    word: "bouillabaisse",
    clue: "A traditional Provençal fish stew originating from Marseille, France.",
    length: 12,
  },
  {
    word: "bouneschlupp",
    clue: "A Luxembourgish green bean soup.",
    length: 12,
  },
  {
    word: "brenebon",
    clue: "An Indonesian red kidney bean soup.",
    length: 8,
  },
  {
    word: "buridda",
    clue: "An Italian fish soup from Liguria.",
    length: 7,
  },
  {
    word: "butajiru",
    clue: "A Japanese pork and vegetable miso soup.",
    length: 8,
  },
  {
    word: "callaloo",
    clue: "A Caribbean soup made with leafy greens, often including okra and coconut milk.",
    length: 8,
  },
  {
    word: "cazuela",
    clue: "A traditional South American soup made with meat, vegetables, and potatoes.",
    length: 7,
  },
  {
    word: "chupe",
    clue: "A South American soup or stew, typically containing seafood or chicken.",
    length: 5,
  },
  {
    word: "cioppino",
    clue: "An Italian-American fish stew originating in San Francisco.",
    length: 8,
  },
  {
    word: "consommé",
    clue: "A clear soup made from richly flavored stock or bouillon.",
    length: 9,
  },
  {
    word: "dillegrout",
    clue: "A rich medieval English dish made with milk, sugar, and almond milk.",
    length: 10,
  },
  {
    word: "fumet",
    clue: "A concentrated fish stock used in French cuisine.",
    length: 5,
  },
];

export { words };
