import bugLogo from "/dist/assets/bug.png";


export default function Header() {
    return (
        <div>
            <div className="header text-gray-100 text-4xl font-extrabold text-center p-10">
            <img src={bugLogo} alt="Logo" className="logo h-10 mr-3 mb-2" />
                Dev BugFlow
            </div>
        </div>
    )
}