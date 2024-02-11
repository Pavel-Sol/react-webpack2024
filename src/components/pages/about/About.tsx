import SvgIcon from '@/assets/exit-svgrepo-com.svg';

const About = () => {
  return (
    <div>
      <h1>Abou5t</h1>

      <SvgIcon width={50} height={50} style={{ color: 'green' }} />

      <p>{__PLATFORM__}</p>
    </div>
  );
};

export default About;
