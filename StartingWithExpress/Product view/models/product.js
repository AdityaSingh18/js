const products = [];


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p,(err,filecontent)=>{
          console.log(filecontent)  
        })
    }

    

    static fetchAll() {
        return products;
    }
}