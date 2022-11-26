import { Header } from "./components/header";
import { Main } from "./components/main";

import style from "./components/style/style.module.scss";

function App() {
    return (
        <>
            <Main className={style.container}>
                <Header className={style.container}></Header>
            </Main>
        </>
    );
}

export default App;
