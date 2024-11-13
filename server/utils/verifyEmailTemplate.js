const verifyEmailTemplate = ({ name, url }) => {
  return `
        <p>Dear ${name}</p>
        <p>Thankyou for your registration in BlinkryIt.</p>
        <a href=${url} style="color: white; background: #071263; margin-top: 10px; padding: 20px; display: block">Verify Your Email</a>    
    `;
};

export default verifyEmailTemplate;
