import moment from 'moment'
//Default States
export const filters1 = {
    text:'',
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
}

export const filters2 = {
    text:'',
    sortBy:"date",
    startDate:moment(0),
    endDate:moment(0).add(3, 'days')
}