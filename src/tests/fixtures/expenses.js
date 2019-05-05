import moment from 'moment'


export default  [
    {
        id:'1',
        description:'d1',
        note:'',
        amount:0,
        createdAt:moment(0).add(5,'days').valueOf()
    },    {
        id:'2',
        description:'d2',
        note:'',
        amount:1,
        createdAt:moment(0).subtract(5,'days').valueOf()
    },    {
        id:'3',
        description:'d3',
        note:'',
        amount:3,
        createdAt:0
    },
]
