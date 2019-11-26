class Order {

    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.price = price;
        this.city = city;
        this.type = type;
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
        // if(this.type === 'Buy' || this.type === 'Sale') return true;
        // return false;
        if(this.type === 'Buy') return true;
        if(this.type === 'Sale') return false;
    }
};

export { Order };
