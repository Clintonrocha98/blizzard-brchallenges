import { Header } from "./components/header";

import style from "./components/style/style.module.scss";

function App() {
    return (
        <>
            <main className={style.container}>
                <Header></Header>
            </main>
        </>
    );
}

export default App;
