import { getAnalytics } from "firebase/analytics";
import initilaizationAuth from "./Firebase-init"
const app= initilaizationAuth();
const analysisapp = () => {
    getAnalytics(app);};

export default analysisapp;