// Class used to store all the paths used in the application.
export class AppConstants {
    static getPaths() {
        const paths = new Map([
            ["HOME", "/home"],
            ["LOGIN", "/"],
            ["PROFILE", "/profile"],
            ["RESOURCES", "/resources"],
            ["SETTINGS", "/settings"],
        ]);

        return paths;
    }
}
