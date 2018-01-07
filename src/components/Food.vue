<template>
  <div>
    <h1>
      What's for Lunch<img src="static/img/icons/android-chrome-512x512.png" alt="A chef's knife" class="logo">
    </h1>
    <select @change="updateSelectedLocation">
      <option v-for="location in locations">{{ location }}</option>
    </select>
    All locations relative to Monument Circle.
    <ol>
      <li v-for="food in randFoods">
          <a :href="'https://www.google.com/maps/place/Indianapolis,+IN+46204+' + food.name.replace(/ /g, '+')" target="_blank">{{ food.name }}</a>
          <span class="location">{{ food.location }}</span>
      </li>
    </ol>
    <button class="button-ter" @click="buildList">These all suck</button>
    Showing <input type="number" min="1" :max="cap" v-model="amount" @change="fillOutList"> out of {{ cap }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'food',
    data () {
        return {
            randFoods: [],
            locations: [],
            selectedLocation: '',
            amount: 5,
            cap: 0,
            foods: []
        };
    },
    methods: {
        randFood: function () {
            return Math.round(Math.random() * this.foods.length);
        },
        addRandom: function () {
            var randomNumber = this.randFood();
            var randomFood = this.foods[randomNumber];
            this.randFoods.push(randomFood);
        },
        removeNonLocations: function () {
            if (this.selectedLocation) {
                var newRandFoods = [];
                for (var i = 0; i < this.randFoods.length; i++) {
                    if (this.randFoods[i].location === this.selectedLocation) {
                        newRandFoods.push(this.randFoods[i]);
                    }
                }
                this.randFoods = newRandFoods;
            }
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
            if (amount > this.cap) {
                amount = this.cap;
            } else if (amount < 1) {
                amount = 1;
            }
            return amount;
        },
        setCapValue: function () {
            this.cap = this.foods.length;
            if (this.selectedLocation) {
                this.cap = this.foods.filter(function (food) {
                    return food.location === this.selectedLocation;
                }.bind(this)).length;
            }
            this.amount = this.clampAmount(this.amount);
        },
        fillOutList: function (evt) {
            var newLength = evt.target.value;
            if (this.randFoods.length > newLength) {
                this.randFoods = this.randFoods.slice(0, newLength);
            } else {
                this.setCapValue();
                while (this.randFoods.length < this.amount) {
                    this.addRandom();
                    this.removeDupes();
                    this.removeNonLocations();
                }
            }
        },
        buildList: function () {
            this.randFoods = [];
            this.setCapValue();
            while (this.randFoods.length < this.amount) {
                this.addRandom();
                this.removeDupes();
                this.removeNonLocations();
            }
        },
        buildListOfLocations: function () {
            this.locations = [ 'Show All' ];
            var locationsObj = {};
            for (var i = 0; i < this.foods.length; i++) {
                var location = this.foods[i].location;
                locationsObj[location] = 1;
            }
            for (var key in locationsObj) {
                this.locations.push(key);
            }
        },
        updateSelectedLocation: function (evt) {
            var location = evt.target.value;
            if (location === 'Show All') {
                location = '';
            }
            this.selectedLocation = location;

            this.setCapValue();
            this.buildList();
        },
        getFoodData: function () {
            axios
                .get('../../static/data/foods.json')
                .then((response) => {
                    this.foods = response.data;
                    this.buildListOfLocations();
                    this.buildList();
                });
        }
    },
    mounted: function () {
        this.getFoodData();
    }
};
</script>

<style lang="sass">
h1
    text-align: center

li
    line-height: 1.84
    vertical-align: middle

button
    background: #EBD6FF
    border: 2px solid #BBABC9
    border-radius: 0px
    color: #2B2B2B
    padding: 10px 20px
    font-size: 1em
    font-weight: bold

input
    width: 40px
    text-align: center

a
    color: #A61ECC
    text-decoration: none

.logo
    max-width: 34px
    margin: 0px 0px 0px 3px
    vertical-align: -3px

.location
    background: #EEE
    border: 1px solid #DDD
    border-radius: 3px
    margin: 0px 0px 0px 5px
    padding: 1px 2px
    color: #666
    font-size: 0.8em
    line-height: 1.4
    vertical-align: middle
</style>
