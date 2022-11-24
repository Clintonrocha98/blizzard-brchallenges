import {createRoot} from "react-dom/client";
import App from './App'
import './components/style/global.scss'

const root = createRoot(document.querySelector('#root'))

root.render(<App/>);