export const priceAleatorio = () => {
    let random = Math.random();
    random = random * 50 + 1;
    random = Math.trunc(random);
    return random;
}