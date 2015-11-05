var bucketSort = function (arr, arrLength) {
    this.tempArr = arr;
    this.buckets = [];
    this.bucketsLenght = Math.ceil(arr.length / arrLength);
    var i = 0,
        j = 0;
    //Max element in array
    var max = Math.max.apply(null, this.tempArr);
    //Arrays of buckets
    for (; i < this.bucketsLenght - 1; i++) {
        this.buckets.push([]);
    }
    //Separation one array to buckets
    for (i = 0; i < this.tempArr.length; i++) {
        j = choseArrayIndexToPush(this.tempArr[i]);
        this.buckets[j].push(this.tempArr[i]);
    }
    //Sort bucket arrays
    for (i = 0; i < this.buckets.length; i++) {
        if(this.buckets[i].length){
            this.buckets[i] = selectionSort(this.buckets[i]);
        }
    }
    //Push arrays to one
    this.tempArr.length = 0;
    for (i = 0; i < this.buckets.length; i++) {
      this.tempArr = this.tempArr.concat(this.buckets[i]);
    }
    return this.tempArr;
};
function choseArrayIndexToPush(elem) {
    var max = 81,
        step = 4,
        elementsInArr = 0;
    elementsInArr = Math.ceil(max / step);
    this.elem = Math.floor(elem / elementsInArr);
    return this.elem;
}

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
var arrForSort = [5, 2, 6, 7, 4, 8, 90, 33, 22, 31, 21, 3, 112];
console.log("Array before sort: " + arrForSort);
var arrForSortLength = 2;
var arrAfterSort = bucketSort(arrForSort, arrForSortLength);
console.log("Array after sort: " + arrAfterSort);
