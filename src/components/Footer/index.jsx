const index = () => {
  const now = new Date()
  return (
    <>
      <footer className="footer-custom">
        Copyright Juan Navarro © {now.getFullYear()}
      </footer>
    </>
  )
}


export default index;