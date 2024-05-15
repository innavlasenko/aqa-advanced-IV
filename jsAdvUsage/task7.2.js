function addRecursion(num) {
    console.log(num);
    if (num <= 0) {
        return;
    }
    else {
        addRecursion(num - 1);
    }
}

addRecursion(5);