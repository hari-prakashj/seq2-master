module.exports={ 
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'password',
    DB:'postgresql',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        // accquire:30000,
        idle:10000
    }
};