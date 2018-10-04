class _Node {
    constructor(value, next) {
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
    constructor() {
            this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }   	
        insertLast(item){
            if(this.head === null){
                this.insertFirst(item);
            }
            else{
                let tempNode = this.head;
                while(tempNode.next !== null){
                    tempNode = tempNode.next;
                }
                tempNode.next = new _Node(item, null);
            }
    }
    find(item) {
          let currNode = this.head;
          if (!this.head){
              return null;
          }
          while(currNode.value !== item) {
              if (currNode.next === null) {
                  return null;
              }
              else {
                  currNode = currNode.next;
              }
          }
          return currNode;
      }
	   remove(item){ 
        if (!this.head){
            return null;
        }
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }}




	insertBefore(item, dest){
		let currNode = this.head;
		let prevNode = this.head;
		if(!this.head){return null;}//empty
		while(currNode !== null && currNode.value !== dest){//traversal, first condition is termination, second is locating
				prevNode = currNode;
				currNode = currNode.next;
		}
		prevNode.next = new _Node(item,currNode);
	}



	insertAfter(item,dest){
                  let currNode = this.head;
                  let nextNode = this.head;
                  if(!this.head){return null;}//empty
               while(currNode !== null && currNode.value !== dest){//traversal, first condition is termination, second is locating
                                  currNode = nextNode;
                                  nextNode = nextNode.next;
                  }
                 currNode.next = new _Node(item,nextNode);	
	}


	insertAt(item, pos){
	
          let currNode = this.head;
	  let prevNode = this.head;
	  let nodeCount = 1;
          if (!this.head){
              return null;
          }
          while(nodeCount !== pos) {
              if (currNode.next === null) {
                  return null;
              }
              else {
	      	  prevNode = currNode;
                  currNode = currNode.next;
		  nodeCount ++;
              }
          }
          //found it
          prevNode.next = new _Node(item,currNode);	
	}


	thirdFromTheEnd(){
		let currNode = this.head.next;
		let prevNode = this.head;
		let goalNode = null;
	while(currNode.next !== null){
		goalNode = prevNode;
		prevNode = currNode;
		currNode = currNode.next;
	}
	return goalNode;

	}

	middle(){
		let currNode = this.head;
		let lastNode = this.head.next;

		while(lastNode !== null && lastNode.next !== null){
			currNode = currNode.next;
			lastNode = lastNode.next.next;
		}
		if(lastNode){
		console.log('first middle:\n' + currNode.value);
		console.log('second middle:\n' + currNode.next.value);
		}
		else{console.log('middle node:\n' + currNode.value);}
			
	}

	reverse(){
		let prevNode = null;
		let currNode = this.head;
		let nextNode = null;

		while(currNode){
			nextNode = currNode.next;
			currNode.next = prevNode;
			prevNode = currNode;
			currNode = nextNode;
		}
		this.head = prevNode;
	
	}

}
	function display(list){
		let currNode = list.head;
		let nodeCount = 3;
		while(currNode !== null){
		if(nodeCount % 3 === 0){console.log(currNode);}
		currNode = currNode.next;
		nodeCount ++;
		}
	}
	function size(list){
		let currNode = list.head;
		let nodeCount = 0;
		while(currNode !== null){
			currNode = currNode.next;
			nodeCount++;
		}
		console.log('Node Count: ' + nodeCount);
		return nodeCount;
	}
	function isEmpty(list){
		if(list.head === null){return true;}
		return false;
	}
	function findPrevious(list, dest){
			let currNode = list.head;
		let prevNode = list.head;
		if(!list.head){return null;}//empty
		while(currNode !== null && currNode.value !== dest){//traversal, first condition is termination, second is locating
				prevNode = currNode;
				currNode = currNode.next;
		}
		return prevNode;
	}
	function findLast(list){
		let currNode = list.head;
		let prevNode = list.head;
		if(list.head === null){return;}
		while(currNode !== null){
			prevNode = currNode;
			currNode = currNode.next;
		}
		return prevNode;
	
	}


let SLL = new LinkedList();
let SLLEmpty = new LinkedList();

SLL.insertFirst('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertBefore('Athena','Boomer');
SLL.insertAfter('Hotdog','Helo');
SLL.insertAt('Kat',3);
display(SLL);
size(SLL);
console.log('\n\nempty check (SLL, empty SLL): ');
console.log(isEmpty(SLL));
console.log(isEmpty(SLLEmpty));
console.log('\n\nPrev. node check on Helo: ');
console.log(findPrevious(SLL, 'Helo'));
console.log('\n\nFind last check: ');
console.log(findLast(SLL));
// mystery function answer: gets rid of duplicates

SLL.reverse();
console.log('\n\n////REVERSED////');
display(SLL);
SLL.reverse();
console.log('\n\n Third from the end (expected:Hotdog ): ');
console.log(SLL.thirdFromTheEnd());

console.log('\n\n Middle with Even:');
SLL.middle();

console.log('\n\n Middle with Odd:');
SLL.insertLast('Lucky Joey');
SLL.middle();
SLL.remove('Lucky Joey');


