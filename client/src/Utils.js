export const fahrenheitToCelsius = (f) => {
    if (f === 0)
        return f;
    console.log(f + ' -> ' + (f - 32) * .5556)
    return (5/9) * (f-32);
}

export const KelvinToCelsius = (k) => {
    if (k === 0)
        return k;
    return k - 273;
}