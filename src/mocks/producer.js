import green from '../../assets/produtores/green.png';
import grow from '../../assets/produtores/grow.png';
import jennyJack from '../../assets/produtores/jennyJack.png';
import potager from '../../assets/produtores/potager.png';
import salad from '../../assets/produtores/salad.png';

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const producer = {
    title: "Producers",
    list: [
        {
            name: "Green",
            img: green,
            distance: `${randomNumber(1, 500)}m`,
            rating: randomNumber(1,5),
        },
        {
            name: "Grow",
            img: grow,
            distance: `${randomNumber(1, 500)}m`,
            rating: randomNumber(1,5),
        },
        {
            name: "Jenny Jacker",
            img: jennyJack,
            distance: `${randomNumber(1, 500)}m`,
            rating: randomNumber(1,5),
        },
        {
            name: "Potager",
            img: potager,
            distance: `${randomNumber(1, 500)}m`,
            rating: randomNumber(1,5),
        },
        {
            name: "Salad",
            img: salad,
            distance: `${randomNumber(1, 500)}m`,
            rating: randomNumber(1,5),
        },
    ]
}
export default producer;