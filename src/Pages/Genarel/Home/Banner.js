import React from 'react';
import Chair from '../../../assets/images/chair.png'
import chairBg from '../../../assets/images/bg.png'

const Banner = () => {
    const backgroundImgStyle = {
        backgroundImage: `url("${chairBg}")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom'
    }
    return (
        <div className='  ' style={backgroundImgStyle}>
            <div class="hero mx-auto container min-h-screen" >
  <div class="hero-content flex-col lg:flex-row-reverse" >
    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;