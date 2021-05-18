const DLL = require("./DLinkedList")
let doubleLinkedList = new DLL.DLinkedList();

function sum(list){
    let current = list.first();
    let total = 0;
    while(current != list.last()){
        let elem = current.element();
        total+= elem;
        current = list.after(current)
    }
    return total + list.last().element();
}

function findkth(list,k){
    let current = list.first();
    let elem = current.element();
    let count=0;
  
    while(current != list.last()){ 
        if(count == k){
           return current.element();
        }  
            count++;
            current = list.after(current)       
    }
    return elem;
}

function removeMiddle(list){
    let current = list.first();
    //let midElem = current.element();
    let midElem = list.first();
    //console.log(midElem)
    let length = 0;
    while(current != list.last()){
        length++;
        if(length % 2 == 0){
            midElem = list.after(midElem);   
        }
        current = list.after(current) 
    }
    if(length % 2 == 1){
        midElem = list.after(midElem);
    }
    console.log(length)
    list.remove(midElem);
    //return midElem.element();
    return list.print();
}
// function removeDup(list){
//     let current = list.first();
//     let elem = current.element();
//     let newList = new list();
//     while(current != list.last){
//          if()
//     }
// }
function secondSmall(list){
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    let current = list.first();
    
    //console.log(elem)
    while(current != list.last()){
        let elem = current.element();
        if(elem < first){
            second = first;
            first = elem
        }else if(elem < second){
            second = elem
        }
        current = list.after(current)
    }
    return second;
}
doubleLinkedList.insertLast(44);
doubleLinkedList.insertLast(11);
doubleLinkedList.insertLast(22);
doubleLinkedList.insertLast(66);
doubleLinkedList.insertLast(44);
doubleLinkedList.insertLast(64);
doubleLinkedList.insertLast(74);



// console.log(sum(doubleLinkedList))
// console.log(findkth(doubleLinkedList,4))
removeMiddle(doubleLinkedList)
console.log(secondSmall(doubleLinkedList))

