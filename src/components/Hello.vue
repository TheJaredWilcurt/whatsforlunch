<template>
  <div>
    <h1>What's for Lunch</h1>
    <ol>
      <li v-for="food in randFoods">
          <a :href="'https://www.google.com/maps/place/Indianapolis,+IN+46204+' + food.name.replace(/ /g, '+')" target="_blank">{{ food.name }}</a>
          <span class="location">{{ food.location }}</span>
      </li>
    </ol>
    <button class="button-ter" @click="buildList">These all suck</button>
    Showing <input type="number" min="1" :max="foods.length" v-model="amount"> out of {{ foods.length }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      randFoods: [],
      amount: 5,
      foods: [
        { location: "In the tower",    name: "Yolk"                       },
        { location: "In the tower",    name: "Temaki"                     },
        { location: "In the tower",    name: "Fast Burrito"               },
        { location: "In the tower",    name: "Subway"                     },
        { location: "North (Library)", name: "Axium Ethiopeon"            },
        { location: "North (Library)", name: "Oso's Dominican"            },
        { location: "North (Library)", name: "The Taco Shop"              },
        { location: "North (Library)", name: "Ollie's"                    },
        { location: "North (Library)", name: "Datsa Pizza"                },
        { location: "On the Circle",   name: "Au Bon Pain"                },
        { location: "On the Circle",   name: "Soupremacy"                 },
        { location: "On the Circle",   name: "Pot Belly's"                },
        { location: "On the Circle",   name: "South Bend Choc"            },
        { location: "On the Circle",   name: "Georgio's Pizza"            },
        { location: "Near the Circle", name: "Dicks BBQ"                  },
        { location: "Near the Circle", name: "Q'Doba"                     },
        { location: "Near the Circle", name: "The Boiling"                },
        { location: "Near the Circle", name: "Chipotle"                   },
        { location: "Near the Circle", name: "Jimmy Johns"                },
        { location: "Near the Circle", name: "Green Leaf Juicing"         },
        { location: "Mass Ave (Near)", name: "Bazbeaux's"                 },
        { location: "Mass Ave (Near)", name: "The Eagle"                  },
        { location: "Mass Ave (Near)", name: "Bakersfield"                },
        { location: "Mass Ave (Near)", name: "The Garden Table"           },
        { location: "Mass Ave (Near)", name: "Fresco Italian Sandwich"    },
        { location: "Mass Ave (Near)", name: "Bru Burger"                 },
        { location: "Mass Ave (Near)", name: "The Rathskeller"            },
        { location: "Mass Ave (Near)", name: "Hoaglin"                    },
        { location: "Mass Ave (Mid)",  name: "Fat Dans"                   },
        { location: "Mass Ave (Mid)",  name: "Goodfellas Pizza"           },
        { location: "Mass Ave (Mid)",  name: "Nine Irish Brothers"        },
        { location: "Mass Ave (Mid)",  name: "Stella"                     },
        { location: "Mass Ave (Mid)",  name: "Ralstons"                   },
        { location: "Mass Ave (Mid)",  name: "Mesh"                       },
        { location: "Mass Ave (far)",  name: "Yats"                       },
        { location: "Mass Ave (far)",  name: "Black Market"               },
        { location: "Mass Ave (far)",  name: "Mimi Blue Meatballs"        },
        { location: "Mass Ave (far)",  name: "Natural Born Juicers"       },
        { location: "Mass Ave (far)",  name: "Lockerbie Pub"              },
        { location: "Mass Ave (far)",  name: "Forty Five Degrees"         },
        { location: "Mass Ave (far)",  name: "Thaitanium"                 },
        { location: "Mass Ave (far)",  name: "Mass Ave Pub"               },
        { location: "The Mall",        name: "Philly Cheese Steak"        },
        { location: "The Mall",        name: "Cajun style Chinese"        },
        { location: "The Mall",        name: "Chinese style Chinese"      },
        { location: "The Mall",        name: "Japanese style Chinese"     },
        { location: "The Mall",        name: "Taco Bell"                  },
        { location: "The Mall",        name: "P.F.Changs"                 },
        { location: "The Mall",        name: "A & W"                      },
        { location: "The Mall",        name: "Chic Fil A"                 },
        { location: "The Mall",        name: "Champs"                     },
        { location: "The Mall",        name: "Lite on the mayo"           },
        { location: "South",           name: "Napolese Pizza"             },
        { location: "South",           name: "Hard Rock"                  },
        { location: "South",           name: "Nada (Fancy Mexican)"       },
        { location: "South",           name: "Palomino"                   },
        { location: "South",           name: "Primanti (burgers)"         },
        { location: "South",           name: "Steak n Shake"              },
        { location: "South",           name: "Noodle's n Company"         },
        { location: "South East",      name: "Pie Five"                   },
        { location: "South East",      name: "Pita Pit"                   },
        { location: "South East",      name: "Fogo De Chao"               },
        { location: "East",            name: "Stars Sandwich"             },
        { location: "East",            name: "India Garden"               },
        { location: "East",            name: "Bangkok"                    },
        { location: "East",            name: "Maxine's Chicken & Waffles" },
        { location: "East",            name: "King David's Dogs"          },
        { location: "City Market",     name: "Tamale Place"               },
        { location: "City Market",     name: "3 carrots"                  },
        { location: "City Market",     name: "Greek"                      },
        { location: "City Market",     name: "Mexican"                    },
        { location: "City Market",     name: "Pizza"                      },
        { location: "City Market",     name: "SpiceBox"                   },
        { location: "City Market",     name: "Cheese Steak"               },
        { location: "City Market",     name: "Soup"                       },
        { location: "West",            name: "Ali Baba's"                 },
        { location: "West",            name: "McCormick's Steak"          },
        { location: "West",            name: "Thai Paradise"              },
        { location: "West",            name: "Georgiano's Tomato Pools"   },
        { location: "West",            name: "Bucca Di Beppo's"           },
        { location: "West",            name: "Weber Grill"                }
      ]
    }
  },
  methods: {
    randFood: function () {
      return Math.round(Math.random() * this.foods.length);
    },
    addRandom: function () {
      this.randFoods.push(this.foods[this.randFood()]);
    },
    removeDupes: function () {
      var container = {};
      for (var i = 0; i < this.randFoods.length; i++) {
        if (this.randFoods[i] && this.randFoods[i]['name']) {
          container[this.randFoods[i]['name']] = this.randFoods[i];
        }
      }
      this.randFoods = [];
      for (var key in container) {
        this.randFoods.push(container[key]);
      }
    },
    clampAmount: function (amount) {
      if (amount > this.foods.length) {
        amount = this.foods.length;
      } else if (amount < 1) {
        amount = 1;
      }
      return amount;
    },
    buildList: function () {
      this.randFoods = [];
      this.amount = this.clampAmount(this.amount);
      while (this.randFoods.length < this.amount) {
        this.addRandom();
        this.removeDupes();
      }
    }
  },
  created: function () {
    this.buildList();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
    font-family: sans-serif;
}

li {
    line-height: 1.84;
    vertical-align: middle;
}

.location {
    background: #EEE;
    border: 1px solid #DDD;
    border-radius: 3px;
    margin: 0px 0px 0px 5px;
    padding: 1px 2px;
    color: #666;
    font-size: 0.8em;
    line-height: 1.4;
    vertical-align: middle;
}

h1 {
    font-family: Tahoma, sans-serif;
}

button {
    background: #EEE;
    border: 2px solid #BBB;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: bold;
}

input {
    width: 40px;
}

a {
    text-decoration: none;
}
</style>
