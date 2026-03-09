const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 text-slate-500 py-6 sticky bottom-0 z-50">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Flow Notes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
