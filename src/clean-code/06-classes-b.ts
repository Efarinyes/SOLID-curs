(() => {
    // Sense aplicar el 'Principi de responsabilitat única'
    // Arreglem una mica la classe tot i que encara no complim amb el 'Principi de responsabilitat única'

    type Gender = 'M' | 'F'

    interface PersonProps {
        birthday: Date;
        gender: Gender;
        name: string;

    }

    class Person {
        public birthday: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthday }: PersonProps) {
            this.birthday = birthday
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        birthday: Date
        email: string,
        gender: Gender,
        name: string,
        role: string,
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor(
            { email,
                role,
                name,
                gender,
                birthday }: UserProps
        ) {
            super({ name, gender, birthday });
            this.lastAccess = new Date()
            this.email = email;
            this.role = role

        }
        checkCredentials() {
            return true
        }
    }
    interface UsersSettingsProps {

        birthday: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;

    }
    class UserSettings extends User {

        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor(
           { birthday,
            email,
            gender,
            lastOpenFolder ,
            name,
            role,
            workingDirectory}: UsersSettingsProps
        ) {
            super({email, role, name, gender, birthday})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }
    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/Descktop',
        email: 'a@a.es',
        role: 'Admin',
        name: 'Eduard',
        gender:'M',
       birthday: new Date('1961-06-11')
})
    
    console.log(userSettings) 


})();