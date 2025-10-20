const Header = (props) => {
  const {
    foldMenu
  } = props;
  return (
    <>
      <header className={`header-custom ${!foldMenu ? 'folded' : ''}`}>
        WELCOME
      </header>
    </>
  )
};

export default Header;