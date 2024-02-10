import SvgIcon from '@/assets/exit-svgrepo-com.svg';

const About = () => {
  if (__PLATFORM__ === 'desktop') {
    return <div>ISDESKTOPPLATFORM</div>;
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>ISMOBILEPLATFORM</div>;
  }

  return (
    <div>
      <h1>About</h1>

      <SvgIcon width={50} height={50} style={{ color: 'green' }} />

      <p>{__PLATFORM__}</p>
    </div>
  );
};

export default About;
