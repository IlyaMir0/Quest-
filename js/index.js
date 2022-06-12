let rowData = [
    {
        name: 'asdasdas',
        id: 7
    },
    {
        name: 'AAAAAdfasdasd',
        id: 1
    },
    {
        name: 'sdadasdasasd',
        id: 20
    },
    {
        name: 'Sfsgasdfasfas',
        id: 5
    },
    {
        name: 'SFsafasfasfa',
        id: 5
    },
    {
        name: 'dsafas'
    },
    {
        name: 'cccc'
    },
]

rowData.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

let result = []

let temp = []
let char = rowData[0].name[0]

rowData.forEach((item, index) => {
    //console.log(`item = ${item.name} - char = ${char}`)
    if (item.name[0].toUpperCase() === char.toUpperCase()) {
        temp.push(item)
    } else {
        result.push(temp)
        temp = [item]
        char = item.name[0]
    }
    if (index === rowData.length - 1) {
        result.push(temp)
    }
})

console.log(result)

let res = [
    [
        {
            name: 'aaaa'
        },
        {
            name: 'a1231245'
        },
        {
            name: 'AAAAAaaaA'
        },
    ],
    [
        {
            name: 'cmsdkvnojsdfbv'
        },
    ],
    [
        {
            name: '43256234'
        },
    ]
]