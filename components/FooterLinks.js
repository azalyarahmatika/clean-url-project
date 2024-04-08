import component from '../styles/components/footer.module.scss';

function FooterLinks() {
  return (
    <div className={component.footer_links}>
      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th>Resources</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Link Shortening</td>
            <td>Blog</td>
            <td>About</td>
          </tr>
          <tr>
            <td>Branded Links</td>
            <td>Developers</td>
            <td>Our Team</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Support</td>
            <td>Careers</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Contact</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
 
export default FooterLinks;