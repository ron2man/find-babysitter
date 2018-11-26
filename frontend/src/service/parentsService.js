


function query(){
return Promise.resolve(parents)
}



export default{
    query
}



var parents = [
    {
        id:makeId(),
        nickName:'אתי',
        pwd:'123',
        name: 'אתי',
        parentAge:39,
        children:[
            {
                name:'יובל',
                age:3,
            },
            {
                name:'עומר',
                age:3,
            },
        ],
        phone: '0522345334',
        adrress:{
            district:'מרכז',
            city:'בת ים',
        },
        parentGender: 'אמא',
        languages:['עברית'],
        descritption:'יובלי ועומר שלנו ילדים מקסימים, אוהבים לשחק ומאוד נוחים.',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'לפני שבוע',
        imgUrl: '',
    },
    {
        id:makeId(),
        nickName:'שובל',
        pwd:'456',
        name: 'שובל',
        parentAge:36,
        children:[
            {
                name:'מיקי',
                age:2,
            }
        ],
        phone: '0544789300',
        adrress:{
            district:'מרכז',
            city:'ראשון לציון',
        },
        parentGender: 'אמא',
        languages:['עברית'],
        descritption:'מיקי ילד מהמם ברמות, לא בגלל שאני אמא שלו:)',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'לפני שבוע',
        imgUrl: '',
    },
    {
        id:makeId(),
        nickName:'טלי',
        pwd:'789',
        name: 'טלי',
        age: 3,
        children:[
            {
                name:'מיקי',
                age:2,
            }
        ],
        phone: '0544789300',
        adrress:{
            district:'דרום',
            city:'באר שבע',
        },
        parentGender: 'אמא',
        parentAge:36,
        children:[
            {
                name:'מיקי',
                age:2,
            }
        ],
        languages:['עברית'],
        descritption:'יוני ילד מהמם ברמות, לא בגלל שאני אמא שלו:)',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'לפני שבוע',
        imgUrl: '',
    },
]


function makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}