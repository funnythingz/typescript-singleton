module PATTERN {

    export class SingletonClass {

        private message: string;

        private static _instance:SingletonClass = null;

        constructor() {
            if(SingletonClass._instance) {
                throw console.log('Error: Instantiation failed');
            }
            SingletonClass._instance = this;
        }

        static getInstance(): SingletonClass {
            if(SingletonClass._instance === null) {
                SingletonClass._instance = new SingletonClass();
            }
            return SingletonClass._instance;
        }

        getMessage(): string {
            return this.message;
        }

    }

    export var Singleton = SingletonClass.getInstance();

}
