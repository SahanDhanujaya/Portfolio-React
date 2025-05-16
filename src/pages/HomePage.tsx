import Button from "../components/Button.tsx";
import ProfilePic from '../assets/IMG-20241222-WA0003.jpg';

const HomePage = () => {
    return (
        <div className="bg-[#293241] text-white">
            <div className='text-center h-dvh content-center'>
                <div className='w-[300px] h-[300px] rounded-[1000px] place-self-center shadow-xl/30 ...' style={{backgroundImage: `url(${ProfilePic})`, backgroundPosition: `center center`, backgroundSize: `cover`, backgroundRepeat: 'no-repeat' }}></div>
                <h1 className='text-6xl font-extrabold' style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontStyle: 'bold-italic',
                }}>Hello👋</h1>
                <h1 className='text-[1.5rem]'>I'm Professional Software Developer </h1>
                <p className='text-[1.5rem]'>I'm Sahan Dhanujaya.I specialize in creating impactful digital solutions.</p>
                <div className='flex items-center justify-center-safe gap-4'>
                    <Button name={"Contact Me"} color='#fee440'/>
                    <Button name={"Resume"} color='yellow'/>
                </div>

            </div>
           
        </div>
    )
}
export default HomePage;