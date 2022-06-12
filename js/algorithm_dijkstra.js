/*Данный алгоритм учитывает длину пути, в отличие от поиска в ширину */
const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {} /*Хранит кратчайшие пути*/
    const processed = [] /*Хранит те углы, которые мы уже проверили */
    let neighbours = [] /*Хранит соседние пути рассматриваемого узла*/
    Object.keys(graph).forEach(node => { /*Метод Object.keys 
        возвращает массив строковых элементов, 
        соответствующих именам перечисляемых свойств, 
        найденных непосредственно в самом объекте.
        Порядок свойств такой же, как и при ручном перечислении 
        свойств в объекте через цикл.*/
        if (node !== start) {/*Если текущая ширина не равна стартовой*/
            let value = graph[start][node]
            costs[node] = value || 10000000 /*Если из точки есть путь 
            добавляем value, если нет, то добавляем 
            бесконечно большое значение */
        }
    })
    let node = findNodeLowestCost(costs, processed)/*Функция для поиска минимальной стоимости всех путей*/
    while (node) {
        const cost = costs[node]
        neighbours = graph[node]
        Object.keys(neighbours).forEach(neighbour => {
            let newCost = cost + neighbours[neighbour]
            if (newCost < costs[neighbour]) {
                costs[neighbour] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}
function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));