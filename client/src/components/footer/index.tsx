const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <a href="https://github.com/ldons/MERN-Template" target="_blank">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Made with</span>
                <img alt="MERN Template" src="logo.svg" className="size-6" />
                <span className="text-gray-600">MERN Template</span>
              </div>
            </a>
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} MERN Template. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
