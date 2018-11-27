


function query(){
return Promise.resolve(parents)
}



export default{
    query
}



var parents = [
    {
        id:makeId(),
        nickName:'eti',
        pwd:'123',
        name: 'eti',
        children:[
            {
                name:'yuval',
                age:3,
            },
            {
                name:'omer',
                age:2,
            },
        ],
        phone: '0522345334',
        adrress:{
            district:'center',
            city:'bat yam',
        },
        languages:['hebrew'],
        descritption:'Our Yuvali and Omer children are charming, love to play and very comfortable.',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'A week ago',
        imgUrl: '../img/odedfamily.png',
    },
    {
        id:makeId(),
        nickName:'shoval',
        pwd:'456',
        name: 'shoval',
        children:[
            {
                name:'miki',
                age:2,
            }
        ],
        phone: '0544789300',
        adrress:{
            district:'center',
            city:'rishon le zion',
        },
        languages:['hebrew'],
        descritption:'Mickey is a stunning boy in Ramot, not because I\'m his mother:)',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'A week ago',
        imgUrl: '../img/shovalfamily.png',
    },
    {
        id:makeId(),
        nickName:'tali',
        pwd:'789',
        name: 'tali',
        age: 3,
        children:[
            {
                name:'david',
                age:2,
            }
        ],
        phone: '0544789300',
        adrress:{
            district:'south',
            city:'beer sheva',
        },
        languages:['hebrew'],
        descritption:'David loves Disney movies and really likes to help cook the kitchen.',
        shortCall: true,
        joinedAt: '20.05.2017',
        lastVisit: 'A week ago',
        imgUrl: '../img/shovalfamily.jpg',
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