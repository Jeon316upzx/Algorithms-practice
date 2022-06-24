// Building an array

class MyArray {
    constructor (){
        this.length = 0;
        this.data = {};
    }
    

    get(index){
        if(index > this.length - 1){
            return 'index out of bounds'
        }
       this.data[index];
    }

    push(value){
        this.data[this.length] = value;
        this.length ++;
        return this.length;
    }

    pop(){
        let deletedItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length --;
        return deletedItem;
    }

    delete(index){
        let deletedItem = this.data[index];
        if(index > this.length - 1){
            return 'index out of bounds'
        }
        delete this.data[index];
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }

        return deletedItem;
    }

}

const array1 = new MyArray()
console.log(array1)
console.log(array1.push("hello"))
console.log(array1.push("hi"))
console.log(array1.push("3i"))
console.log(array1.push("4i"))
console.log(array1.push("5i"))
console.log(array1)
console.log(array1.pop())
console.log(array1)
console.log(array1.delete(0))
console.log(array1)
