// Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift() /* шифт извлекает первый элемент массива */
        if(!graph[current]) { /*! - инвертирует логическое выражение, если true, то это false */
            graph[current] = []
        }
        if(graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]] /*... - это spread принимает 
                               объект и расширяет его на отдельные элементы*/
            
        }
    }
}

console.log(breadthSearch(graph, 'a', 'g'))