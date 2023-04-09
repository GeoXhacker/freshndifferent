import { Navbar, Carousel } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	EffectFade,
} from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);



function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		const importTE = async () => {
			await import("tw-elements");
		};
		importTE();
	}, []);
	return (
		<>
			<Navbar
				fluid={true}
				rounded={true}
				// style={{ marginLeft: 10, marginRight: 10 }}
				className="ml-11 mr-11"
			>
				<Navbar.Brand
					// as={{
					// 	$$typeof: Symbol(react.forward_ref),
					// 	render: LinkWithRef,
					// }}
					to="#"
				>
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Fresh & Different
					</span>
				</Navbar.Brand>
				{/* <Navbar.Toggle /> */}
				<Navbar.Collapse>
					<Navbar.Link href="#" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link
						// as={{
						// 	$$typeof: Symbol(react.forward_ref),
						// 	render: LinkWithRef,
						// }}
						to="#"
					>
						About
					</Navbar.Link>
					<Navbar.Link href="#">Collections</Navbar.Link>
					<Navbar.Link href="#">Events</Navbar.Link>
					<Navbar.Link href="#">Contact Us</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>

			{/* <div className="h-[100vh]">

			<div className="h-full">
				<Carousel>
					
					<img src="images/image8.jpg" alt="..." className="block w-full"/>
					<img src="images/image9.jpg" alt="..." className="pt-20"/>
					<img src="images/image10.jpg" alt="..." className="block w-full"/>
			
				</Carousel>
			</div>

</div> */}
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={swiper => console.log(swiper)}
				autoplay={{
					delay: 3000,
					// pauseOnMouseEnter: true,
					// disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				navigation= {{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
				effect="fade"
			>
				<SwiperSlide>
					<img
						src="images/image9.jpg"
						class="block w-full"
						alt="Exotic Fruits"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="images/image10.jpg"
						class="block w-full"
						alt="Exotic Fruits"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="images/image8.jpg"
						class="block w-full"
						alt="Exotic Fruits"
					/>
				</SwiperSlide>
			</Swiper>

			<h1
				className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter text-center mt-4"
				data-aos="zoom-y-out"
			>
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
					Collections
				</span>
			</h1>

			<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2 relative text-white">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
							/>
							{/* <h2 class="absolute text-3xl bottom-4 left-1/2 -translate-x-1/2 group-hover:text-black">
								New
							</h2> */}
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
