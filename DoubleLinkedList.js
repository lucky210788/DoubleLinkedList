class ListElement {
    constructor() {
        this.value = null;
        this.prev = null;
        this.next = null;
    }

    setValue(value) {
        this.value = value;
    }

    getPrev() {
        return this.prev;
    }

    getNext() {
        return this.next;
    }

    setPrev(element) {
        this.prev = element
    }

    setNext(element) {
        this.next = element
    }

    cut(){
        if (this.getPrev()) {
            this.prev.setNext(this.getNext());
        }

        if (this.getNext()) {
            this.next.setPrev(this.getPrev());
        }

        this.setValue(null);
        this.setNext(null);
        this.setPrev(null);
    }

    swap(element){
        if(this.getPrev()){
            this.prev.setNext(element);
        }

        if(this.getNext()){
            this.next.setPrev(element);
        }

        if(element.getPrev()){
            element.prev.setNext(this);
        }

        if(element.getNext()){
            element.next.setPrev(this);
        }

        let tempPrev = this.getPrev();
        let tempNext = this.getNext();

        this.setPrev(element.getPrev());
        this.setNext(element.getNext());
        element.setPrev(tempPrev);
        element.setNext(tempNext);
    }
}

let element1 = new ListElement();
let element2 = new ListElement();
let element3 = new ListElement();
let element4 = new ListElement();
let element5 = new ListElement();

element1.setNext(element2);
element2.setNext(element3);
element3.setNext(element4);
element4.setNext(element5);
element5.setNext(null);

element1.setPrev(null);
element2.setPrev(element1);
element3.setPrev(element2);
element4.setPrev(element3);
element5.setPrev(element4);

element1.setValue(1);
element2.setValue(2);
element3.setValue(3);
element4.setValue(4);
element5.setValue(5);