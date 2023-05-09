(() => {

    // Apliquem la lògica del 'Principi de responsabilitat única'
    // Prioritzem la composició per davant de l'herència

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
        email: string,
        role: string
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps) {
            this.lastAccess = new Date()
            this.email = email;
            this.role = role

        }
        checkCredentials() {
            return true
        }
    }
    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }
    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            lastOpenFolder,
            workingDirectory 
        }: SettingsProps) {

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
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
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings

        constructor({
            name, gender, birthday, email, role, lastOpenFolder, workingDirectory
        }: UsersSettingsProps ) {
            this.person = new Person({name, gender, birthday});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory})
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/Descktop',
        email: 'a@a.es',
        role: 'Admin',
        name: 'Eduard',
        gender: 'M',
        birthday: new Date('1961-06-11')
    })

    console.log(userSettings)


})();