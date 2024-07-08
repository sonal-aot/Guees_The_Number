import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";

const AppRouter = () => {
    return (
        <Router basename="/Guees_The_Number">
            <Routes>
                <Route path="/" element={<Index/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter