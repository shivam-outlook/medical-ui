import SecureLS from 'secure-ls';
const ls = new SecureLS();

class ApplicationStorage {

    static setItem(key, value) {
        ls.set(key, value);
    }

    static getItem(key) {
        return ls.get(key)
    }

    static removeAll() {
        return ls.removeAll();

    }

    static remove(key) {
        return ls.remove(key);
    }
}
export default ApplicationStorage;