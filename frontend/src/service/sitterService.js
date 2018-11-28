
function makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

var sitters = [
    {
        id: makeId(),
        nickName: 'alis',
        pwd: '123',
        name: 'alis',
        age: 27,
        phone: '0506335433',
        adrress: {
            district: 'center',
            city: 'rosh ha ayin',
        },
        position: 'nanny',
        languages: ['hebrew', 'english'],
        description: 'Hello my parents, my name is Alice and I will be happy to look after your child. I am an actress and a theater teacher. She is currently teaching at the school and studying. I have many years of experience working with children. I love to provide warmth and love for children. I am full of joie de vivre and will be happy to combine my work and my studies with a babysitter from the afternoon, including an evening as a mother to two charming girls (15 years old and a 28 year old student at the Weizmann Institute).',
        experience: 6,
        license: true,
        vehicle: true,
        shortCall: true,
        joinedAt: '16.5.2017',
        lastVisit: 'A week ago',
        expaAbout: 'Experience in treating several children at the same time',
        imgUrl: '',
    },
    {
        id: makeId(),
        nickName: 'rozi',
        pwd: '123',
        name: 'rozi',
        age: 23,
        phone: '0504335343',
        adrress: {
            district: 'hasharon',
            city: 'hod ha sharon',
        },
        position: 'nanny',
        languages: ['hebrew', 'spanish'],
        description: 'Hello, I\'m Rosie. I\'m here for your children. I\'m done with art. I finished high school with honors. I love kids and animals. I\'m very flexible. I\'ll help with the rest of the house.',
        experience: 4,
        license: false,
        vehicle: false,
        shortCall: true,
        joinedAt: '16.11.2016',
        lastVisit: 'three days ago',
        expaAbout: 'Experience in treating several children at the same time',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'einav',
        pwd: '123',
        name: 'einav',
        age: 30,
        phone: '0582907732',
        adrress: {
            district: 'hasharon',
            city: 'ramat ha sharon',
        },
        position: 'nanny',
        languages: ['hebrew', 'english'],
        description: 'Hello, My name is Einav, I am a warm woman, love children, grant unlimited warmth and love, treats my child as my child (or now, as one of my grandchildren). Asthetic and clean, very verbal, an educator in every aspect Iviri places great emphasis on the development and nurturing of the child.',
        experience: 7,
        license: false,
        vehicle: false,
        shortCall: true,
        joinedAt: '12.08.17',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'ariel',
        pwd: '123',
        name: 'ariel',
        age: 19,
        phone: '0506773289',
        adrress: {
            district: 'hasharon',
            city: 'netanya',
        },
        position: 'nanny',
        languages: ['hebrew', 'german'],
        description: 'Hi my name is Ariel! I really love kids :) I have a lot of experience ... I worked as a medical assistant and a regular in the municipal gardens. I am a friendly and pleasant service.',
        experience: 2,
        license: false,
        vehicle: false,
        shortCall: true,
        joinedAt: '15.05.18',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'shira',
        pwd: '123',
        name: 'shira',
        age: 24,
        phone: '0506345224',
        adrress: {
            district: 'center',
            city: 'tel aviv',
        },
        position: 'nanny',
        languages: ['hebrew'],
        description: 'Hi My name is Shira, 24 years old from Herzliya. Last year student. Interested in caring for your children including transportation / homework / cooking and more',
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: true,
        joinedAt: '18.03.18',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'chagit',
        pwd: '123',
        name: 'chagit',
        age: 24,
        phone: '0506345224',
        adrress: {
            district: 'center',
            city: 'bat yam',
        },
        position: 'nanny',
        languages: ['hebrew'],
        description: 'Hi, I am Hagit, 23 years old, discharged three years with experience as a babysitter since I was 14 years old. I worked at my community camp for two years, and a day care center (3 months to 3 years old). Very loving children! I would be happy to find a family and be a part of it in maintaining and raising children',
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: true,
        joinedAt: '25.09.18',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'lilach',
        pwd: '123',
        name: 'lilach',
        age: 27,
        phone: '0545689424',
        adrress: {
            district: 'center',
            city: 'bat yam',
        },
        position: 'nanny',
        languages: ['hebrew', 'english'],
        description: 'Loves all the kids, and gets along with all ages. I would be happy to be there for them, to embrace and help.',
        experience: 4,
        license: false,
        vehicle: false,
        shortCall: false,
        joinedAt: '20.09.18',
        lastVisit: 'A week ago',
        expaAbout: 'Experience in treating several children at the same time',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'shimrit',
        pwd: '123',
        name: 'shimrit',
        age: 22,
        phone: '0506832883',
        adrress: {
            district: 'center',
            city: 'rishon le zion',
        },
        position: 'nanny',
        languages: ['hebrew', 'english'],
        description: 'Ticking house tasks, loving house help and playing with the kids in what they love',
        experience: 5,
        license: false,
        vehicle: false,
        shortCall: false,
        joinedAt: '07.10.17',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'dana',
        pwd: '123',
        name: 'dana',
        age: 24,
        phone: '0506222411',
        adrress: {
            district: 'cnter',
            city: 'hulon',
        },
        position: 'nanny',
        languages: ['hebrew', 'chinese'],
        description: 'Hello, I\'m Dana, a bachelor\'s degree in psychology. I will be happy to meet your children and provide them with all their needs. Available most of the day.',
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: false,
        joinedAt: '11.07.18',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
    {
        id: makeId(),
        nickName: 'lola',
        pwd: '123',
        name: 'lola',
        age: 20,
        phone: '0506833024',
        adrress: {
            district: 'center',
            city: 'tel aviv',
        },
        position: 'nanny',
        languages: ['hebrew', 'english'],
        description: 'Hello everyone, my name is Lola. I was released from the army two months ago and plan to fly abroad in six months',
        experience: 2,
        license: false,
        vehicle: false,
        shortCall: false,
        joinedAt: '09.03.18',
        lastVisit: 'Two days ago',
        expaAbout: 'Experience with one child',
        imgUrl: ''
    },
]




function query() {
    return Promise.resolve(sitters)
}

function getById(nickName) {
    const siter = sitters.find(siter => {
        return siter.nickName === nickName
    })
    return Promise.resolve(siter)
}

function remove(id) {
    const sitterIdx = sitters.findIndex(sitter => sitter.id === id)
    sitters.splice(sitterIdx, 1)
    return Promise.resolve(sitterIdx)
}

function update(sitter) {
    const sitterIdx = sitters.findIndex(currSitter => currSitter.id === sitter.id)
    sitter.splice(sitterIdx, 1, sitter)
    return Promise.resolve(sitterIdx)
}

function addNewSitter(newSitter) {
    sitters.push(newSitter)
    console.log(sitters);

    return Promise.resolve(newSitter)
}

export default {
    query,
    getById,
    remove,
    update,
    addNewSitter
}