const BT = require("./BinaryTree")
const DLL = require("../../W2D3_List/DLinkedList")
let doubleLinkedList = new DLL.DLinkedList();
let bs = new BT.BinaryTree();

// function sum(T){
//     return sumHelper(T,T.root());
// }
// function sumHelper(T,r){
//     if(T.isExternal(r))
//         return 0;
//     let left = r._left;
//     console.log(left)
//     let right = r._right;
//     return sumHelper(T,left) + sumHelper(T,right) + r.element();
// }
let root = bs.insertRoot(10);
let node1 = bs.insertLeft(root,5);
bs.insertRight(root,8);

bs.insertLeft(node1,3);
bs.insertRight(node1,6)


// let current = bs.leftChild(node1)

// console.log(current.element())

function minium(tree){
    if(tree.root()==null){
        return undefined;
    }
    let current = tree.root();
    let last = current;
   

    while(current != null){
        last = current;
        current = tree.leftChild(current);
    }
    return last.element();
}
 console.log(minium(bs))
//bs.findMin()
// let x = bs.findMax(bs)
// console.log(x)
function inOrder(T){
    return inOrderHelper(T,T.root())
}
function inOrderHelper(T, v){
    let visited = []
   if(T.isInternal(v)){
    inOrderHelper(T,T.leftChild(v))
       doubleLinkedList.insertLast(v)
       visited.push(v.element())
   }
   if(T.isInternal(v)){
    inOrderHelper(T,T.rightChild(v))
   }
   return visited;
}

// inOrder() {
//     let visited = [],
//         current = this.root;
  
//     let traverse = node => {
//       if (node.left) traverse(node.left);
//       visited.push(node.val);
//       if (node.right) traverse(node.right);
//     };
  
//     traverse(current);
//     return visited;
//   }
  
  //console.log(tree.inOrder()); // [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]
inOrder(bs)
  console.log(doubleLinkedList.print())
  console.log(inOrder(bs))