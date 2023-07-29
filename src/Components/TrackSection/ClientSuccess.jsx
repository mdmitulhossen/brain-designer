
import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import img from "../../assests/video.png"
import "./client.css"


const ClientSuccess = () => {

    const videoYT = ({ id }) => {
        let html = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/xubWFUA8bk4?wmode=opaque&&controls=0&autohide=1&autoplay=1&volume=0&vol=0&mute=0" ></iframe>`
        document.getElementById('video').innerHTML = html;


    }
    return (
        <div className='brainContainer lg:mt-20'>
            <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4 mb-10 md:w-[30%] md:justify-start md:items-start'>
                    <h1 className='text-4xl font-bold '>Client Success Story</h1>
                    <div className='w-28 h-[2px] bg-slate-600'></div>
                    <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, delectus. Culpa officia distinctio cumque ea est nisi odio, magni quidem.</p>
                    <button className='btn'>Get a Quote</button>
                </div>

                <div className='md:w-[68%]'>
                    <div className='yt py-28 pl-10 w-full flex items-end justify-end'>
                        <div id='video' className='w-11/12 cursor-pointer'>
                            <a onClick={() => videoYT('lHKhy6J1s1w')}>
                                <img className='w-full object-cover' src={img} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ClientSuccess;