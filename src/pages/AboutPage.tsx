import Picture from '../assets/IMG-20250109-WA0002.jpg';
const AboutPage  = () => {

    const details:{value: string , detail: string}[] =[
        {
            value: "Name",
            detail: "Sahan Dhanujaya"
        },
        {
            value: "Address",
            detail: "116/1,Morahenagama,Hatton"
        },
        {
            value: "Date Of Birth",
            detail: "05/10/2003"
        }
    ]
    return (
        <div className='flex items-center justify-center h-dvh bg-[#293241] text-white'>
            <div>
                <div className='w-[450px] h-[450px] shadow-xl/30 ... rounded-2xl' style={{
                    backgroundImage:`url(${Picture})`,
                    backgroundPosition: `center center`,
                    backgroundSize: `cover`,
                    backgroundRepeat: 'no-repeat',
                }}></div>
            </div>
            <div>
                <div className='w-[450px] m-2 ' >
                    <h1 className='text-[2rem]'>About <span className='text-yellow-300 font-extrabold'>Me</span></h1>
                    <p className='font-thin'>I bring a wealth of experience as a full stack
                        developer in the IT industry.My technical expertise
                        spans a vqariety of programming languages. I am currently
                        studying web developing, mobile developing and I am interested
                        in cording, music,traveling fitness and photography.</p>
                </div>
                {details.map((detail, index) => (
                    <div key={index} className='flex items-center justify-start bg-[#2F3E46] text-white m-2 w-full rounded-2xl shadow-xl/30 ...'>
                       <div className='m-5'>
                           {detail.value}
                       </div>
                        <div>
                            {detail.detail}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default AboutPage;