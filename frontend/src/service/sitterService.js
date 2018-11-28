
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
        username: 'alice',
        pwd: '123',
        fullName: 'alice cooper',
        age: 27,
        phone: '0506335433',
        adress: {
            district: 'center',
            city: 'rosh ha ayin',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['Hebrew', 'English'],
        description: 'Hello parents, my name is Alice and I will be happy to look after your child. I am an actress and a theater teacher. She is currently teaching at the school and studying. I have many years of experience working with children. I love to provide warmth and love for children. I am full of joie de vivre and will be happy to combine my work and my studies with a babysitter from the afternoon, including an evening as a mother to two charming girls (15 years old and a 28 year old student at the Weizmann Institute).',
        experience: 6,
        license: true,
        vehicle: true,
        shortCall: true,
        smoking:false,
        medical:true,
        recommendation:true,
        clean:true,
        joinedAt: '16.5.2017',
        lastVisit: 'A week ago',
        about: 'Experience in treating several children at the same time',
        imgUrl: 'https://pbs.twimg.com/profile_images/970393887226454016/MeLr5xM2_400x400.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:5},{txt:'couldnt ask for better babysitter',rating:3},{txt:'does amazing job',rating:4}],
        historyMsgs:[]
    },
    {
        username: 'rozi',
        pwd: '123',
        fullName: 'rozi martsipan',
        age: 23,
        phone: '0504335343',
        adress: {
            district: 'hasharon',
            city: 'hod ha sharon',
        },
        position: 'nanny',
        time:'part-time',
        languages: ['hebrew', 'spanish'],
        description: 'Hello, I\'m Rosie. I\'m here for your children. I\'m done with art. I finished high school with honors. I love kids and animals. I\'m very flexible. I\'ll help with the rest of the house.',
        experience: 4,
        license: false,
        vehicle: true,
        shortCall: true,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:false,
        joinedAt: '16.11.2016',
        lastVisit: 'three days ago',
        about: 'Experience in treating several children at the same time',
        imgUrl: 'https://pbs.twimg.com/profile_images/595698327313854465/AaVBpa0M_400x400.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:5},{txt:'couldnt ask for better babysitter',rating:5},{txt:'does amazing job',rating:5}],
        historyMsgs:[]
    },
    {
        username: 'einav',
        pwd: '123',
        fullName: 'einav ahshav',
        age: 30,
        phone: '0582907732',
        adress: {
            district: 'hasharon',
            city: 'ramat ha sharon',
        },
        position: 'nanny',
        time:'part-time',
        languages: ['hebrew', 'english'],
        description: 'Hello, My name is Einav, I am a warm woman, love children, grant unlimited warmth and love, treats my child as my child (or now, as one of my grandchildren). Asthetic and clean, very verbal, an educator in every aspect Iviri places great emphasis on the development and nurturing of the child.',
        experience: 7,
        license: false,
        vehicle: false,
        shortCall: true,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:true,
        joinedAt: '12.08.17',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://ppe.sas.upenn.edu/sites/default/files/styles/faculty_bookshelf/public/EinavHart_photo_Oct2013.JPG',
        reviews:[{txt:'wow! wow! wow! wow! must have',rating:5},{txt:'couldnt ask for better babysitter',rating:5},{txt:'does amazing job',rating:3}],
        historyMsgs:[]
    },
    {
        username: 'ariel',
        pwd: '123',
        fullName: 'ariel bilishug',
        age: 19,
        phone: '0506773289',
        adress: {
            district: 'hasharon',
            city: 'netanya',
        },
        position: 'nanny',
        time:'part-time',
        languages: ['hebrew', 'german'],
        description: 'Hi my name is Ariel! I really love kids :) I have a lot of experience ... I worked as a medical assistant and a regular in the municipal gardens. I am a friendly and pleasant service.',
        experience: 2,
        license: true,
        vehicle: false,
        shortCall: true,
        smoking:true,
        medical:false,
        recomandation:true,
        clean:true,
        joinedAt: '15.05.18',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://www.zag-sw.com/wp-content/uploads/2018/04/IMGS_0079_kaplan.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:5},{txt:'couldnt ask for better babysitter',rating:5},{txt:'does amazing job',rating:5}],
        historyMsgs:[]
    },
    {
        username: 'shira',
        pwd: '123',
        fullName: 'shira rizbaum',
        age: 24,
        phone: '0506345224',
        adress: {
            district: 'center',
            city: 'tel aviv',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['hebrew'],
        description: 'Hi My name is Shira, 24 years old from Herzliya. Last year student. Interested in caring for your children including transportation / homework / cooking and more',
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: true,
        smoking:false,
        medical:false,
        recomandation:true,
        clean:true,
        joinedAt: '18.03.18',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'http://tfkru2exl1c11xfih48h8lmg6y.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/IMG_3747.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:3},{txt:'couldnt ask for better babysitter',rating:4},{txt:'does amazing job',rating:3}],
        historyMsgs:[]
    },
    {
        username: 'chagit',
        pwd: '123',
        fullName: 'chagit bardugo',
        age: 34,
        phone: '0506345224',
        adress: {
            district: 'center',
            city: 'bat yam',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['hebrew'],
        description: 'Hi, I am Hagit, 23 years old, discharged three years with experience as a babysitter since I was 14 years old. I worked at my community camp for two years, and a day care center (3 months to 3 years old). Very loving children! I would be happy to find a family and be a part of it in maintaining and raising children',
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: true,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:true,
        joinedAt: '25.09.18',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://en.earth.huji.ac.il/sites/default/files/styles/profile_full/public/earthen/files/hagit_affek.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:5},{txt:'couldnt ask for better babysitter',rating:4},{txt:'does amazing job',rating:3}],
        historyMsgs:[]
    },
    {
        username: 'lilach',
        pwd: '123',
        fullName: 'lilach malihi',
        age: 27,
        phone: '0545689424',
        adress: {
            district: 'center',
            city: 'bat yam',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['hebrew', 'english'],
        description: 'Loves all the kids, and gets along with all ages. I would be happy to be there for them, to embrace and help.',
        experience: 4,
        license: false,
        vehicle: false,
        shortCall: false,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:true,
        joinedAt: '20.09.18',
        lastVisit: 'A week ago',
        about: 'Experience in treating several children at the same time',
        imgUrl: 'https://www.cfans.umn.edu/sites/cfans.umn.edu/files/Lilah_White_page_pic.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:4},{txt:'couldnt ask for better babysitter',rating:4},{txt:'does amazing job',rating:4}],
        historyMsgs:[]
    },
    {
        username: 'shimrit',
        pwd: '123',
        fullName: 'shimrit bar zohar',
        age: 22,
        phone: '0506832883',
        adress: {
            district: 'center',
            city: 'rishon le zion',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['hebrew', 'english'],
        description: 'Ticking house tasks, loving house help and playing with the kids in what they love',
        experience: 5,
        license: false,
        vehicle: false,
        shortCall: false,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:true,
        joinedAt: '07.10.17',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://0.academia-photos.com/3633346/1275654/18003786/s200_shimrit.lee.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:4},{txt:'couldnt ask for better babysitter',rating:4},{txt:'does amazing job',rating:5}],
        historyMsgs:[]
    },
    {
        username: 'dudi',
        pwd: '123',
        fullName: 'dudi ben dayan',
        age: 24,
        phone: '0506222411',
        adress: {
            district: 'cnter',
            city: 'hulon',
        },
        position: 'nanny',
        time:'full-time',
        languages: ['hebrew', 'chinese'],
        description: `Hello, I\'m dudi ben dayan, a bachelor\'s degree in psychology. I will be happy to meet your children and provide
                     them with all their needs. Available most of the day, i prefer only young boys i\'m religion and prefer not interact with girls.`,
        experience: 5,
        license: true,
        vehicle: true,
        shortCall: false,
        smoking:false,
        medical:true,
        recomandation:true,
        clean:true,
        joinedAt: '11.07.18',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://lyricstranslate.com/files/styles/large/public/dudi knopfler - hasidic singer israel.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:2},{txt:'couldnt ask for better babysitter',rating:1},{txt:'does amazing job',rating:3}],
        historyMsgs:[]
    },
    {
        username: 'lola',
        pwd: '123',
        fullName: 'lola bunny',
        age: 20,
        phone: '0506833024',
        adress: {
            district: 'center',
            city: 'tel aviv',
        },
        position: 'nanny',
        time:'part-time',
        languages: ['hebrew', 'english'],
        description: 'Hello everyone, my name is Lola. I was released from the army two months ago and plan to fly abroad in six months',
        experience: 2,
        license: true,
        vehicle: true,
        shortCall: false,
        smoking:true,
        medical:true,
        recomandation:false,
        clean:true,
        joinedAt: '09.03.18',
        lastVisit: 'Two days ago',
        about: 'Experience with one child',
        imgUrl: 'https://i.etsystatic.com/iusa/c73a87/38438664/iusa_400x400.38438664_kd3u.jpg',
        reviews:[{txt:'amazing babysitter the kids love her!',rating:4},{txt:'couldnt ask for better babysitter',rating:4},{txt:'does amazing job',rating:3}],
        historyMsgs:[]
    },
]




function query() {
    return Promise.resolve(sitters)
}

function getById(username){
    const sitter = sitters.find(sitter => {
       return sitter.username === username})
    return Promise.resolve(sitter)
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