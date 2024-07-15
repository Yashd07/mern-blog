import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about me
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my Portfolio
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://my-portfolio-nextjs-yashd07s-projects.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    Yash Desai
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/software-developer-portfolio-1024x476.png" />
        </div>
    </div>
  )
}