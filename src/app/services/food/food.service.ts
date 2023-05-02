import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food =>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'SlowFood',count:2},
      {name:'Pizza',count:1},
      {name:'Fries',count:1},
      {name:'Spicy',count:1},
      {name:'Italian',count:2},
      {name:'Asian',count:3},
      {name:'dinner',count:4},
      {name:'Egg',count:2},
      {name:'chicken',count:1},
      {name:'Lunch',count:1},
      {name:'Sidedish',count:1},
      {name:'ShortMeal',count:1},
      {name:'vegetarian',count:1},
      {name:'vegan',count:1},
    ];
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag =="All"?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return[
      {
        id:1,
        name:'Pepperoni Pizza',
        cookTime:'10-20',
        price: 10,
        favorite:false,
        origins:['Italy'],
        stars:4.5,
        imageUrl:'/assets/images/food/food-1.jpg',
        tags:['FastFood','Pizza','Lunch','Dinner'],
      },
      {
        id:2,
        name:' French Fries',
        cookTime:'5-15',
        price: 3,
        favorite:true,
        origins:['France','Belgium'],
        stars:3,
        imageUrl:'/assets/images/food/food-2.jpg',
        tags:['FastFood','Fries','ShortMeal','Sidedish'],
      },
      {
        id:3,
        name:' Spicy Pasta ',
        cookTime:'20-30',
        price: 6,
        favorite:false,
        origins:['Italy'],
        stars:4,
        imageUrl:'/assets/images/food/food-3.jpg',
        tags:['FastFood','Spicy','Italian','dinner'],
      },
      {
        id:4,
        name:' Mushroom Noodles ',
        cookTime:'15-25',
        price: 5,
        favorite:false,
        origins:['Singapore','China'],
        stars:3.5,
        imageUrl:'/assets/images/food/food-4.jpg',
        tags:['SlowFood','vegetarian','vegan','Asian','dinner'],
      },
      {
        id:5,
        name:' Spaghetti Pasta ',
        cookTime:'20-25',
        price: 8,
        favorite:false,
        origins:['Italy'],
        stars:4,
        imageUrl:'/assets/images/food/food-5.jpg',
        tags:['FastFood','Egg','Italian','Asian','dinner'],
      },
      {
        id:6,
        name:'Special Japanese Ramen',
        cookTime:'20-30',
        price: 10,
        favorite:false,
        origins:['Japan'],
        stars:4,
        imageUrl:'/assets/images/food/food-6.jpg',
        tags:['SlowFood','Egg','chicken','Asian','dinner'],
      }
      
    ]
  }

}
