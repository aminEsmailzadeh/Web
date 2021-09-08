
export const itemsA= [1,2,3,4,5,6,7,8,9,10];

export default class task{

    constructor(name,user)
    {
        this.name= name;
        this.user= user;
    }

}
export const personAssets={
    name:'alex',
    cars:['ferrari','lambo'],
    toString: function(){
        const that = this;
        this.cars.forEach(car => {
            console.log(`${that.name} has ${car} `);
        });
   }
}


