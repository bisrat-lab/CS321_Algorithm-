const HashMap = require("./HashMap");
let table = new HashMap.HashMap();
const DLL = require("../../W2D3_List/DLinkedList")
let doubleLinkedList = new DLL.DLinkedList();


function removeDup(list){
    let current = list.first();
    let elem = current.element();
    let table2 = new HashMap.HashMap();
        while(current != list.last()){
            elem = current.element()
            if(!table2.contains(elem)){
               table2.put(elem,null)
            }
            current = list.after(current)
    }
    return table2.keys();
}
function removieDuplicate(list){
    let iteretor = list.elements();
    let map = new HashMap.HashMap();
    while(iteretor.hasNext()){
        let ob = iteretor.nextObject();
         if(!map.contains(ob))
         map.put(ob,ob);
    }
    return map.keys()
}

doubleLinkedList.insertLast(44);
doubleLinkedList.insertLast(11);
doubleLinkedList.insertLast(22);
doubleLinkedList.insertLast(22);
doubleLinkedList.insertLast(66);
doubleLinkedList.insertLast(44);

   
console.log(removieDuplicate(doubleLinkedList).print())

function checkForSum(list,z){
    let iteretor = list.elements();
    let map = new HashMap.HashMap();
    while(iteretor.hasNext()){
        let ob = iteretor.nextObject();
         if(map.contains(z-ob)){
             return true;
         }else{
             map.put(ob,ob)
         }
            
    }
    return false;
}

let newList = removieDuplicate(doubleLinkedList);
newList.print();
console.log(checkForSum(newList,33));
console.log(checkForSum(newList,11));


// table.put(309,"FPP");
// table.put(309,"FPP2");
// table.put(401,"CSS")
// table.put(435,"HTML")
// table.put(350,"Java")

// console.log(table.get(309))
// console.log(table.remove(435))

// table.print();