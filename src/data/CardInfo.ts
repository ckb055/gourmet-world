export class CardInfo {
    id : number | undefined;
    imageURL : string = '';
    foodName : string = '';
    foodDescription : string = '';
    foodOriginalPrice : number | undefined;
    foodMarketPrice : number | undefined;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.imageURL) this.imageURL = initializer.imageURL;
        if (initializer.foodName) this.foodName = initializer.foodName;
        if (initializer.foodDescription) this.foodDescription = initializer.foodDescription;
        if (initializer.foodOriginalPrice) this.foodOriginalPrice = initializer.foodOriginalPrice;
        if (initializer.foodMarketPrice) this.foodMarketPrice = initializer.foodMarketPrice;
    }
}