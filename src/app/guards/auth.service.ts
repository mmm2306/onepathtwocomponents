export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log(this.loggedIn);
                resolve(this.loggedIn);
            }, 0);
        }
        );
        return promise;
    }

    signin() {
        this.loggedIn = true;
    }

    signout() {
        this.loggedIn = false;
    }
}
