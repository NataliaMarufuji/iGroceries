export class Logger {
    static error(message: string) {
        console.log('ERROR: ' + message);
    }
    static warn(message: string) {
        console.log('WARNING: ' + message);
    }
    static info(message: string) {
        console.log('INFO: ' + message);
    }
    static debug(message: string) {
        console.log('DEBUG: ' + message);
    }
}