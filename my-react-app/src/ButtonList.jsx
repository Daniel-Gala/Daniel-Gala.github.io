import Linkedinlogo from './assets/LinkedIn_icon.svg.png';
import GitHublogo from './assets/GitHublogo.png';
import Docs from './assets/docs.svg';
const ButtonLinksList = () => {

  const links = [
    {id: 1, icon: Linkedinlogo, name:'LinkedIn', url: 'https://www.linkedin.com/in/daniel-galaviz-059a45413'},
    {id: 2, icon: Docs, name:'Resume', url: 'https://drive.google.com/file/d/1jxWXApfe3emsViZVJhPVSJlKv5XbpRwQ/view?usp=sharing'},
    {id: 3, icon: GitHublogo, name:'GitHub', url: 'https://github.com/dan941-star'},
  ];

   return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      {/* 2. Map through the array and render each link */}
      {links.map((link) => (
        <a
          key={link.id} // Always provide a unique key
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link" // Apply CSS class to style it as a button
        >
        <img src={link.icon} alt={`${link.name} icon`} style={{ width: '20px', marginRight: '8px' }} />
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default ButtonLinksList;
