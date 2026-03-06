const Footer = (props) => {
  const {
    foldMenu
  } = props;

  const now = new Date();

  return (
    <footer className={`footer-custom ${!foldMenu ? 'folded' : ''}`}>
      Copyright Juan Navarro © {now.getFullYear()}
    </footer>
  );
};

export default Footer;
