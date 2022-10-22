import 'boxicons'

function navber() {
    return (
        <nav className="navbar bg-zinc-800 w-full h-[4rem] text-white p-3 shadow-md shadow-white/5 fixed z-10">
            <div className="navbar-wrapper container flex flex-wrap mx-auto h-full justify-between items-center text-center">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-xl font-bold">ZEMOB<sup className="text-xs">BOT</sup></h2>
                    </a>
                </div>
                <div className="menu">
                    <ul className="flex text-center">
                        <li className="px-4"><a className="h-full hover:opacity-80 duration-150 font-bold" href="/"><box-icon name='home' color='#ffffff' ></box-icon>หน้าหลัก</a></li>
                        <li className="px-4"><a className="h-full hover:opacity-80 duration-150 font-bold" href=""><box-icon name='terminal' color='#ffffff' ></box-icon>คำสั่ง</a></li>
                        <li className="px-4"><a className="h-full hover:opacity-80 duration-150 font-bold" href=""><box-icon name='server' color='#ffffff' ></box-icon>สถานะ</a></li>
                        <li className="px-4"><a className="h-full hover:opacity-80 duration-150 font-bold" href=""><box-icon name='discord-alt' type='logo' color='#ffffff'></box-icon>เข้าสู่ระบบ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navber