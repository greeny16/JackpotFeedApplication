import data from './data/data';

let db;

const fetch = (mockData, time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData);
        }, time);
    });
};

export default {
    fetchPots() {
        if (db === undefined) {
            db = data;

            return fetch(db.pots, 1000);
        }

        db.pots.forEach(p => {
            p.amount = ((+p.amount) * 1.001).toFixed(2);
        })

        return fetch(db.pots, 500);
    },
};
