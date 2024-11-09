// Зробити свій розпорядок дня.

// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с

// І так далі

function wakeUp(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Прокинувся')
            resolve(false)
        },800)
    })
}

function checkPhone(isAwake){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isAwake){
                resolve('2. Перевірив Телеграм')
            } reject('Прокидайся!!!!')
        },300)
    })
}

// wakeUp().then(result => {
//     return checkPhone(result)
// })
// .then(isPhoneCheked => {
//     console.log(isPhoneCheked)
// })
// .catch(reason => {
//     console.log(reason, " error")
// })


async function dailyRutine() {
    try{
        let isAwake = await wakeUp();
        let isCheckPhone = await checkPhone(isAwake);
        console.log(isCheckPhone)
    }
    catch(error){
        console.log(error)
    }
    
}

dailyRutine()