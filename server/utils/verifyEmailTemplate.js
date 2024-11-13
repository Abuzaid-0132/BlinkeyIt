const verifyEmailTemplate = ({ name, url }) => {
  return `
        <p>Dear ${name}</p>
        <p>Thankyou for your registration in BlinkryIt.</p>
        <a href=${url} style="color: white; background: blue; margin-top: 10px">Verify Your Email</a>    
    `;
};

export default verifyEmailTemplate;
