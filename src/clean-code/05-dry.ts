type Size = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady(): boolean {
        for (const key in this) {
            switch(typeof(this[key])){
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                break;

                case 'number':
                    if ( (<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`)
                break;
                default:
                    throw Error(`${typeof this[key]} is not supported`)
            }
        }
        return true
    }

    toString() {
        // Sense aplicar el principi DRY
        /* if (this.name.length <= 0 ) throw Error ('Name is empty')
        if (this.price <= 0 ) throw Error ('Prize is zero')
        if (this.size.length <= 0) throw Error ('Sie is empty') */

        // Apliquem principi DRY

        if (!this.isProductReady()) return
        return `${this.name} (${ this.price}), ${ this.size}`
    }
}

(()=> {
    const bluePants = new Product('Pantalons blaus', 45, 'S')
    console.log(bluePants.toString())
})();