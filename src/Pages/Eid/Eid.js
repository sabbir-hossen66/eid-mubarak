import React from 'react';

import photo from './../../images/my photo.jpg'

const Eid = () => {


    return (
        <div>
            <h2 className='my-14 text-center text-2xl text-green-600'>ওয়াও ফাটাই দিছো,কাপাই দিছো-তুমি ঈদ সালামি উপলক্ষ্যে সাব্বির ভাইয়ের স্পিচ পাইছো.....</h2> <br />

            <p className='text-center text-xl text-red-400' data-aos="fade-up-right">সেটা হচ্ছে-বিয়ে করার সময় কাবিন নামায় লিখাই নিও যে "প্রতি ঈদে ঈদে বউ যেন সালামি না চায়...!"
            </p>
            <div className='my-12 flex justify-center center'>
                <div>
                    <img width="250px" src={photo} alt="" data-aos="zoom-out-up" />

                </div>
            </div>
            <h2 className='text-center text-2xl'>Using AOS...!</h2>

        </div>
    );
};

export default Eid;