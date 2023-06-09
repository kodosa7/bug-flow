// 8""""8               8""""                      
// 8    8   e   e eeeee 8     e     eeeee e   e  e 
// 8eeee8ee 8   8 8   8 8eeee 8     8  88 8   8  8 
// 88     8 8e  8 8e    88    8e    8   8 8e  8  8 
// 88     8 88  8 88 "8 88    88    8   8 88  8  8 
// 88eeeee8 88ee8 88ee8 88    88eee 8eee8 88ee8ee8
// 
//               -+ by ELS 2023 +-
// 
//  an app for easy reporting bug flows as images
// 
//       see README.md for info how to use
//         uses React.js and TailwindCSS
// 
 //    (ASCII logo generated by ascii.today)

import './output.css'
import "./styles.css"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {
    return (
        <div className="bg-gray-900 font-raleway"
             id="render" // needed for html2canvas render functionality
        >
            <Header />
            <Main />
        </div>
    )
}