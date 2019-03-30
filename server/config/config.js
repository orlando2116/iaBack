process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = '2h';

process.env.SEED = process.env.SEED || 'secret';

if (process.env.NODE_ENV === 'dev') {
    process.env.URLDB = 'mongodb://localhost:27017/ia';
} else {
    process.env.URLDB = process.env.MONGO_URI;
}
