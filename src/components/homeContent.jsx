import logo from '../image/botlogo.jpg'
import { FunctionList } from './cardContent'
import donatmeplss from '../image/donatplss.jpg'

export default function HomeContent() {
    return (
        <div className="content text-white">
            <div className="top-side flex flex-wrap justify-center items-center h-[100vh] justify-between container mx-auto px-[12rem]">
                <div className="info w-[29em]" data-aos="fade-right" data-aos-delay="100">
                    <div className="text-info" >
                        <h3 className="text-4xl font-bold glowing">ZEMOBBOT</h3>
                        <p className="text-xl">บอทDiscordที่จะจัดการเซิฟเวอร์ของคุณให้มีความสวยงามมากขี้นเเละยังมีฟิวเจอร์อืนๆอีกมากมายให้ได้ลอง</p>
                    </div>
                    <div className="invete-bot mt-4">
                        <a href="" className="text-xl shadow font-bold border-2 border-white rounded-lg px-4 py-2 duration-150 hover:bg-[#fecb5c] hover:text-black hover:border-[#fecb5c]">
                            +
                            Invete
                        </a>
                    </div>
                </div>
                <div className="right-info" >
                    <div className="thubnuil w-[19em]" data-aos="fade-left" data-aos-delay="100">
                        <img src={logo} alt="ZEMOBBOTLOGO" className="w-full rounded-full" />
                    </div>
                </div>
            </div>
            <div className="main-side text-[#FFF]">
                <ul className="features-bot px-6 py-[4rem] grid grid-cols-2 gap-x-12 container mx-auto">
                    <FunctionList title="เปิดเพลงจากYoutubeเเละSpotify" des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้" image={logo} link="" />
                    <FunctionList title="สร้างห้องคุยกับเพื่อนของคุณในคลิกเดียว" des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้" image="" link=""  />
                    <FunctionList title="สร้างห้องverification" des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้" image="" link=""  />
                    <FunctionList title="สร้างข้อความต้อนรับผู้เข้าใหม่" des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้" image="" link="" />
                </ul>
            </div>
            <div className="status-side my-2 flex h-[20rem] text-center px-4 py-2 justify-center items-center">
                <div className="status-wrapper">
                    <div className="status-header" data-aos="fade-up" data-aos-delay="50">
                        <h3 className='text-3xl' >ZEMOB Status</h3>
                        <hr width="150px" className="mx-auto pt-2" />
                        <p className='text-sm'>เพื่อนๆของZEMOBทั้งหมด</p>
                    </div>
                    <div className="status-bot grid grid-cols-3 mx-auto w-[20rem] justify-items-center">
                        <div className="st-servers text-xl"  data-aos="fade-up" data-aos-delay="100">
                            <box-icon name='server' animation='flashing' color='#ffffff' ></box-icon>
                            <p></p>
                            <h4>Servers</h4>
                        </div>
                        <div className="st-members text-xl"  data-aos="fade-up" data-aos-delay="150">
                            <box-icon name='user' animation='flashing' color='#ffffff' ></box-icon>
                            <p></p>
                            <h4>Members</h4>
                        </div>
                        <div className="st-playing text-xl"  data-aos="fade-up" data-aos-delay="200">
                            <box-icon name='playlist' type='solid' animation='flashing' color='#ffffff' ></box-icon>
                            <p></p>
                            <h4>Playing</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="donation-side flex bg-[#F6F5FF] w-full h-[24rem] items-center">
                <div className="donation-data container mx-auto px-4 py-2">
                    <div className="title-dt text-black text-center">
                        <h3 className="font-bold text-2xl mx-2">Donation</h3>
                    </div>
                    <div className="text-dt text-black w-[13em] items-center text-center mx-auto my-4">
                        <img src={donatmeplss} alt="" className="rounded-t-lg" />
                        <a href="" className="h-6 w-full px-4 py-6 bg-[#fcc550] text-white flex flex-wrao items-center justify-center rounded-b-lg font-bold hover:bg-[#fecb5c]">สนับสนุนผมได้ที่นี้เลย!!!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}