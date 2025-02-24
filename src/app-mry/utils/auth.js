export const fakeAuth = {
    isAuthenticated: false,
    login(cb) {
        this.isAuthenticated = true;
        localStorage.setItem("isAuth", "true");
        cb();
    },
    logout(cb) {
        this.isAuthenticated = false;
        localStorage.removeItem("isAuth");
        cb();
    },
    checkAuth() {
        return localStorage.getItem("isAuth") === "true";
    }
};

export const ADMIN_CREDS = {
    username: "admin",
    password: "blog123"
};
