export default class AppConfig {
    static get dataProviderUrl() {
        return  process.env.NODE_ENV === "development" ? "." : process.env.REACT_APP_SERVER_API;
    }
}
