import Link from 'next/link';
import React, { useState } from 'react';
import { GrMenu } from 'react-icons/gr';
function Header() {
	const [ navbarOpen, setNavbarOpen ] = useState(false);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		<div className="fixed top-0 flex items-center  py-[10px] pl-6 xl:pl-11 ">
			<div className="logo ">
				<Link href="/">
					<a>
						<svg
							class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
							className="h-12 w-52 sm:h-8 sm:w-32"
							viewBox="0 0 342 35"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 
					0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 
					6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0
					 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3
					  7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 
					  9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 
					  007-7h-40a9.6 9.6 0 007 7z"
								fill="currentColor"
							/>
						</svg>
						{/* <img
       className='h-7 w-[140px] xl:h-[14px] xl:w-[110px]'
        src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
       alt=""/> */}
					</a>
				</Link>
			</div>
			<div className="models ml-56">
				<div>
					<ul className="hidden xl:flex text-[#010202] text-[15px]  space-x-2  font-medium ">
						<li className="h-8 pl-3 pt-1 w-[84px] hover:bg-gray-300 rounded-full">
							<Link href="/ModelS">
								<a> Model S</a>
							</Link>
						</li>
						<li className="h-8 pl-3 pt-1 w-[84px] hover:bg-gray-300  rounded-full">
							<Link href="/Model3">
								<a>
									{' '}
									<p className="">Model 3</p>
								</a>
							</Link>
						</li>
						<li className="h-8 pl-3 pt-1 w-[84px] hover:bg-gray-300 rounded-full">
							<Link href="/ModelX">
								<a> Model X</a>
							</Link>
						</li>
						<li className="h-8 pl-3 pt-1 w-[84px] hover:bg-gray-300 rounded-full">
							<Link href="/ModelY">
								<a> Model Y</a>
							</Link>
						</li>
						<li className="h-8 pl-[11px] pt-1 w-[97px] hover:bg-gray-300 rounded-full">
							<Link href="/Roof">
								<a> Solar Roof</a>
							</Link>
						</li>
						<li className="h-8 pl-2 pt-1 
           w-[103px] hover:bg-gray-300 rounded-full hover:backdrop-blur-xl">
							<Link href="/Panel">
								<a> Solar Panels</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="buttons flex ml-40">
				<div className="hidden  xl:flex  ">
					<button className="text-[#171A20] text-[16px] font-semibold
      h-8  pt-[2px] w-[60px] hover:bg-gray-300 rounded-full ">
						Shop
					</button>
					<button className="text-[#171A20] text-[16px] font-semibold h-8 
             pt-[2px] w-[77px] hover:bg-gray-300 rounded-full">
						Account{' '}
					</button>
				</div>
				<button className="
       text-[26px]  sm:text-[16px] xl:text-[16px] xl:h-8  md:ml-[150px] lg:ml-[500px] 
         xl:ml-0 xl:pt-[3px]
        ml-32   sm:ml-44  xl:w-[70px] hover:bg-gray-300 rounded-full
         flex text-[#171A20] font-bold pl-4">
					<nav className="navBar">
						<button className="font-medium text-[#171A20] " onClick={handleToggle}>
							{navbarOpen ? <p className="text-[40px] md:text-[30px] left-11">X</p> : 'Menu'}
						</button>
						{/* <ul>...
          <GrMenu className="h-7 w-7"/>
              sssssssssssssssssssssssssssssssssssssssssssssssss
              ssssssssssssssssss
          </ul> */}

						<div
							className={`menuNav ${navbarOpen ? ' showMenu' : ''} 
        pt-[10px] max-w-[700px] md:max-w-[300px]
           xl:max-w-[300px]`}
						>
							<ul className=" left-0 mt-32 space-y-14 sm:space-y-6 md:space-y-1 
             lg:space-y-6 xl:space-y-6 
             ml-32 md:ml-11
              text-[33px] sm:text-[20px] xl:ml-10 ">
								<span className="h-16 xl:h-8 pl-3 pt-[7px] md:pt-[11px] xl:pt-[2px]  w-[224px] hover:bg-gray-300 rounded-full">
									<Link href="/ModelS">
										<a> Model S</a>
									</Link>
								</span>
								<span className="h-16 xl:h-8 pl-3 pt-[7px] md:pt-[11px] xl:pt-[2px]  w-[224px] hover:bg-gray-300  rounded-full">
									<Link href="/Model3">
										<a>
											{' '}
											<p className="">Model 3</p>
										</a>
									</Link>
								</span>
								<span className="h-16 xl:h-8 pl-3 pt-[7px] md:pt-[11px] xl:pt-[2px]  w-[224px] hover:bg-gray-300 rounded-full">
									<Link href="/ModelX">
										<a> Model X</a>
									</Link>
								</span>
								<span className="h-16 xl:h-8 pl-3 pt-[7px] md:pt-[11px] xl:pt-[2px]  w-[224px] hover:bg-gray-300 rounded-full">
									<Link href="/ModelY">
										<a> Model Y</a>
									</Link>
								</span>
								<span className="h-16 xl:h-8 pl-3 pt-[7px] md:pt-[11px] xl:pt-[2px]  w-[234px] hover:bg-gray-300 rounded-full">
									<Link href="/Roof">
										<a> Solar Roof</a>
									</Link>
								</span>
								<span className="h-16 xl:h-8 pl-0 pt-[7px] md:pt-[11px] xl:pt-[2px] w-[260px] wxl:w-[244px] hover:bg-gray-300 rounded-full hover:backdrop-blur-xl">
									<Link href="/Panel">
										<a> Solar Panels</a>
									</Link>
								</span>
							</ul>
						</div>
					</nav>
				</button>
			</div>
		</div>
	);
}

export default Header;
