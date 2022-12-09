    import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./app.module.scss"

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;