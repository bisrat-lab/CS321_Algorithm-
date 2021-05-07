class Node {
    constructor(data,left,right,show){
        this.data = data;
        this.left = left;
        this.rigth = right;
        this.count = 1;
        this.show = show;
    }
   show(){
        return this.data;
    }
} 
class BinarySearchTree{
      constructor() {
          this.root = null;
          
      } 
      insert(data){
         
          let newNode = new Node(data,null,null);
          if(this.root === null){
              this.root = newNode;
           
          }else{
            var current = this.root;
            var parent;
              while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current ==null){
                        parent.left = newNode;
                        break;
                    }
                }else{
                    current = current.rigth;
                    if(current == null){
                        parent.rigth = newNode;
                        break;
                    }
                }
              }
          }
      }
      inOrder(node){
          if(!(node ==null)){
              this.inOrder(node.left);
              console.log(node.show() + " ")
              this.inOrder(node.rigth)
          }
      }
    }

//  10
// 5   13
//2 7 11 16

var tree= new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.rigth = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.rigth = new Node(9);
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
//console.log(tree);
tree.inOrder(tree.root)
