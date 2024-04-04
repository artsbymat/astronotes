import { useState } from 'react';

const navMenu = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Posts',
    link: '/posts'
  },
  {
    title: 'About',
    link: '/about'
  }
];

interface Props {
  url?: string;
  children?: any;
}

const Navbar = ({ url, children }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <div className="mx-auto flex h-24 max-w-screen-xl bg-light-white px-8 dark:bg-dark-gray">
        <div className="mr-auto flex flex-1 items-center space-x-2 text-3xl">
          <span aria-label="rocket" role="img" className="text-lg">
            👨🏻‍🚀
          </span>
          <a href="/" className="text-light-black dark:text-light-white">
            Astronotes
          </a>
        </div>
        <nav
          className={`absolute left-0 top-0 flex h-screen w-full flex-1 flex-col items-center justify-center gap-10 bg-light-white text-xl transition-transform duration-500 dark:bg-dark-gray sm:static sm:h-auto sm:w-auto sm:translate-y-0 sm:flex-row ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          {navMenu.map((menu) => {
            const { title, link } = menu;
            return (
              <a
                key={link}
                href={link}
                className={`text-light-black dark:text-light-white ${link === url ? 'border-b border-light-black dark:border-light-white' : 'border-none'}`}
              >
                {title}
              </a>
            );
          })}
        </nav>
        <div className="flex justify-end md:flex-1">{children}</div>
        <div
          className="menu z-30 ml-8 flex cursor-pointer items-center sm:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="fill-light-black dark:fill-light-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="35px"
            height="35px"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
