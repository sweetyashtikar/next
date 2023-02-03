import React from 'react';

import Link from '@/components/Link';

const footerNavigation = {
  product: [
    { name: 'Blog', href: '/blog' },
    // { name: 'Events', href: '/events' },
    // { name: 'How it works', href: '/why-join' },
    { name: 'Partners', href: '/partners' },
    { name: 'Premium', href: '/premium' },
    // { name: 'Message from CEO', href: '#' },
  ],
  Resources: [
    {
      name: 'Support',
      href: '/blog',
    },
    // {
    //   name: 'Slack Community',
    //   href: '/blog',
    // },
    {
      name: 'Events',
      href: '/blog',
    },
    // {
    //   name: 'Team and services',
    //   href: '/blog',
    // },
    {
      name: 'Privacy Policy',
      href: '/blog',
    },
  ],
  about: (() => {
    const menu = [
      { name: 'About', href: '/about' },
      // { name: 'Team', href: '/team' },
      // { name: 'Success stories', href: '#' },
      { name: 'Contact us', href: '/contact' },
    ];
    return menu;
  })(),
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/CoFoundersLab/',
      img: '/assets/footer/facebook.svg',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cofounderslab/',
      img: '/assets/footer/insta.svg',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/CoFoundersLab',
      img: '/assets/footer/twitter.svg',

      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cofounderslab',
      img: '/assets/footer/linkedin.svg',

      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer
      className="mt-16 bg-[#1E2020] text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mb-12 space-y-8 lg:col-span-1">
          <Link href="/">
            <span className="sr-only ">CoFoundersLab</span>
            <img
              className=" h-7 w-auto sm:h-9 "
              src="/assets/footer/logo.png"
              alt="CoFoundersLab"
            />
          </Link>
        </div>
        <div className="text-center sm:text-left lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="mt-12 md:grid md:grid-cols-2 md:gap-8 lg:col-span-3 lg:mt-0">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider ">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base hover:text-primaryBlue"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider ">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.Resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base hover:text-primaryBlue"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold uppercase tracking-wider ">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base hover:text-primaryBlue"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sm:items-left mt-8 flex w-full flex-col items-center sm:mt-0 sm:w-1/2">
              <h4 className="w-full text-left font-sans text-sm font-semibold uppercase">
                Subscribe to our Newsletter
              </h4>
              <div className="mt-6 mb-6 flex items-center ">
                <input
                  type="text"
                  className="inputFooter w-full bg-[#1E2020]"
                  placeholder="Email address"
                ></input>
                <span className="flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-md bg-white px-3">
                  <img src="/assets/images/arrows.svg" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 block items-center justify-between border-t border-gray-400  pt-8 text-center sm:flex">
          <div className="mt-4 mb-4 flex justify-center">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mr-5 text-gray-400 last:mr-0 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <div className="rounded-full bg-white p-1 ">
                  <img src={item.img} alt="icons"></img>
                </div>
              </a>
            ))}
          </div>
          <p className="text-base text-gray-400 ">
            {year} All Rights Reserved By CoFounders Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
