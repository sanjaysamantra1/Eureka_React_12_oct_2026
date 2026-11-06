
export default function FruitList() {
    const fruitArr = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
    return <>
        <h3>Fruit List::</h3>
        <ul>
            {fruitArr.map((fruit, ind) => {
                return <li key={ind}>{fruit}</li>
            })}
        </ul>
    </>
}
