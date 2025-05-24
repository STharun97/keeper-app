function Footer() {
  const date = new Date();
  return <p className="copy">©Copyright {date.getFullYear()}</p>;
}
export default Footer;
