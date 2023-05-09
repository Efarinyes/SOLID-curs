(() => {
    // Sense aplicar el 'Principi de responsabilitat única'

    type Gender = 'M' | 'F'
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) { }
    }
    class User extends Person {

        public lastAccess: Date;
       

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super(name, gender, birthday);
            this.lastAccess = new Date()
            
        }
        checkCredentials() {
            return true
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) {
            super( email, role, name, gender, birthday )
        }
    }
    const userSettings = new UserSettings(
        '/usr/home',
        '/Descktop',
        'a@a.es',
        'Admin',
        'Eduard',
        'M',
        new Date('1961-06-11')
    )
    console.log(userSettings)


})();