function powerFuncrec(num, power) {
    if (power == 0) {
        return 1
    } else {
        return powerFuncrec(num, power - 1) * num

    }
}

console.log(powerFuncrec(3, 3))