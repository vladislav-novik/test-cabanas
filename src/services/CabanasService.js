import cabanas from './cabanas.js';

export default class CabanasService {
    static getCabanas() {
        return cabanas ? cabanas : [];
    }
}
