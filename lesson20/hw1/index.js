class Order {

    constructor(price, dateCreated, isConfirmed, dateConfirmed, city, type) {
        this.price = price;
        this.dateCreated = dateCreated;
        this.isConfirmed = isConfirmed;
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
