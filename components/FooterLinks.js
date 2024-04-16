import component from '../styles/components/footer.module.scss';

function FooterLinks() {
  return (
    <div className={component.footer_links}>
      <div className={component.footer_links_group}>
        <p id='link_header'>Features</p>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div className={component.footer_links_group}>
        <p id='link_header'>Resources</p>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div className={component.footer_links_group}>
        <p id='link_header'>Company</p>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
 
export default FooterLinks;