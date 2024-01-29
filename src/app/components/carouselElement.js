import Image from "next/image";
import { Carousel } from 'flowbite';
import { useContext } from 'react';

const carouselElement = () => {
    const { isServer } = useContext( Carousel );
    if(!isServer) {
        const carousel = new Carousel(carouselElement, items, options, instanceOptions);

        document.getElementById('carousel-example');
        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4'),
            },
            {
                position: 4,
                el: document.getElementById('carousel-item-5'),
            },
        ];

        // options with default values
        const options = {
            defaultPosition: 1,
            interval: 3000,

            // indicators: {
            //     activeClasses: 'bg-white dark:bg-gray-800',
            //     inactiveClasses:
            //         'bg-white/50 hover:bg-white',
            //     items: [
            //         {
            //             position: 0,
            //             el: document.getElementById('carousel-indicator-1'),
            //         },
            //         {
            //             position: 1,
            //             el: document.getElementById('carousel-indicator-2'),
            //         },
            //         {
            //             position: 2,
            //             el: document.getElementById('carousel-indicator-3'),
            //         },
            //         {
            //             position: 3,
            //             el: document.getElementById('carousel-indicator-4'),
            //         },
            //         {
            //             position: 4,
            //             el: document.getElementById('carousel-indicator-5'),
            //         },
            //     ],
            // },

            // callback functions
            onNext: () => {
                console.log('next slider item is shown');
            },
            onPrev: () => {
                console.log('previous slider item is shown');
            },
            onChange: () => {
                console.log('new slider item has been shown');
            },
        };
        
        // instance options object
        const instanceOptions = {
            id: 'carousel-example',
            override: true
        };
        
        // goes to the next (right) slide
        carousel.next();
        
        // goes to the previous (left) slide
        carousel.prev();
        
        // starts or resumes the carousel cycling (automated sliding)
        carousel.cycle();
        
        // pauses the cycling (automated sliding)
        carousel.pause();

        const $prevButton = document.getElementById('data-carousel-prev');
        const $nextButton = document.getElementById('data-carousel-next');

        $prevButton.addEventListener('click', () => {
            carousel.prev();
        });

        $nextButton.addEventListener('click', () => {
            carousel.next();
        });
    }
}



const CarouselElement = () => {
    return (
<article id="carousel-example" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div id="carousel-item-1" className="duration-700 ease-in-out" data-carousel-item="active">
            <Image src="/windFarm12.jpg" width={1800} height={1200} className="w-full block" alt="..." priority/>
        </div>
        <div id="carousel-item-2" className=" duration-700 ease-in-out" data-carousel-item>
            <Image src="/ecoFriendlyCar.jpg" width={1800} height={1200} className="block" alt="..." priority/>
        </div>
        <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/singleWindmill.jpg" width={1800} height={1200} className="block" alt="..." priority/>
        </div>
        <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/solarFarm.jpg" width={1800} height={1200} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." priority/>
        </div>
        <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/solarPanels.jpg" width={1800} height={1200} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." priority/>
        </div>
    </div>

    <button id="data-carousel-prev" type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button id="data-carousel-next" type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</article>
    )
}
export default CarouselElement;