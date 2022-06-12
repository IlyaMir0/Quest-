const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]
const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum+= node.v /*В рекурсивной функции всегда должен быть 
        случай выхода из этой рекурсии */
        if(!node.c){
            return node.v
        }
        sum+=recursive(node.c)
    })
    return sum
}
const iteration = (tree) => {
    /*Реализация с помощью итерративного подхода
    Также как уже говорилось, ! означает обратное, тоесть если нету длины, то возвращаем ноль*/
    if (!tree.length) {
        return 0
    }
    let sum = 0 
    let stack = []
    tree.forEach(node => stack.push(node));
    while (stack.length){
        const node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum  
}
console.log(recursive(tree))