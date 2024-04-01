import React, { useContext } from 'react'
import { DarkModeContext } from '../context';


const NewsCard = ({CompanyName, CompanyBgImage, text}) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`flex py-2 px-2 w-[280px] md:w-[260px] lg:w-[300px] h-auto bg-[#fff] rounded-2xl border ${darkMode ? "border-[#FFF]" : "border-[#968864]"}`}>
        <div className='flex items-center gap-5'>
            <div className={`flex flex-col  gap-5 ${CompanyBgImage === false ? "w-[100%] items-center" : "w-[55%] lg:w-[45%] md:w-[55%]"}`}>
                <div className=''>
                    <img src={CompanyName} alt="company name" className={` w-[100%] `} />
                </div>
                <div className='md:text-[12px] lg:text-[15px]'>{text}</div>
            </div>
             <div className={`w-[45%] lg:w-[55%] md:w-[45%] ${CompanyBgImage=== false ? "hidden" : "inline"}`}>
                <img src={CompanyBgImage} alt="company image" className=' md:w-[160px] md:h-[120px] lg:w-[220px] lg:h-[140px]' />
            </div>
        </div>
    </div>
  )
}

export default NewsCard