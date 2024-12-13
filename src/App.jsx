import './App.css'
import { Container} from "@mui/material";
import NavBar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
    return (
        <>
            <Container sx={{backgroundColor:'Black', padding:"0 !important"}}>
                <Header/>
                <NavBar/>
                <Footer/>
            </Container>

        </>
    )
}

export default App
