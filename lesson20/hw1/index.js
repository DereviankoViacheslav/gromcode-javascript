class Order {

    constructor(price, city, type) {
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = dateConfirmed;
        this.city = city;
        this.type = type;
        this.id = `${Math.random()}`;
    }

    checkPrice() {
        if(this.price < 1000) return false;
        return true;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        if(this.type === 'Buy' || this.type === 'Sale') return true;
        return false;
    }
};

export { Order };
