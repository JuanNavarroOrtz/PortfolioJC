const Footer = (props) => {
  const {
    foldMenu
  } = props;

  const now = new Date();

  return (
    <footer className={`footer-custom ${!foldMenu ? 'folded' : ''}`}>
      Juan Navarro © {now.getFullYear()} | Deployed on AWS S3 with Route 53 DNS and CloudFront delivery
    </footer>
  );
};

export default Footer;
